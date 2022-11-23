import axios from "./api";

export default {
  signUp(user) {
    return axios.post("/api/auth/signup", user).then((res) => res.data);
  },
  login(credentials) {
    return axios.post("/api/auth/login", credentials).then((res) => res.data);
  },
};
