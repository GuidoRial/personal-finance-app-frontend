import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Dashboard from "@/views/Dashboard.vue";
import useAuth from "@/store/auth";
const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
        beforeEnter: () => {
          const authStore = useAuth();

          if (authStore.isLoggedIn) {
            return { name: "dashboard" };
          }
        },
      },
      {
        path: "signup",
        name: "signup",
        component: Signup,
        beforeEnter: () => {
          const authStore = useAuth();

          if (authStore.isLoggedIn) {
            return { name: "dashboard" };
          }
        },
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: () => {
          const authStore = useAuth();

          if (!authStore.isLoggedIn) {
            return { name: "login" };
          }
        },
      },
    ],
  },
];

export default routes;
