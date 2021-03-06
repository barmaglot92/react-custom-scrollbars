import css from "dom-css";
let scrollbarWidth = false;

export default function getScrollbarWidth(defaultWidth = 0) {
  if (scrollbarWidth !== false) return scrollbarWidth;
  /* istanbul ignore else */
  if (typeof document !== "undefined") {
    const div = document.createElement("div");
    css(div, {
      width: 100,
      height: 100,
      position: "absolute",
      top: -9999,
      overflow: "scroll",
      MsOverflowStyle: "scrollbar"
    });
    document.body.appendChild(div);
    scrollbarWidth = (div.offsetWidth - div.clientWidth) || defaultWidth;
    document.body.removeChild(div);
  } else {
      scrollbarWidth = defaultWidth
  }
  return scrollbarWidth;
}
