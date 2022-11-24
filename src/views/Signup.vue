<template>
  <Auth @dataCollected="createAccount" />
</template>
<script>
import Auth from "@/components/auth.vue";
import authStore from "@/store/auth";
import { mapActions } from "pinia";
export default {
  name: "signup-page",
  components: { Auth },
  methods: {
    ...mapActions(authStore, ["signUp"]),
    async createAccount(data) {
      // eslint-disable-next-line no-useless-catch
      try {
        await this.signUp(data);
        this.$router.push({ name: "dashboard" });
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>
