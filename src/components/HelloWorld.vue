<template>
  <x-element
    @click="active = !active"
    :active="active"
    v-model="hover"
    x-hover
    @xwheel="log"
    x-wheel="horizontal"
    x-resize
    :css="css"
  >
    <div>
      Hello World <br />
      {{ active }} | {{ hover }}
      <div class="my-class">Hola Mundo</div>
    </div>
  </x-element>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      hover: false,
    };
  },
  methods: {
    log(text) {
      console.log(text);
    },
  },
  computed: {
    css() {
      return {
        hoverAndFocus: true,
        base: {
          color: "black",
          backgroundColor: "red",
          fontSize: "60px",
          textAlign: "center",
        },
        hover: {
          color: "red",
          backgroundColor: "black",
        },
        active: {
          base: {
            color: "blue",
            backgroundColor: "orange",
            fontSize: "20px",
          },
          hover: {
            color: "white",
            backgroundColor: "purple",
          },
        },
        children: {
          "my-class": {
            base: {
              color: "orange",
              backgroundColor: "darkorchid",
            },
            hover: {
              color: "red",
              backgroundColor: "darkorchid",
            },
            focus: {
              color: "white",
              backgroundColor: "darkorchid",
            },
          },
        },
      };
    },
  },
};
</script>
