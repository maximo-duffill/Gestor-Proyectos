<template>
  <div class="chat-window">
    <div class="chat-header">
      {{ activeUser ? activeUser.email : 'Chat' }}
      <span class="close-button" @click="closeChat">&times;</span>
    </div>
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id">
        {{ message.sender.email }}: {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    UserListComponent,
    ChatComponent,
  },
  data() {
    return {
      users: [],
      chatOpen: false,
      selectedUser: null,
    };
  },
  created() {
    // Fetch users when the parent component is created
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        this.users = response.data.users;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    onUsersFetched(users) {
      // Update the users list when emitted from UserListComponent
      this.users = users;
    },
    openChat(user) {
      // Set the selectedUser and open chat
      this.selectedUser = user;
      this.chatOpen = true;
    },
  },
};
</script>
  
  <style scoped>
  .chat-messages {
    padding: 10px;
    background-color: #ffffff;
  }
  </style>
  