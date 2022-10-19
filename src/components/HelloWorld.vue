<template>
  <x-element
    @click="active = active"
    :active="active"
    hover
    v-model="hover"
    resize
    :css="css"
  >
    <div>
      Hello World <br />
      {{ active }} | {{ hover }}
      <div class="my-class">Hola Mundo</div>
    </div>
    <div
      v-ripple
      v-wheel="log"
      v-swipe="log"
      v-resize="log"
      v-click-outside="log"
    >
      {{ $device }}
    </div>
    <button v-ripple="{ color: 'red', center: true, class: 'some-class' }">
      Click Me
    </button>
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
    log(data) {
      console.log(data);
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
