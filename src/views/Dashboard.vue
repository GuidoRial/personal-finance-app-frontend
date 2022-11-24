<template>
  <div class="dashboard">Test</div>
</template>

<script>
export default {
  name: "dashboard-page",
  mounted() {
    console.log("dashboard");
  },
};
</script>
<style scoped>
.dashboard {
  background-color: var(--main-bg);
  height: 100vh;
  color: var(--white);
}
</style>
