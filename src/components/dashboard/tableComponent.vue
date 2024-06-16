<template>
  <div>
    <header class="header">
      <h1>Project List</h1>
    </header>

 

    <el-table :data="projects" :height="tableHeight" style="width: 100%" v-loading="loadingProjects">
  <el-table-column prop="project_id" label="Project id" sortable @sort-change="handleSortChange"></el-table-column>
  <el-table-column prop="name" label="Project Name" sortable @sort-change="handleSortChange"></el-table-column>
  <el-table-column prop="description" label="Description" sortable @sort-change="handleSortChange"></el-table-column>
  <el-table-column prop="start_date" label="Starting Date" sortable @sort-change="handleSortChange"></el-table-column>
  <el-table-column prop="end_date" label="Ending Date" sortable @sort-change="handleSortChange"></el-table-column>
  <el-table-column label="Actions">
    <template #default="scope">
          <el-button type="primary" @click="editProject(scope.row)">Edit</el-button>
          <el-button type="danger" @click="removeProject(scope.row.project_id)">Remove</el-button>
          <el-button type="info" @click="redirectToDetails(scope.row.project_id)">Details</el-button>
        </template>
  </el-table-column>
</el-table>

    <div v-if="projects.length === 0 && !loadingProjects">
      No projects found.
    </div>

    <div v-if="loadingProjects">
      Loading projects...
    </div>

    <!-- Edit Dialog -->
    <el-dialog
      :title="`Edit Project: ${editForm.project_id}`"
      v-model="editDialogVisible"
      width="30%"
    >
      <el-form :model="editForm" ref="editForm" label-width="120px">
        <el-form-item label="Project Name" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="editForm.description"></el-input>
        </el-form-item>
        <el-form-item label="Starting Date" prop="start_date">
          <el-date-picker v-model="editForm.start_date" type="date" placeholder="Select date"></el-date-picker>
        </el-form-item>
        <el-form-item label="Ending Date" prop="end_date">
          <el-date-picker v-model="editForm.end_date" type="date" placeholder="Select date"></el-date-picker>
        </el-form-item>
      </el-form>

      <span class="dialog-footer">
        <el-button @click="editDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="saveEdit">Save</el-button>
      </span>
    </el-dialog>

    


  </div>
</template>

<script>
import axios from 'axios';
import { format } from 'date-fns';

export default {
  data() {
    return {
      projects: [],
      tableHeight: '40vh',
      editDialogVisible: false,
      editForm: {
        project_id: null,
        name: '',
        description: '',
        start_date: null,
        end_date: null,
      },
    };
  },
  created() {
    this.fetchProjects();
    setInterval(this.fetchProjects, 10000);
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:3000/projects');

        if (response.data.success) {
          // Format the date strings using date-fns
          this.projects = response.data.projects.map(project => ({
            ...project,
            start_date: this.formatDate(project.start_date),
            end_date: this.formatDate(project.end_date),
          }));
        } else {
          console.error('Failed to fetch projects.');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    formatDate(dateString) {
      if (!dateString) {
        return '';
      }

      try {
        const parsedDate = new Date(dateString);
        return format(parsedDate, 'yyyy-MM-dd'); // Adjust format as needed
      } catch (error) {
        console.error('Error parsing date:', error);
        return 'Invalid Date';
      }
    },
    async removeProject(project_id) {
      console.log('Removing project with ID:', project_id); // Logging project ID
      try {
        const response = await axios.delete(`http://localhost:3000/projects/${project_id}`);
        console.log('Backend response:', response.data); // Logging backend response

        if (response.data.success) {
          // Update the projects array without the removed project
          this.projects = this.projects.filter(p => p.project_id !== project_id);
        } else {
          console.error('Failed to remove project.');
        }
      } catch (error) {
        console.error('Error removing project:', error);
      }
    },
    editProject(project) {
      // Open the edit dialog
      this.editForm.project_id = project.project_id;
      this.editForm.name = project.name;
      this.editForm.description = project.description;
      this.editForm.start_date = project.start_date ? new Date(project.start_date) : null;
      this.editForm.end_date = project.end_date ? new Date(project.end_date) : null;
      this.editDialogVisible = true;
    },
    async saveEdit() {
      try {
  const { user_id, ...editData } = this.editForm; // Assuming this.editForm contains user data including user_id
  const response = await axios.put(`http://localhost:3000/users/${user_id}`, editData);
  console.log('Backend response:', response.data); // Logging backend response

  if (response.data.success) {
    // Optional: Update local data or show success message
    this.editDialogVisible = false; // Close the edit dialog
    this.fetchUsers(); // Refresh user list after update
  } else {
    console.error('Failed to save edits.');
  }
} catch (error) {
  console.error('Error saving edits:', error);
}
    },
    handleSortChange({ prop, order }) {
      // Handle sorting change here
      if (order === 'ascending') {
        this.projects.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
      } else if (order === 'descending') {
        this.projects.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
      } else {
        // Reset sorting
        this.fetchProjects();
      }
    },
    redirectToDetails(project_id) {
      // Redirect to details page with project_id as query parameter
      this.$router.push({ path: '/details', query: { project_id } });
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 30px;
  background-color: #3498db;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  z-index: 0;
}

.sorting-buttons {
  margin-bottom: 10px;
}


.loading-text {
  text-align: center;
  margin-top: 20px;
}

.el-table {
  margin-top: 20px;
  border: 1px solid #ebeef5; /* Border style for the table */
}

.el-button {
  font-size: 12px;
}

.el-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.el-button--danger:hover {
  background-color: #e74c3c;
  border-color: #e74c3c;
}
</style>
