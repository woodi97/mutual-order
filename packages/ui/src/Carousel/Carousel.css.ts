import { style } from "@vanilla-extract/css";

export const carouselRoot = style({
  boxSizing: "border-box",
  overflow: "hidden",
});

export const carouselContent = style({
  display: "flex",
  cursor: "grab",
  userSelect: "none",
  height: "100%",
  width: "100%",
  // scale: 0.8,
  // overflow: "visible",
  overflow: "hidden",
});

export const carouselDrag = style({
  display: "flex",
  width: "100%",
  height: "100%",
});

export const carouselItem = style({
  position: "relative",
  height: "100%",
  minWidth: "100%",
});

export const indicatorRoot = style({
  display: "flex",
  gap: "8px",
});

export const indicatorStyle = style({
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  backgroundColor: "black",
});
