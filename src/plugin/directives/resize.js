export default {
  created(el, binding) {
    el.OnResizeEvent = binding.value;
    window.addEventListener("resize", el.OnResizeEvent);
  },
  destroyed(el) {
    window.removeEventListener("resize", el.OnResizeEvent);
  },
};
