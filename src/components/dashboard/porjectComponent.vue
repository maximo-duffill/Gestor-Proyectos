<template>
  <div>
    <header class="header">
      <div class="header-buttons">
        <router-link to="/" class="brand">OrganizeHub</router-link>
        <router-link to="/users" class="admin-button">
            <el-button type="primary" round size="large">Users</el-button>
        </router-link>
        <div class="user-info" v-if="loggedInUser">
          <div class="user-info-text">Logged in as {{ loggedInUser.email  }}</div>
          <el-button type="primary" @click="logout">Logout</el-button>
        </div>
      </div>
      <h1>Project Management</h1>
    </header>

    <el-card class="project-card">
      <div class="project-form">
        <h2>Add Project</h2>
        <form @submit.prevent="addProject" class="addProject">
          <div class="form-group">
            <label for="projectName">Project Name:</label>
            <el-input v-model="projectName" id="projectName" placeholder="Enter Project Name" required></el-input>
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <el-input v-model="description" id="description" type="textarea" placeholder="Enter Project Description" required></el-input>
          </div>
          <div class="form-group">
            <label for="startDate">Starting Date:</label>
            <el-date-picker v-model="startDate" id="startDate" type="date" placeholder="Select Starting Date" required></el-date-picker>
          </div>
          <div class="form-group">
            <label for="endDate">Ending Date:</label>
            <el-date-picker v-model="endDate" id="endDate" type="date" placeholder="Select Ending Date" required></el-date-picker>
            <!-- Feedback message under the end date -->
            <div class="feedback-message" v-if="feedbackMessage">{{ feedbackMessage }}</div>
          </div>
          <div class="form-group">
            <el-button type="primary" round @click="addProject">Add</el-button>
          </div>
        </form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  created() {
    // Check if there is a logged-in user in localStorage on component creation
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.$store.commit('setUser', user);
    } else {
      this.$router.push('/');
    }
  },
  data() {
    return {
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
      feedbackMessage: '', // Add feedback message state
    };
  },
  methods: {
    async addProject() {
      if (this.projectName.trim() !== '') {
        // Check if the starting date is not later than the ending date
        if (new Date(this.startDate) > new Date(this.endDate)) {
          this.feedbackMessage = 'Starting date cannot be later than the ending date.';
          return;
        }

        const projectData = {
          name: this.projectName,
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        try {
          // Send project data to the server for insertion
          const response = await axios.post('http://localhost:3000/projects', projectData);

          if (response.data.success) {
            console.log('Project added successfully!');
            // Optionally, you can reset the form fields or perform other actions
          } else {
            console.error('Failed to add project.');
          }
        } catch (error) {
          console.error('Error adding project:', error);
        } finally {
          // Reset feedback message after submitting the form
          this.feedbackMessage = '';
        }
      }
    },
    async logout() {
      this.$store.commit('clearUser'); // Clear user state
      this.$router.push('/'); // Redirect to login or home page
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

.header-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: #020202;
  font-size: 2rem;
  z-index: 1;
  text-decoration: none;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info-text {
  background-color: #3498db;
  color: #fff;
  border: 1px solid #fff; /* Border properties */
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 1.2rem;
}

.user-info-text + el-button {
  margin-left: 10px; /* Space between "Logged in as" and "Logout" */
}

.dashboard-button,
  .admin-button {
    padding-right: 10px; /* Adjust spacing as needed */
  }

.el-button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border: 1px solid black; /* Set the border color */
  border-radius: 8px; /* Set the border-radius for a rounded appearance */
}

.project-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 2000px; /* Increase the max-width */
  width: 80vw; /* Set the width to 80% of the viewport width */
  margin: auto;
  margin-top: 2rem;
}

.project-form {
  display: flex;
  width: 100%; /* Set the width to 100% */
  padding: 1rem;
}

.form-group {
  display: flex;
  align-items: center;
  margin-right: 1rem; /* Adjust the margin to add space between form elements */
}

form {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
}

label {
  margin-bottom: 0.5rem;
}

input,
.el-input,
.el-textarea,
.el-date-picker {
  border-radius: 4px;
}

button,
.el-button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border: none;
}

h2 {
  width: 20%;
}

.feedback-message {
  margin-top: 10px;
  color: red; /* You can customize the color */
}
</style>
