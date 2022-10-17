var xDown = null;
var yDown = null;

function getTouches(e) {
  return e.touches;
}

function handleTouchStart(e) {
  const firstTouch = getTouches(e)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(e, method = null) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      method("left");
    } else {
      /* right swipe */
      method("right");
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      method("up");
    } else {
      /* down swipe */
      method("down");
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

export default {
  beforeMount: (el, binding) => {
    el.handleTouchStartEvent = handleTouchStart;
    el.handleTouchMoveEvent = (event) => handleTouchMove(event, binding.value);
    el.addEventListener("touchstart", el.handleTouchStartEvent, {
      passive: true,
    });
    el.addEventListener("touchmove", el.handleTouchMoveEvent, {
      passive: true,
    });
  },
  unmounted: (el) => {
    el.removeEventListener("touchstart", el.handleTouchStartEvent);
    el.removeEventListener("touchmove", el.handleTouchMoveEvent);
  },
};
