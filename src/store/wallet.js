/* eslint-disable no-useless-catch */
import { defineStore } from "pinia";
import walletService from "@/service/wallet";

const useWallet = defineStore("wallet", {
  state: () => {
    return {};
  },
  actions: {
    // async updateWallet(data) {},
    // async deleteWallet(id) {},
    // async getWalletById(id) {},
    async createWallet(wallet) {
      try {
        const res = await walletService.createWallet(wallet);
        return res.result;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async editWallet(id, newWallet) {
      try {
        const res = await walletService.editWallet(id, newWallet);
        return res.result;
      } catch (e) {
        throw e;
      }
    },
    async getWallets() {
      try {
        const res = await walletService.getWallets();
        return res.result;
      } catch (e) {
        throw e;
      }
    },
  },
});

export default useWallet;
