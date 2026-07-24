import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { reveal } from "./directives/reveal.js";
import "./style.css";
import "./contact.css";
import "./motion.css";

createApp(App).use(router).directive("reveal", reveal).mount("#app");
