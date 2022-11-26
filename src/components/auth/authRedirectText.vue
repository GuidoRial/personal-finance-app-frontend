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
  color: var(--soft-gray);
  font-size: 12px;
}
.message a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
}
</style>
