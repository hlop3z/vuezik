# Vuezik

Tool for **Vue 3** | Easy **`v-model`** and **`<custom-components>`**.

`Vuezik` is pronounced like **music** but with `"Vue-"` instead of `"Mu-"`

## Information

```sh
dist/bundle.js   14.34 KiB / gzip: 3.98 KiB
```

## Install

```sh
npm install vuezik
```

## Components

| Name               | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| **`base-app`**     | `virtual` element that ensures that `$device` is always updated in case of a change to size of the screen. |
| **`base-element`** | Customizable `<html-element>`.                                                                             |

---

## Directives

| Name                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| **`v-swipe`**         | Detects swipe **(`left, right, up, down`)**    |
| **`v-click-outside`** | Detects click outside element                  |
| **`v-resize`**        | Detects resize changes of the browser's window |

---

## **`$config`** (Global-Variable)

| Key         | Value                         |
| ----------- | ----------------------------- |
| **`title`** | Project's Name                |
| **`debug`** | Debug Mode (default: `false`) |
| **`dark`**  | Dark Mode (default: `false`)  |

---

## **`$device`** (Global-Variable)

| Key          | Value                                                                 |
| ------------ | --------------------------------------------------------------------- |
| **`width`**  | Device's width                                                        |
| **`height`** | Device's height                                                       |
| **`type`**   | Device's size abbreviation **(`xs, sm, md, lg, xl`)** (default: `xs`) |
| **`is`**     | Device's size function to be used with `v-if` example below           |

### Example

```html
<div v-if='$device.is("xs", "sm")'>Show Content</div>
```

### Device Type `Code`

```js
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
```

---

## Base **Element**

---

### Example (**Simple**)

```html
<base-element tag="span"> Hello World </base-element>
```

### Example (**Complex**)

```html
<base-element
  tag="button"
  text-case="upper"
  color-text="green"
  color-border="green"
  color-background="white"
  cursor="pointer"
  border-style="dotted"
  :border-size="1"
  :layer="0"
  dark
  ripple
  hover
>
  <template v-slot="{ hover }">Button | {{ hover }}</template>
</base-element>
```

### Props

| Name                   | Description                                | Default       | Type    |
| ---------------------- | ------------------------------------------ | ------------- | ------- |
| **`tag`**              | `<html>` element type for example `button` | `div`         | String  |
| **`text-case`**        | Options (**`title, upper, lower`**)        | none          | String  |
| **`color-text`**       | Text Color (`css` or **palette**)          | `black`       | String  |
| **`color-border`**     | Border color                               | `transparent` | String  |
| **`color-background`** | Background color                           | `transparent` | String  |
| **`cursor`**           | Cursor style                               | none          | String  |
| **`border-style`**     | Border style (`css` or **palette**)        | `solid`       | String  |
| **`border-size`**      | Border size in pixels                      | `1`           | Integer |
| **`layer`**            | `z-index`                                  | `0`           | Integer |
| **`dark`**             | Dark Mode                                  | `false`       | Boolean |
| **`ripple`**           | Ripple effect                              | `false`       | Boolean |
| **`hover`**            | Track `hover` over element                 | `false`       | Boolean |

---

## Vue-**Sync**

Use `kebab-case` for the `sync` declaration.
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
