<!-- Signin.vue -->
<template>
  <div>
    <header class="header">
      <router-link to="/" class="brand">
        <div class="brand-text">OrganizeHub</div>
      </router-link>
    </header>
    <div class="signin-container">
      <el-card class="signin-card">
        <h2>Sign in</h2>
        <el-form ref="signupForm" :model="signupForm" label-width="120px">
          <el-form-item label="Name" prop="name">
            <el-input v-model="signupForm.name" placeholder="Enter your name"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email" :error="emailError">
            <el-input v-model="signupForm.email" placeholder="Enter your email" @input="validateEmail"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="signupForm.password" placeholder="Enter your password"></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password" prop="confirmPassword">
            <el-input type="password" v-model="signupForm.confirmPassword" placeholder="Confirm your password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="signup">Sign in</el-button>
          </el-form-item>
          <div class="feedback-message" v-if="feedbackMessage">{{ feedbackMessage }}</div>
        </el-form>
        <div class="google-signin">
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
        <p class="login-link">Already have an account? <router-link to="/login">Login here</router-link></p>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      signupForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      emailError: '',
      feedbackMessage: '',
    };
  },
  mounted() {
    window.onSignIn = this.onSignIn;
  },
  methods: {
    async signup() {
  if (this.isValidEmail(this.signupForm.email)) {
    if (this.signupForm.password === this.signupForm.confirmPassword) {
      try {
        // Send a POST request to your backend to create a new user
        const response = await axios.post('http://localhost:3000/signup', {
          name: this.signupForm.name,
          email: this.signupForm.email,
          password: this.signupForm.password,
        });

        if (response.data.success) {
          this.feedbackMessage = 'Signup successful!';
        } else {
          this.feedbackMessage = 'Signup failed. Please try again.';
        }
      } catch (error) {
        console.error('Signup error:', error);
        this.feedbackMessage = 'An error occurred during signup.';
      }
    } else {
      // Passwords do not match
      this.feedbackMessage = 'Passwords do not match. Please try again.';
    }
  } else {
    // Handle invalid email case
    this.feedbackMessage = 'Invalid email. Please check your input.';
  }
},
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateEmail() {
      // Reset error message
      this.emailError = '';

      // Validate email
      if (!this.isValidEmail(this.signupForm.email)) {
        this.emailError = 'Invalid email';
        this.feedbackMessage = ''; // Clear general feedback when there's a specific error
      } else {
        this.feedbackMessage = ''; // Clear general feedback when the email is valid
      }
    },
    async onSignIn(googleUser) {
      
      const idToken = googleUser.getAuthResponse().id_token;

      try {
        const response = await axios.post('http://localhost:3000/auth/google', {
          token: idToken,
        });

        if (response.data.success) {
          this.feedbackMessage = 'Google sign-in successful!';
        } else {
          this.feedbackMessage = 'Google sign-in failed. Please try again.';
        }
      } catch (error) {
        console.error('Google sign-in error:', error);
        this.feedbackMessage = 'An error occurred during Google sign-in.';
      }
    },
  },
};
</script>

<style scoped>
/* Your existing styles */

.header {
  display: flex;
  justify-content: center;
  padding: 20px;
  position: relative;
  margin-top: 4rem;
  margin-bottom: 1rem;
}
.brand {
  z-index: 1;
  text-decoration: none;
}

.brand-text {
  font-size: 5rem;
  color: black;
}

@media screen and (max-width: 768px) {
  .brand-text {
    font-size: 3rem;
  }
}
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/Pictures/WorldGlobe.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.signin-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, rgba(0, 170, 255, 0), rgba(0, 170, 255, 0.8), rgba(0, 170, 255, 1), rgba(0, 170, 255, 0.8), rgba(0, 170, 255, 0));
  pointer-events: none;
}

.signin-card {
  width: 500px;
  border-color: black;
  z-index: 1;
}

h2 {
  display: flex;
  justify-content: center;
}

.feedback-message {
  margin-top: 10px;
  color: red; /* You can customize the color */
}

.google-signin {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.login-link {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

.login-link a {
  color: #409eff; /* or any other color you prefer */
}
</style>
