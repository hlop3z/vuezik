<template>
  <div>
    <base-app>
      <header>
        <div>Header</div>
      </header>

      <main>
        <div>Main</div>
      </main>

      <footer>
        <div>Footer</div>
      </footer>

      <aside>
        <div>Left</div>
      </aside>

      <aside>
        <div>Right</div>
      </aside>
    </base-app>

    <div v-click-outside="onClickOutside" style="border: solid black 2px">
      Click Outside Me
    </div>

    <br /><br />

    <!-- Swipe -->
    <div
      v-swipe="onSwipe"
      style="
        border: solid black 2px;
        height: 50px;
        text-align: center;
        padding-top: 25px;
      "
    >
      Swiped {{ swipeSide }}
    </div>

    <br /><br />

    <!-- Hover -->
    <base-element
      v-resize="onResize"
      tag="div"
      text-case="upper"
      color-text="black"
      color-border="black"
      color-background="white"
      cursor="pointer"
      :border-size="1"
      :dark="false"
      :ripple="true"
      :hover="true"
      style="height: 60px; text-align: center; padding-top: 30px"
    >
      <template v-slot="{ hover }">{{ hover }}</template>
    </base-element>

    <br /><br />

    <!-- Custom-Element -->
    <base-element
      v-resize="onResize"
      tag="button"
      text-case="upper"
      color-text="green"
      color-border="green"
      color-background="white"
      cursor="pointer"
      border-style="dotted"
      :layer="1"
      :border-size="1"
      :dark="false"
      :ripple="true"
      :hover="true"
    >
      <template v-slot="{ hover }">Button | {{ hover }}</template>
    </base-element>

    <br />
    {{ camelCase }}
    <br />
    <base-element tag="span"> {{ $config }} </base-element>

    <base-element tag="div"> {{ $device }} </base-element>

    <!-- Custom-Element -->
    <base-element
      :value="'Text Input'"
      tag="input"
      color-text="color-2"
      color-background="white"
      :border-size="1"
      :dark="false"
      :ripple="true"
      :hover="false"
      style="height: 24px"
    />
  </div>
</template>

<script>
export default {
  sync: ["count", "camel-case"],
  data() {
    return {
      swipeSide: null,
      hover: null,
    };
  },
  methods: {
    onResize(e) {
      console.log("resize");
    },
    onClickOutside() {
      console.log("clicked outside");
    },
    onSwipe(side) {
      this.swipeSide = side;
    },
  },
};
</script>

<style scoped></style>
