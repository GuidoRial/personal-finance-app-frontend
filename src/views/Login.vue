<template>
  <Auth :isLogin="true" />
</template>
<script>
import Auth from "@/components/auth.vue";
export default {
  name: "login-page",
  components: { Auth },
};
</script>
