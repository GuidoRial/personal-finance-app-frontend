<template>
  <Auth :isLogin="true" @dataCollected="loginUser" />
</template>
<script>
import Auth from "@/components/auth.vue";
import authStore from "@/store/auth";
import { mapActions } from "pinia";
export default {
  name: "login-page",
  components: { Auth },
  methods: {
    ...mapActions(authStore, ["login"]),
    async loginUser(credentials) {
      // eslint-disable-next-line no-useless-catch
      try {
        await this.login(credentials);
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>
