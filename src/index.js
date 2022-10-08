import { reactive } from "vue";

// Plugins
import SuperElements from "./tools/base-elements.js";
import valueSync from "./tools/value-sync";

// Directives
import swipe from "./tools/directives/swipe";
import resize from "./tools/directives/resize";
import clickOutside from "./tools/directives/click-outside";

const CONFIG = {
  title: "Vuezik",
  debug: false,
  dark: false,
};

export default {
  install(app, options = {}) {
    const { theme } = options;
    // Global Properties
    app.config.globalProperties.$config = reactive(CONFIG);
    app.config.globalProperties.$device = reactive({
      width: 0,
      height: 0,
      type: null,
      is: (...args) => args.includes(null),
    });
    // Directives
    app.mixin({
      directives: {
        swipe,
        resize,
        clickOutside,
      },
    });
    // Super Element
    app.use(SuperElements, theme);
    // Sync
    app.use(valueSync);
  },
};
