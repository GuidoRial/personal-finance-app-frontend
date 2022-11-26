import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

import {
  faUser,
  faXmark,
  faWallet,
  faRightLeft,
  faTable,
  faPiggyBank,
  faMoneyBillTransfer,
  faBuildingColumns,
  faPenToSquare,
  faTrash,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faXmark,
  faWallet,
  faRightLeft,
  faTable,
  faPiggyBank,
  faMoneyBillTransfer,
  faBuildingColumns,
  faPenToSquare,
  faTrash,
  faArrowDown
);

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
