/* eslint-disable no-useless-catch */
import { defineStore } from "pinia";
import user from "../service/user";

const userStore = defineStore("user", {
  state: () => {
    return {};
  },
  actions: {
    async getAllNames() {
      try {
        const res = await user.getAllNames();
        return res.usernames;
      } catch (e) {
        throw e;
      }
    },
    async getAllEmails() {
      try {
        const res = await user.getAllEmails();
        return res.emails;
      } catch (e) {
        throw e;
      }
    },
  },
});

export default userStore;
