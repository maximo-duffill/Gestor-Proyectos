<template>
    <div class="users-page">
      <header class="header">
        <div class="brand">OrganizeHub</div>
        <div class="buttons">
          <router-link to="/dashboard" class="dashboard-button">
            <el-button type="primary" round size="large">Dashboard</el-button>
          </router-link>
          <router-link to="/users" class="admin-button">
            <el-button type="primary" round size="large">Users</el-button>
          </router-link>
          <el-button @click="logout" type="primary" round size="large">Logout</el-button>
        </div>
      </header>
  
      <main class="user-list">
        <h2>User List</h2>
        <el-table :data="users" style="width: 100%">
          <el-table-column prop="user_id" label="ID" width="80"></el-table-column>
          <el-table-column prop="nombre" label="Name"></el-table-column>
          <el-table-column prop="email" label="Email"></el-table-column>
          <el-table-column prop="role" label="Role"></el-table-column>
          <el-table-column prop="active" label="Active"></el-table-column>
          <el-table-column label="Actions" width="180">
            <template #default="scope">
              <el-button @click="editUser(scope.row)" type="text" icon="el-icon-edit">Edit</el-button>
              <el-button @click="deleteUser(scope.row.user_id)" type="text" icon="el-icon-delete">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </main>
  
      <!-- Modal for editing user -->
      <el-dialog
        v-model="editUserDialogVisible"
        title="Edit User"
        width="30%"
        :before-close="closeEditUserDialog"
      >
        <el-form ref="editForm" :model="editUserForm" label-width="120px">
          <el-form-item label="ID">
            <el-input v-model="editUserForm.user_id" disabled></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input v-model="editUserForm.nombre"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="editUserForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Role">
            <el-input v-model="editUserForm.role"></el-input>
          </el-form-item>
          <el-form-item label="Active">
            <el-switch v-model="editUserForm.active" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-form>
        <span class="dialog-footer">
          <el-button @click="closeEditUserDialog">Cancel</el-button>
          <el-button type="primary" @click="saveEditedUser">Save</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        editUserDialogVisible: false,
        editUserForm: {
          user_id: '',
          nombre: '',
          email: '',
          role: '',
          active: false,
        },
      };
    },
    methods: {
      logout() {
        // Implement logout logic if needed
      },
      fetchUsers() {
        axios.get('/users') // Update with your actual backend API endpoint
          .then(response => {
            this.users = response.data.users; // Assuming backend returns { success: true, users: [...] }
          })
          .catch(error => {
            console.error('Error fetching users', error);
            // Handle error gracefully, show error message, etc.
          });
      },
      editUser(user) {
        // Populate edit form with user data
        this.editUserForm.user_id = user.user_id;
        this.editUserForm.nombre = user.nombre;
        this.editUserForm.email = user.email;
        this.editUserForm.active = user.active;
        this.editUserForm.role = user.role;
        
  
        // Show edit user dialog
        this.editUserDialogVisible = true;
      },
      async saveEditedUser() {
      try {
        const { user_id, ...editData } = this.editUserForm;
        console.log('Updating user with ID:', user_id); // Log to verify user_id

        const response = await axios.put(`http://localhost:3000/users/${user_id}`, editData);
        const updatedUser = response.data.user;

        // Update users array in frontend
        const index = this.users.findIndex(user => user.user_id === updatedUser.user_id);
        if (index !== -1) {
          this.users.splice(index, 1, updatedUser);
        }

        this.editUserDialogVisible = false; // Close edit dialog
        this.$message.success('User updated successfully.');
      } catch (error) {
        console.error('Error updating user', error);
        this.$message.error('Failed to update user.');
      }
    },
  
      deleteUser(userId) {
        // Implement delete user functionality if needed
        console.log('Deleting user with ID:', userId);
      }
    },
    created() {
      this.fetchUsers(); // Fetch users when component is created
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    background-color: rgba(26, 26, 26, 0.7);
  }
  
  .brand {
    color: #020202;
    font-size: 2rem;
    z-index: 1;
  }
  
  .buttons {
    z-index: 1;
  }
  
  .dashboard-button,
  .admin-button {
    padding-right: 10px; /* Adjust spacing as needed */
  }
  
  .user-list {
    padding: 20px;
  }
  </style>
  