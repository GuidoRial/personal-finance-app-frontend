<template>
  <button class="secondary-button">{{ text }}</button>
</template>
<script>
export default { name: "secondary-button", props: { text: { type: String } } };
</script>
<style scoped>
.secondary-button {
  background-color: var(--dark-gray);
  width: 5rem;
  height: 1.5rem;
  color: var(--white);
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid var(--dark-gray);
}

.secondary-button:hover {
  opacity: 0.7;
}
</style>
