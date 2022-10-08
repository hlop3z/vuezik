import { createApp } from "vue";
import App from "./App.vue";

// Application
const app = createApp(App);

// Style
import "./assets/main.css";

// Plugins
import Plugin from "./index";

// Config
app.use(Plugin, {
  theme: {
    dark: {
      1: "#FAEBD7",
      2: "blue",
      3: "AntiqueWhite",
    },
    light: {
      1: "#FAEBD7",
      2: "blue",
      3: "AntiqueWhite",
    },
  },
});

app.mount("#app");
