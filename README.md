# **Vuezik** - Real **(SFC) Single-File Components** for Vue3

`Vuezik` is pronounced like **music** but with `"Vue-"` instead of `"Mu-"`

## Information

```sh
dist/bundle.js | 39.75 KiB / gzip: 12.70 KiB
```

## Install

```sh
npm install vuezik
```

## Uses

- [@emotion/css](https://emotion.sh/docs/@emotion/css)
- [xtyle](https://github.com/hlop3z/xtyle)

## **`$style`** (Global-Variable) | @Emotion-CSS

| Key             | Value        |
| --------------- | ------------ |
| **`css`**       | css          |
| **`inject`**    | injectGlobal |
| **`keyframes`** | keyframes    |
| **`app`**       | **xtyle**    |

---

## **`$device`** (Global-Variable)

| Key          | Value                                                                 |
| ------------ | --------------------------------------------------------------------- |
| **`width`**  | Device's width                                                        |
| **`height`** | Device's height                                                       |
| **`type`**   | Device's size abbreviation **(`xs, sm, md, lg, xl`)** (default: `xs`) |
| **`is`**     | Device's size function to be used with `v-if` example below           |

---

## **Directives**

| Name                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| **`v-ripple`**        | Ripple effect from **Material Design** Styling |
| **`v-resize`**        | Detects resize changes of the browser's window |
| **`v-click-outside`** | Detects click outside element                  |
| **`v-swipe`**         | Detects swipe **(`left, right, up, down`)**    |
| **`v-wheel`**         | Detects swipe **(`up, down`)**                 |

---

```html
<template>
  <div
    v-ripple
    v-wheel="log"
    v-swipe="log"
    v-resize="log"
    v-click-outside="log"
  >
    {{ $device }}
  </div>
  <button v-ripple="{ color: red, center: true, class: 'some-class' }">
    Click Me
  </button>
</template>
<script>
  export default {
    methods: {
      log(data) {
        console.log(data);
      },
    },
  };
</script>
```

---

## **Component**

| Name            | Description                   |
| --------------- | ----------------------------- |
| **`x-element`** | Customizable `<html-element>` |

```html
<x-element resize class="only-once-per-project-use-resize">
  My App Container
  <br />
  {{ $device }}
  <br />
  <div v-if='$device.is("xs", "sm")'>Show Content Only On Devices(XS, SM)</div>
</x-element>
```

### **Props**

| Name          | Description                                        | Default | Type    |
| ------------- | -------------------------------------------------- | ------- | ------- |
| **`css`**     | **`@emotion/css`** **Object-Style** Based          | `{}`    | Object  |
| **`tag`**     | `<html>` **element** type for example `button`     | `div`   | String  |
| **`v-model`** | Requires `hover`                                   | `false` | Boolean |
| **`hover`**   | Track mouse **`hover`**                            | `false` | Boolean |
| **`resize`**  | Update `$device` variables. Use once's per project | `false` | Boolean |
| **`active`**  | **Element** is **`active`** ?                      | `false` | Boolean |

---

### **CSS** (Prop)

| Name                | Default | Type    | Emotion                                   |
| ------------------- | ------- | ------- | ----------------------------------------- |
| **`base`**          | `{}`    | Object  | Main CSS-Class (**Object-Style**)         |
| **`hoverAndFocus`** | false   | Boolean | turn `hover` into **Hover-and-Focus**     |
| **`hover`**         | `{}`    | Object  | `&:hover` or `&:hover,&:focus`            |
| **`focus`**         | `{}`    | Object  | `&:focus`                                 |
| **`active`**        | `{}`    | Object  | Active CSS-Class (**Object-Style**)       |
| **`children`**      | `{}`    | Object  | Children CSS-Class(es) (**Object-Style**) |

---

### **CSS** (Only) Main

- **`active`**

**`active`** only works on the **Main (Object-Style)**

### **CSS** Active & Children

- **`base`**
- **`hover`**
- **`focus`**

**`active & children`** only have **3 props**

---

### **Demo**

```html
<script>
  export default {
    computed: {
      css() {
        return {
          base: {},
          hover: {},
          hoverAndFocus: true,
          active: {
            base: {},
            hover: {},
            focus: {},
          },
          children: {
            "children-class": {
              base: {},
              hover: {},
              focus: {},
            },
          },
        };
      },
    },
  };
</script>
```

---

## Example

---

### **Template**

```html
<template>
  <x-element
    tag="div"
    @click="active = active"
    :active="active"
    hover
    v-model="hover"
    :css="css"
  >
    <div>
      Hello World <br />
      {{ active }} | {{ hover }}
      <div class="children-class">Hola Mundo</div>
    </div>
  </x-element>
</template>
```

---

### **Script**

```html
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
          // Merge with Hover-And-Focus
          hoverAndFocus: true,
          // Base (Object)
          base: {
            // Base (Object-Style)
            color: "black",
            backgroundColor: "red",
            fontSize: "60px",
            textAlign: "center",
          },
          // Hover-And-Focus (Object-Style)
          hover: {
            color: "red",
            backgroundColor: "black",
          },
          // Active (Object)
          active: {
            // Active (Object-Style)
            base: {
              color: "blue",
              backgroundColor: "orange",
              fontSize: "20px",
            },
            // Active-Hover (Object-Style)
            hover: {
              color: "white",
              backgroundColor: "purple",
            },
          },
          // Children (Objects)
          children: {
            "children-class": {
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
```

---

## Vue-**Sync** (Prop)

Use `kebab-case` for the `sync` declaration and as the attribute `<div v-model:kebab-case="value" />`

Then, use `camelCase` for the actual `value` **inside the component**.

---

## Component

> Create A **Component**

### **Script** Code

```js
export default {
  sync: ["count", "camel-case"],
};
```

### **Template** Code

```html
<div>{{ count }} | {{ camelCase }}</div>
```

---

## Usage

> Example **Usage** of The Component with `v-model`

### **Script** Code

```js
export default {
  data() {
    return {
      count: 1,
      camelCase: "kebab-case",
    };
  },
};
```

### **Template** Code

```html
<my-component v-model:count="count" v-model:camel-case="camelCase" />
```
