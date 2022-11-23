<template>
  <Auth :isLogin="true" @dataCollected="login" />
</template>
<script>
import Auth from "@/components/auth.vue";
export default {
  name: "login-page",
  components: { Auth },
  methods: {
    login(data) {
      console.log("login", data);
    },
  },
};
</script>
