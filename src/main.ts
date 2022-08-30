import { createApp } from "vue";
import App from "./App.vue";
import Playground from "./pages/Playground/index.vue";

import { setup } from "./utils/bootstrap";

import "@/assets/css/fonts.css";
import "@/assets/css/tailwindcss.css";
import "animate.css";

setup({
  onProduction: () => {
    createApp(App).mount("#app");
  },
  onDevelopment: () => {
    createApp(Playground).mount("#app");
  },
});
