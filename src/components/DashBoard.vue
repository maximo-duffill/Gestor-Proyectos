<template>
    <div>
    <project />
    <project-table />
    <ChatBox />
    </div>
  </template>
  
  <script>
  import project from './dashboard/porjectComponent.vue';
  import projectTable from "./dashboard/tableComponent.vue";
  import ChatBox from './chat/chatComponent.vue';
  
  
  export default {
  components: {
    project,
    projectTable,
    ChatBox,
  },
};
  </script>
  
  <style>

  </style>