import axios from "./api";

export default {
  createWallet(wallet) {
    return axios.post("/api/wallet", wallet).then((res) => res.data);
  },
  getWallets() {
    return axios.get("/api/wallets").then((res) => res.data);
  },
};
