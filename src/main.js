import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
