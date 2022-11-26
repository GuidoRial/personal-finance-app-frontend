<template>
  <button class="dashboard-action-button">{{ text }}</button>
</template>
<script>
export default {
  name: "dashboard-action-button",
  props: {
    text: { type: String },
  },
};
</script>
<style scoped>
.dashboard-action-button {
  background-color: var(--dark-gray);
  width: 10rem;
  height: 1.5rem;
  color: var(--white);
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid var(--dark-gray);
}

.dashboard-action-button:hover {
  opacity: 0.7;
}
</style>
