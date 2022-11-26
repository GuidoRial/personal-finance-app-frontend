import axios from "./api";

export default {
  createWallet(wallet) {
    return axios.post("/api/wallet", wallet).then((res) => res.data);
  },
  getWallets() {
    return axios.get("/api/wallets").then((res) => res.data);
  },
  editWallet(id, wallet) {
    return axios.put(`/api/wallet/${id}`, wallet).then((res) => res.data);
  },
  deleteWallet(id) {
    return axios.delete(`/api/wallet/${id}`).then((res) => res.data);
  },
};
