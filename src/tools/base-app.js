export default {
  methods: {
    onResize(e = null) {
      const { $device } = this;
      // Device Type
      let deviceType = "xs";
      if (window.innerWidth < 600) {
        deviceType = "xs";
      } else if (window.innerWidth > 600 && window.innerWidth < 960) {
        deviceType = "sm";
      } else if (window.innerWidth > 960 && window.innerWidth < 1264) {
        deviceType = "md";
      } else if (window.innerWidth > 1264 && window.innerWidth < 1904) {
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
    return this.$slots.default();
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.addEventListener("resize", this.onResize);
  },
};
