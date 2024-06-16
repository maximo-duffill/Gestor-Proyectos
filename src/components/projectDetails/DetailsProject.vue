<template>
  <div>
    <header class="header">
      <div class="header-buttons">
        <router-link to="/" class="brand">OrganizeHub</router-link>
        <div class="user-info" v-if="loggedInUser">
          <div class="user-info-text">Logged in as {{ loggedInUser.email }}</div>
          <el-button type="primary" @click="logout">Logout</el-button>
        </div>
      </div>
      <h1>Project Management</h1>
    </header>

    <div class="container">
      <div class="project-details">
       
        <div v-if="tasksForProject.length > 0">
          <h2>Tasks for Project</h2>
          <div class="task-container">
            <div v-for="task in tasksForProject" :key="task.task_id" class="task-item">
              <div><strong>Task ID:</strong> {{ task.task_id }}</div>
              <div><strong>Description:</strong> {{ task.description }}</div>
              <div><strong>Assigned to:</strong> {{ task.assigned_to }}</div>
              <div><strong>Status:</strong> {{ task.status }}</div>
              <el-button type="primary" @click="openEditDialog('task', task)">Edit Task</el-button>
              <hr>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No tasks found for this project.</p>
        </div>
      </div>

      <el-dialog
        v-model="dialogVisible"
        :title="dialogType === 'project' ? 'Edit Project Detail' : 'Edit Task Detail'"
        width="30%"
        @close="resetDialog"
        class="edit-dialog"
      >
        <el-form ref="editForm" :model="editForm" label-width="120px">
          <el-form-item label="Project ID:" v-if="dialogType === 'project'">
            <el-input v-model="editForm.project_id" disabled></el-input>
          </el-form-item>
          <el-form-item label="Assigned to:" v-if="dialogType === 'project' || dialogType === 'task'">
            <el-input v-model="editForm.assigned_to"></el-input>
          </el-form-item>
          <el-form-item label="Description:" v-if="dialogType === 'project' || dialogType === 'task'">
            <el-input v-model="editForm.description"></el-input>
          </el-form-item>
          <el-form-item label="Status:" v-if="dialogType === 'project' || dialogType === 'task'">
            <el-input v-model="editForm.status"></el-input>
          </el-form-item>
        </el-form>

        <span class="dialog-footer">
          <el-button @click="resetDialog">Cancel</el-button>
          <el-button type="primary" @click="saveEdit">Save</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  data() {
    return {
      project: {},
      tasks: [],
      tasksForProject: [], // Filtered tasks based on project_id
      dialogVisible: false,
      dialogType: '',
      currentTask: null, // To store the task being edited
      editForm: {
        project_id: '',
        assigned_to: '',
        description: '',
        status: '',
      }
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.$store.commit('setUser', user);
    } else {
      this.$router.push('/');
    }
    this.fetchProjectDetails();
    this.fetchTasksForProject();
  },
  watch: {
    '$route.query.project_id': function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.fetchProjectDetails();
        this.fetchTasksForProject();
      }
    }
  },
  methods: {
    async fetchProjectDetails() {
      const projectId = this.$route.query.project_id;
      
      if (!projectId) {
        console.error('No project ID found in route query parameters.');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/projects/${projectId}`);
        
        if (response.data.success) {
          this.project = response.data.project;
          this.updateEditForm();
        } else {
          console.error('Failed to fetch project details.');
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    },
    async fetchTasksForProject() {
      const projectId = this.$route.query.project_id;
      if (!projectId) {
        console.error('No project ID found in route query parameters.');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/tasks?project_id=${projectId}`);
        
        if (response.data.success) {
          this.tasks = response.data.tasks;
          console.log('Fetched tasks:', this.tasks); // Log the fetched tasks
          this.filterTasksForProject();
        } else {
          console.error('Failed to fetch tasks for the project.');
        }
      } catch (error) {
        console.error('Error fetching tasks for the project:', error);
      }
    },
    filterTasksForProject() {
      const projectId = this.$route.query.project_id;
      // Ensure projectId is a string for comparison
      const projectIdStr = projectId.toString();
      console.log('Current projectId:', projectIdStr); // Debugging log
      console.log('All tasks:', this.tasks); // Debugging log

      this.tasksForProject = this.tasks.filter(task => {
        const taskProjectIdStr = task.project_id.toString();
        console.log(`Comparing task project_id: ${taskProjectIdStr} with route project_id: ${projectIdStr}`); // Debugging log
        return taskProjectIdStr === projectIdStr;
      });

      console.log('Filtered tasks for project:', this.tasksForProject); // Log the filtered tasks
    },
    updateEditForm() {
      this.editForm.project_id = this.project.project_id;
      this.editForm.assigned_to = this.project.assigned_to;
      this.editForm.description = this.project.description;
      this.editForm.status = this.project.status;
    },
    openEditDialog(type, task = null) {
      this.dialogType = type;
      if (type === 'project') {
        this.updateEditForm();
      } else if (type === 'task' && task) {
        this.currentTask = task;
        this.editForm = { ...task };
      }
      this.dialogVisible = true;
    },
    resetDialog() {
      this.dialogVisible = false;
      this.dialogType = '';
      this.currentTask = null;
      this.updateEditForm();
    },
    async saveEdit() {
    try {
      if (this.dialogType === 'project') {
        const response = await axios.put(`http://localhost:3000/projects/${this.project.project_id}`, {
          project_id: this.editForm.project_id,
          assigned_to: this.editForm.assigned_to,
          description: this.editForm.description,
          status: this.editForm.status,
        });
        if (response.data.success) {
          this.project = response.data.project;
          this.resetDialog();
        } else {
          console.error('Failed to update project detail.');
        }
      } else if (this.dialogType === 'task' && this.currentTask) {
        const response = await axios.put(`http://localhost:3000/tasks/${this.currentTask.task_id}`, {
          project_id: this.editForm.project_id,
          description: this.editForm.description,
          assigned_to: this.editForm.assigned_to,
          status: this.editForm.status,
        });
        if (response.data.success) {
          const taskIndex = this.tasksForProject.findIndex(task => task.task_id === this.currentTask.task_id);
          if (taskIndex !== -1) {
            this.tasksForProject[taskIndex] = { ...this.editForm };
          }
          this.resetDialog();
        } else {
          console.error('Failed to update task detail.');
        }
      }
    } catch (error) {
      console.error('Error updating detail:', error);
    }
  },
    logout() {
      // Implement logout logic
    }
  }
};
</script> 


<style scoped>
.container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 800px;
}

.header {
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  margin-bottom: 20px;
}

.header-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: #020202;
  font-size: 2rem;
  text-decoration: none;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info-text {
  background-color: #3498db;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 1.2rem;
  margin-right: 10px;
}

.el-button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border-radius: 8px;
}

.project-details {
  margin-bottom: 20px;
}

.edit-button-container {
  text-align: right;
}

.task-item {
  margin-bottom: 15px; /* Added space under each task item */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.dialog-footer {
  text-align: right;
  margin-top: 10px;
}

.edit-dialog {
  border-radius: 10px;
}
</style>
