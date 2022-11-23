<template>
  <Auth @dataCollected="createAccount" />
</template>
<script>
import Auth from "@/components/auth.vue";
export default {
  name: "login-page",
  components: { Auth },
  methods: {
    createAccount(data) {
      console.log("signup", data);
    },
  },
};
</script>
