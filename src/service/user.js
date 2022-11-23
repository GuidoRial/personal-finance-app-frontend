import axios from "./api";

export default {
  getAllNames() {
    return axios.get("/api/users/usernames").then((res) => res.data);
  },
  getAllEmails() {
    return axios.get("/api/users/emails").then((res) => res.data);
  },
};
