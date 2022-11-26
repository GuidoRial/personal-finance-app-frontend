<template>
  <div class="add-wallet-message">
    <h4>{{ firstText }}</h4>
    <h5>{{ secondText }}</h5>
  </div>
</template>
<script>
export default {
  name: "dashboard-not-found-message",
  props: {
    firstText: String,
    secondText: String,
  },
};
</script>
<style scoped>
.add-wallet-message {
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
