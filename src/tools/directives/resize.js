export default {
  created(el, binding) {
    window.addEventListener("resize", binding.value);
  },
  destroyed(el, binding) {
    window.removeEventListener("resize", binding.value);
  },
};
