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
    async getWallets() {},
    async createWallet(wallet) {
      try {
        const res = await walletService.createWallet(wallet);
        return res.result;
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
});

export default useWallet;
