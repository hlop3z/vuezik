// 3rd Party
import { reactive } from "vue";
import { css, injectGlobal, keyframes } from "@emotion/css";

// Modules
import VElement from "./VElement";
import Sync from "./sync";

// Directives
import swipe from "./directives/swipe";
import resize from "./directives/resize";
import clickOutside from "./directives/click-outside";

export default {
  install(app) {
    // Global Device
    app.config.globalProperties.$device = reactive({
      width: 0,
      height: 0,
      type: null,
      is: (...args) => args.includes(null),
    });
    // @Emotion-CSS
    app.config.globalProperties.$style = {
      css,
      inject: injectGlobal,
      keyframes: keyframes,
    };
    // @Super-Element
    app.component("x-element", VElement);
    // Sync
    app.mixin({
      mixins: [Sync],
      directives: {
        swipe,
        resize,
        clickOutside,
      },
    });
  },
};
