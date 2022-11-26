/* eslint-disable no-useless-catch */
import { defineStore } from "pinia";
import auth from "@/service/auth";
import useWallet from "./wallet";

const authStore = defineStore("auth", {
  state: () => {
    return {
      token: localStorage.getItem("access-token") || "",
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  actions: {
    async getUserData(wallets) {
      try {
        if (wallets === "wallets") {
          const walletStore = useWallet();
          this.user.wallets = await walletStore.getWallets();
          localStorage.setItem("user", JSON.stringify(this.user));
        }
      } catch (e) {
        throw e;
      }
    },
    async login(credentials) {
      try {
        const res = await auth.login(credentials);
        this.token = res.result.accessToken;
        this.user = res.result.user;
        localStorage.setItem("access-token", res.result.accessToken);
        localStorage.setItem("user", JSON.stringify(res.result.user));
        return res.result;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async signUp(user) {
      try {
        const res = await auth.signUp(user);
        this.user = res.result.user;
        this.token = res.result.accessToken;
        const token = res.result.accessToken;
        window.localStorage.setItem("access-token", token);
        window.localStorage.setItem("user", JSON.stringify(this.user));
        return res.result;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    logout() {
      localStorage.removeItem("access-token");
      localStorage.removeItem("user");
      this.token = "";
      this.user = {};
    },
  },
});

export default authStore;
