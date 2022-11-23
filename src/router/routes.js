import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Dashboard from "@/views/Dashboard.vue";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

export default routes;
