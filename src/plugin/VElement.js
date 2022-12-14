import { h } from "vue";
import cssBuild from "./cssBuild";

export default {
  data() {
    return {
      cssClasses: { base: null, active: null },
    };
  },
  created() {
    if (Object.keys(this.css).length > 0) {
      this.cssClasses = cssBuild(this.css);
    }
    if (this.resize) {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    }
  },
  beforeUnmount() {
    if (this.resize) {
      window.addEventListener("resize", this.onResize);
    }
  },
  props: {
    class: {
      type: [String, Array, Object],
      default: null,
    },
    modelValue: {
      type: null,
      default: false,
    },
    tag: {
      type: String,
      default: "div",
    },
    active: {
      type: Boolean,
      default: false,
    },
    css: {
      type: Object,
      default: () => ({}),
    },
    hover: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClass() {
      const cssOut = [];
      if (this.class) {
        cssOut.push(this.class);
      }
      if (this.cssClasses.base) {
        cssOut.push(this.cssClasses.base);
      }
      if (this.active && this.cssClasses.active) {
        cssOut.push(this.cssClasses.active);
      }
      return cssOut.length > 0 ? cssOut : null;
    },
  },
  methods: {
    onResize(e = null) {
      const { $device } = this;
      // Device Type
      let deviceType = "xs";
      if (window.innerWidth < 600) {
        deviceType = "xs";
      } else if (window.innerWidth > 600 && window.innerWidth <= 960) {
        deviceType = "sm";
      } else if (window.innerWidth > 960 && window.innerWidth <= 1264) {
        deviceType = "md";
      } else if (window.innerWidth > 1264 && window.innerWidth <= 1904) {
        deviceType = "lg";
      } else if (window.innerWidth > 1904) {
        deviceType = "xl";
      }
      // Config
      $device.height = window.innerHeight;
      $device.width = window.innerWidth;
      $device.type = deviceType;
      $device.is = (...args) => args.includes(deviceType);
    },
  },
  render() {
    const { cssClass, hover } = this;
    const elemSetup = {};
    if (cssClass) {
      elemSetup.class = cssClass;
    }
    if (hover) {
      elemSetup.onMouseover = (e) => this.$emit("update:modelValue", true);
      elemSetup.onMouseleave = (e) => this.$emit("update:modelValue", false);
    }
    // Render
    return h(
      this.tag,
      elemSetup,
      this.$slots.default ? this.$slots.default({}) : null
    );
  },
};
