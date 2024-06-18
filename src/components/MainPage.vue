

<template>
    <div>
    <Header />
    <Home />
    <Footer />
    <ChatBox />
    </div>
  </template>
  
  <script>
  import Header from './mainPage/HeaderComponent.vue';
  import Home from './mainPage/HomeComponent.vue';
  import Footer from './mainPage/FooterComponent.vue';
  import ChatBox from './chat/chatComponent.vue';
  
  export default {
  components: {
    Header,
    Home,
    Footer,
    ChatBox,
  },
};
  </script>
  
  <style>

  </style>