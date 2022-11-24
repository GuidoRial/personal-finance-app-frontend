<template>
  <button>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "authButton",
  props: {
    text: String,
  },
};
</script>
<style scoped>
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  width: 100%;
  border: 0;
  padding: 15px;
  color: var(--white);
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
button {
  background: var(--primary);
}
</style>
