import { css } from "@emotion/css";

function builder(cssParts, cssObjectInput) {
  let cssOutput = {};
  if (cssParts.includes("base")) {
    cssOutput = cssObjectInput.base;
  }
  if (!cssObjectInput.hoverAndFocus) {
    if (cssParts.includes("hover")) {
      cssOutput["&:hover"] = cssObjectInput.hover;
    }
    if (cssParts.includes("focus")) {
      cssOutput["&:focus"] = cssObjectInput.focus;
    }
  } else {
    if (cssParts.includes("hover")) {
      cssOutput["&:hover,&:focus"] = cssObjectInput.hover;
    }
  }
  return cssOutput;
}

function cssBuilder(cssObjectInput) {
  const cssParts = Object.keys(cssObjectInput);
  const base = builder(cssParts, cssObjectInput);
  const style = {
    base: null,
    active: null,
  };
  if (cssParts.includes("children")) {
    const cssChildren = {};
    const children = cssObjectInput.children;
    Object.keys(children).forEach((key) => {
      base[`& .${key}`] = builder(Object.keys(children[key]), children[key]);
    });
  }

  // Base
  style.base = css(base);

  // Active
  if (cssParts.includes("active")) {
    style.active = css(
      builder(Object.keys(cssObjectInput.active), cssObjectInput.active)
    );
  }

  // Style
  return style;
}

export default cssBuilder;
