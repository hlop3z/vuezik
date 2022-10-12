import { h } from "vue";
import Colors from "./colors";
import AppBase from "./base-app";

export default {
  install(app, options = {}) {
    // (Component) Super-Element
    const superElement = {
      methods: {
        getColor(vname) {
          const { dark } = this;
          let colors = null;
          if (dark) {
            // Dark
            colors = options.dark;
          } else {
            // Light
            colors = options.light;
          }
          let name = vname;
          if (vname === "color-1") {
            name = colors[1];
          }
          if (vname === "color-2") {
            name = colors[2];
          }
          if (vname === "color-3") {
            name = colors[3];
          }
          return Colors[name] ? Colors[name] : name;
        },
      },
      props: {
        /* Config */
        tag: {
          type: String,
          default: "div",
        },
        ripple: {
          type: Boolean,
          default: false,
        },
        textCase: {
          type: String,
          default: null,
        },
        cursor: {
          type: String,
          default: null,
        },
        hover: {
          type: Boolean,
          default: false,
        },
        layer: {
          type: [Number, String],
          default: 0,
        },
        /* Colors */
        colorBackground: {
          type: String,
          default: "transparent",
        },
        colorText: {
          type: String,
          default: null,
        },
        colorBorder: {
          type: String,
          default: "transparent",
        },
        borderSize: {
          type: [Number, String],
          default: 1,
        },
        borderStyle: {
          type: String,
          default: "solid",
        },
        dark: {
          type: Boolean,
          default: false,
        },
      },
      computed: {
        theClass() {
          // Setup
          const { dark, ripple } = this;

          // Init
          let cssClass = [];

          // Config
          if (ripple) {
            if (dark) {
              cssClass.push("ripple-dark");
            } else {
              cssClass.push("ripple");
            }
          }
          return cssClass;
        },
        theStyle() {
          // Setup
          const {
            getColor,
            colorBackground,
            colorText,
            colorBorder,
            borderSize,
            borderStyle,
            textCase,
            cursor,
            layer,
          } = this;

          // Init
          let cssStyle = [];

          // Config
          if (colorBackground && colorBackground !== "transparent") {
            cssStyle.push(`background-color: ${getColor(colorBackground)}`);
          }
          if (colorText && colorText !== "transparent") {
            cssStyle.push(`color: ${getColor(colorText)}`);
          }
          if (colorBorder && colorBorder !== "transparent") {
            cssStyle.push(`border-color: ${getColor(colorBorder)}`);
            cssStyle.push(`border-width: ${borderSize}px`);
            cssStyle.push(`border-style: ${borderStyle}`);
          }
          if (textCase) {
            let activeCase;
            switch (textCase.toLowerCase()) {
              case "title":
                activeCase = "capitalize";
                break;
              case "upper":
                activeCase = "uppercase";
                break;
              case "lower":
                activeCase = "lowercase";
                break;
              default:
                activeCase = null;
            }
            if (activeCase) {
              cssStyle.push(`text-transform: ${activeCase}`);
            }
          }
          if (cursor) {
            cssStyle.push(`cursor: ${cursor}`);
          }
          if (layer > 0) {
            cssStyle.push(`z-index: ${layer}`);
          }
          return cssStyle.join("; ");
        },
      },
      data() {
        return {
          hoverTrack: false,
        };
      },
      render() {
        const elemSetup = {
          class: this.theClass,
          style: this.theStyle,
        };
        if (this.hover) {
          elemSetup.onMouseover = (e) => (this.hoverTrack = !0);
          elemSetup.onMouseleave = (e) => (this.hoverTrack = !1);
        }
        const values = {};
        if (this.hover) {
          values.hover = this.hoverTrack;
        }
        return h(
          this.tag,
          elemSetup,
          this.$slots.default ? this.$slots.default(values) : null
        );
      },
    };

    // (Element) Super Component
    app.component("base-app", AppBase);
    app.component("base-element", superElement);
    app.config.globalProperties.$colors = Object.freeze(Colors);
    app.config.globalProperties.$color = (vname, dark = false) => {
      let colors = null;
      if (dark) {
        // Dark
        colors = options.dark;
      } else {
        // Light
        colors = options.light;
      }
      let name = vname;
      if (vname === "color-1") {
        name = colors[1];
      }
      if (vname === "color-2") {
        name = colors[2];
      }
      if (vname === "color-3") {
        name = colors[3];
      }
      return Colors[name] ? Colors[name] : name;
    };
  },
};
