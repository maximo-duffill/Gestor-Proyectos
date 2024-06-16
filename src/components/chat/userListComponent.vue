<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-box" @click="openChat(user)">
      {{ user.email }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['users'],
  created() {
    // Fetch users when the component is created
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        console.log("hahha");
        const response = await axios.get('http://localhost:3000/users');
        // Emit an event to the parent component with the fetched users
        this.$emit('users-fetched', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    openChat(user) {
      // Implement logic to open a chat with the selected user
      console.log('Open chat with user:', user.email); // Adjust this line based on the property you want to display
    },
  },
};
</script>

<style scoped>
.user-list {
  padding: 10px;
}

.user-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
}

.user-box:hover {
  background-color: #e0e0e0;
}
</style>