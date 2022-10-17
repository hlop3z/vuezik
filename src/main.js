import { createApp } from "vue";
import App from "./App.vue";
import Vuezik from "./plugin";

const app = createApp(App);

app.use(Vuezik);
app.mount("#app");
