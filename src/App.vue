<template>
  <Demo v-model:count="count" v-model:camel-case="camelCase"></Demo>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
  components: { Demo },
  data() {
    return {
      count: 1,
      camelCase: "kebab-case",
    };
  },
};
</script>

<style scoped></style>
