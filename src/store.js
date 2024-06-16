// store.js

import { createStore } from 'vuex'; // Import createStore from Vuex
import axios from 'axios';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem('user'); // Remove user from localStorage
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/user');
        if (response.data) {
          commit('setUser', { ...response.data });
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    // Other actions like login, logout, etc.
  },
  getters: {
    loggedInUser(state) {
      return state.user;
    },
  },
});

