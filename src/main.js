import { Router } from "./router.js";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);
app.use(Router);
app.mount("#app");
