<template>
  <Header v-if="this.getRoute !== '/login' && this.getRoute !== '/signup'" />
  <router-view></router-view>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  computed: {
    getRoute() {
      return window.location.pathname;
    },
  },
};
</script>
<style>
:root {
  --primary: #34a853;
  --white: #fff;
  --dark-gray: #181a20;
  --red: #ef3b3a;
  --soft-gray: #f2f2f2;
  --input-bg: #b3b3b3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
