<template>
  <Header v-if="this.getRoute !== 'login' && this.getRoute !== 'signup'" />
  <Viewer />
</template>
<script>
import Header from "@/components/Header.vue";
import Viewer from "@/components/viewer.vue";
export default {
  components: {
    Header,
    Viewer,
  },
  computed: {
    getRoute() {
      return this.$route.name;
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
.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.rounded-circle {
  border-radius: 50%;
}

.m-2 {
  margin: 1.5rem;
}
.flex-column {
  flex-direction: column;
}
.gap-1 {
  gap: 1rem;
}

.primary {
  color: var(--primary);
  font-weight: 700;
  font-family: "Gothic A1", sans-serif;
}
</style>
