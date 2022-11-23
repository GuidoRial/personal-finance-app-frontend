<template>
  <p class="message">
    {{ text }}
    <router-link :to="route">{{ linkText }}</router-link>
  </p>
</template>

<script>
export default {
  props: {
    text: String,
    linkText: String,
    route: String,
  },
};
</script>
<style scoped>
.message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.message a {
  color: #4caf50;
  text-decoration: none;
}
</style>
