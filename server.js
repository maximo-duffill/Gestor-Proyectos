const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your Google OAuth credentials
const CLIENT_ID = '514701112146-kh4am8b76af8rhgsf16qj7r9qie93bd1.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/google/callback'; // Redirect URI registered with Google

const oauth2Client = new OAuth2Client({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
});

// Function to generate activation code
function generateActivationCode() {
  return crypto.randomBytes(16).toString('hex');
}

// Configuración de CORS
app.use(cors());

app.use(bodyParser.json()); // Parse JSON requests

// Configuración de MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project_management',
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Ejemplo de endpoint para obtener proyectos
app.get('/', (req, res) => {
  res.send('Welcome to the application!');
});

app.get('/signup', async (req, res) => {
  try {
    const [users] = await db.promise().query('SELECT nombre, email FROM project_management.users');
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error('Fetch users error:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching users.' });
  }
});

app.post('/signup', async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    // Check if the user already exists
    const [existingUser] = await db.promise().query('SELECT * FROM project_management.users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: 'User already exists.' });
    }

    // Generate salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user with hashed password and salt
    const codActivacion = generateActivationCode();
    const [result] = await db.promise().query('INSERT INTO project_management.users (nombre, email, password_hash, salt, codActivacion) VALUES (?, ?, ?, ?, ?)', [
      nombre,
      email,
      hashedPassword,
      salt,
      codActivacion,
    ]);

    if (result.insertId) {
      return res.status(201).json({ success: true, message: 'User created successfully.' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to create user.' });
    }
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during signup.' });
  }
});

// Google OAuth2 login route
app.get('/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'email profile', // Specify required scopes here
  });
  res.redirect(authUrl);
});

// Google OAuth2 callback route
app.get('/google/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    
    const userInfo = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: CLIENT_ID,
    });

    const { email, nombre } = userInfo.payload;

    // Generate activation code
    const codActivacion = generateActivationCode();

    // Check if user already exists in database
    const [existingUser] = await db.promise().query('SELECT * FROM project_management.users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: 'User already exists.' });
    }

    // Insert the new user into the database with the activation code
    const [result] = await db.promise().query('INSERT INTO project_management.users (nombre, email, codActivacion) VALUES (?, ?, ?)', [
      nombre,
      email,
      codActivacion,
    ]);

    if (result.insertId) {
      return res.status(201).json({ success: true, message: 'User created successfully.' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to create user.' });
    }
  } catch (error) {
    console.error('OAuth2 callback error:', error);
    res.status(500).json({ success: false, message: 'OAuth2 callback error.' });
  }
});

app.post('/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const email = payload.email;

    // Check if the user exists in your database
    const [user] = await db.promise().query('SELECT * FROM project_management.users WHERE email = ?', [email]);

    if (user.length) {
      // User exists, authenticate the user
      return res.status(200).json({ success: true, message: 'Authentication successful' });
    } else {
      // User does not exist, create a new user
      const [result] = await db.promise().query('INSERT INTO project_management.users (email, activo) VALUES (?, 1)', [email]);
      if (result.insertId) {
        return res.status(201).json({ success: true, message: 'User created and authenticated successfully' });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to create user' });
      }
    }
  } catch (error) {
    console.error('Google sign-in error:', error);
    return res.status(500).json({ success: false, message: 'Authentication failed' });
  }
});

app.get('/login', async (req, res) => {
  const { email } = req.query;

  try {
    // Check if the user exists in the database
    const [users] = await db.promise().query('SELECT nombre, email FROM project_management.users');
    res.status(200).json({ success: true, users });

    if (user.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // User found, return user details
    return res.status(200).json({ success: true, user: user[0] });
  } catch (error) {
    console.error('GET login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    // Check if the user exists in the database
    const [user] = await db.promise().query('SELECT * FROM project_management.users WHERE email = ?', [email]);

    if (!user.length) {
      return res.status(401).json({ success: false, message: 'Incorrect email or password' });
    }

    const hashedPassword = user[0].password_hash;

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      // Passwords match, authentication successful
      return res.status(200).json({ success: true, message: 'Authentication successful' });
    } else {
      // Passwords do not match
      return res.status(401).json({ success: false, message: 'Incorrect email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Otros endpoints para tareas, usuarios, mensajes de chat, etc.

app.post('/projects', async (req, res) => {
  const { name, description, startDate, endDate } = req.body;

  try {
    // Insert the new project into the database
    const [projectResult] = await db
      .promise()
      .query(
        'INSERT INTO project_management.projects (name, description, start_date, end_date) VALUES (?, ?, ?, ?)',
        [name, description, startDate, endDate]
      );

      

    if (projectResult.insertId) {
      // Insert the corresponding task into the tasks table
      const taskData = {
        project_id: projectResult.insertId,
        description: description,
        assigned_to: null, // You can modify this based on your application logic
        status: 'Pending' // Example status, adjust as needed
      };

      const [taskResult] = await db
        .promise()
        .query(
          'INSERT INTO project_management.tasks (project_id, description, assigned_to, status) VALUES (?, ?, ?, ?)',
          [taskData.project_id, taskData.description, taskData.assigned_to, taskData.status]
        );

      if (taskResult.insertId) {
        res.status(201).json({ success: true, message: 'Project and task added successfully.' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to add task for the project.' });
      }
    } else {
      res.status(500).json({ success: false, message: 'Failed to add project to the database.' });
    }
  } catch (error) {
    console.error('Error adding project and task to the database:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.get('/projects', async (req, res) => {
  try {
    // Fetch all projects from the database
    const [projects] = await db.promise().query('SELECT * FROM project_management.projects');

    // Return the list of projects
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.delete('/projects/:project_id', async (req, res) => {
  const { project_id } = req.params;
  console.log('Received request to delete project with ID:', project_id); // Logging received project ID

  try {
    const [result] = await db.promise().query('DELETE FROM project_management.projects WHERE project_id = ?', [project_id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Project removed successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Project not found.' });
    }
  } catch (error) {
    console.error('Error removing project from database:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.put('/projects/:project_id', async (req, res) => {
  const project_id = req.params.project_id; // Corrected from req.params.id to req.params.project_id
  const { name, description, start_date, end_date } = req.body;

  try {
    // Check if the project exists in the database
    const [existingProject] = await db.promise().query('SELECT * FROM project_management.projects WHERE project_id = ?', [project_id]);

    if (existingProject.length === 0) {
      return res.status(404).json({ success: false, message: 'Project not found.' });
    }

    // Update the project in the database
    const [result] = await db
      .promise()
      .query('UPDATE project_management.projects SET name = ?, description = ?, start_date = ?, end_date = ? WHERE project_id = ?',
        [name, description, start_date, end_date, project_id]);

    if (result.affectedRows > 0) {
      // Fetch the updated project
      const [updatedProject] = await db.promise().query('SELECT * FROM project_management.projects WHERE project_id = ?', [project_id]);
      
      // Return the updated project
      res.status(200).json({ success: true, message: 'Project updated successfully.', project: updatedProject[0] });
    } else {
      res.status(500).json({ success: false, message: 'Failed to update project.' });
    }
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const [users] = await db.promise().query('SELECT * FROM project_management.users');

    // Return the list of users
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error('Fetch users error:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching users.' });
  }
});

// Endpoint to update a user, including active status
app.put('/users/:user_id', async (req, res) => {
  const user_id = req.params.user_id;
  const { nombre, email, activo, role } = req.body;
  console.log(user_id);

  try {
    // Check if the user exists
    const [existingUser] = await db.promise().query('SELECT * FROM project_management.users WHERE user_id = ?', [user_id]);

    if (existingUser.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Update user details including active status
    const [result] = await db.promise().query('UPDATE project_management.users SET nombre = ?, email = ?, activo = ?, role = ? WHERE user_id = ?',
      [nombre, email, activo, role,  user_id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'User updated successfully.' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to update user.' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});


app.get('/chat_messages', async (req, res) => {
  try {
    // Query to fetch all messages
    const [messages] = await db.promise().query('SELECT * FROM chat_messages');

    // Return the messages
    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch chat_messages' });
  }
});

app.post('/messages', async (req, res) => {
  const { sender_id, recipient_id, message_content } = req.body;

  try {
    // Insert new message into the database
    const [result] = await db.promise().query('INSERT INTO messages (sender_id, recipient_id, message_content) VALUES (?, ?, ?)',
      [sender_id, recipient_id, message_content]);

    if (result.insertId) {
      res.status(201).json({ success: true, message: 'Message created successfully.' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to create message.' });
    }
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// PUT endpoint to update an existing message
app.put('/messages/:message_id', async (req, res) => {
  const message_id = req.params.message_id;
  const { message_content } = req.body;

  try {
    // Check if the message exists
    const [existingMessage] = await db.promise().query('SELECT * FROM messages WHERE id = ?', [message_id]);

    if (existingMessage.length === 0) {
      return res.status(404).json({ success: false, message: 'Message not found.' });
    }

    // Update the message in the database
    const [result] = await db.promise().query('UPDATE messages SET message_content = ? WHERE id = ?',
      [message_content, message_id]);

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Message updated successfully.' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to update message.' });
    }
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/tasks', async (req, res) => {
  const { project_id, description, assigned_to, status } = req.body;

  try {
    // Insert the new task into the database
    const [result] = await db.promise().query('INSERT INTO project_management.tasks (project_id, description, assigned_to, status) VALUES (?, ?, ?, ?)', [
      project_id,
      description,
      assigned_to,
      status,
    ]);

    if (result.insertId) {
      res.status(201).json({ success: true, message: 'Task created successfully.' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to create task.' });
    }
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    // Fetch all tasks from the database
    const [tasks] = await db.promise().query('SELECT * FROM project_management.tasks');

    // Return the list of tasks
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.get('/tasks/:project_id', async (req, res) => {
  const project_id = req.params.project_id;

  try {
    // Fetch tasks from the database by project_id
    const [tasks] = await db.promise().query('SELECT * FROM project_management.tasks WHERE project_id = ?', [project_id]);

    if (tasks.length === 0) {
      return res.status(404).json({ success: false, message: 'No tasks found for the project.' });
    }

    // Return the tasks
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});
app.put('/tasks/:task_id', async (req, res) => {
  const taskId = req.params.id;
  const { project_id, description, assigned_to, status } = req.body;

  try {
    // Check if the task exists in the database
    const [existingTask] = await db.promise().query('SELECT * FROM project_management.tasks WHERE task_id = ?', [taskId]);

    if (existingTask.length === 0) {
      return res.status(404).json({ success: false, message: 'Task not found.' });
    }

    // Update the task in the database
    const [result] = await db
      .promise()
      .query('UPDATE project_management.tasks SET project_id = ?, description = ?, assigned_to = ?, status = ? WHERE task_id = ?',
        [project_id, description, assigned_to, status, taskId]);

    if (result.affectedRows > 0) {
      // Fetch the updated task
      const [updatedTask] = await db.promise().query('SELECT * FROM project_management.tasks WHERE task_id = ?', [taskId]);

      // Return the updated task
      res.status(200).json({ success: true, message: 'Task updated successfully.', task: updatedTask[0] });
    } else {
      res.status(500).json({ success: false, message: 'Failed to update task.' });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    // Delete the task from the database
    const [result] = await db.promise().query('DELETE FROM project_management.tasks WHERE id = ?', [taskId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Task deleted successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Task not found.' });
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});





// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});
