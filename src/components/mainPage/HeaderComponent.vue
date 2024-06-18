<template>
  <header class="header">
    <div class="brand">OrganizeHub</div>
    <div class="buttons" v-if="!loggedInUser">
      <router-link to="/signin" class="signin-button">
        <el-button type="primary" round size="large">Sign in</el-button>
      </router-link>
      <router-link to="/login" class="login-button">
        <el-button type="primary" round size="large">Login</el-button>
      </router-link>
    </div>
    <div class="user-info" v-if="loggedInUser">
      <router-link to="/dashboard" class="dashboard-button">
        <el-button type="primary" round size="large">Dashboard</el-button>
      </router-link>
      <template v-if="loggedInUser.role = 'admin'">
        <router-link to="/users" class="admin-button">
          <el-button type="primary" round size="large">Users</el-button>
        </router-link>
      </template>
      <div class="logged-in">
        Logged in as {{ loggedInUser.email }}
      </div>
      <el-button @click="logout" type="primary" round size="large">Logout</el-button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.commit('clearUser');
    },
  },
};
</script>

<style scoped>
.body{
  margin: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  background-color: rgba(26, 26, 26, 0.7);
  width: 100%
}

.brand {
  color: #020202;
  font-size: 2rem;
  z-index: 1;
}

.buttons {
  z-index: 1;
}

.signin-button,
.login-button,
.dashboard-button {
  padding-right: 10px; /* Adjust spacing as needed */
}

.user-info {
  display: flex;
  align-items: center;
  z-index: 1;
  color: #fff;
}

.logged-in {
  border: 1px solid #000000;
  border-radius: 8px;
  background-color: #3498db;
  padding: 5px;
  margin-right: 10px; /* Adjust spacing as needed */
  font-size: 1.2rem;
}
</style>
