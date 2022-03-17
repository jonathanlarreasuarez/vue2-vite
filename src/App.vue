<template>
  <main>
    <px-header  :links="links" /> 
     <router-view />
  </main>
</template>

<script>

import PxHeader from "./components/PxHeader.vue";

export default {
   name: "app",
  components: {
    PxHeader
  },
  data() {
    return {links: [
        {
          title: 'HOME',
          to: { name: 'home'}
        },
        {
          title: 'TICKET',
          to: { name: 'tickets' }
        }
      ]};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>