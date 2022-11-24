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
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;700&display=swap");
:root {
  --primary: #34a853;
  --white: #fff;
  --dark-gray: #181a20;
  --red: #ef3b3a;
  --soft-gray: #f2f2f2;
  --input-bg: #b3b3b3;
  --main-bg: #0b0e11;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
body {
  margin: 0;
  padding: 0;
}
</style>
