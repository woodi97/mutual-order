import {
  ComplexStyleRule,
  createVar,
  keyframes,
  style,
} from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { CommonSize } from "../constants";

export const spinnerSize = createVar();
export const animationDuration = createVar();

const spinAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const popverAnimation = keyframes({
  "0%": {
    scale: 0,
  },
  "100%": {
    scale: 1,
  },
});

type SpinnerSize = CommonSize | number;

export const spinner = recipe<{
  size: Record<SpinnerSize, ComplexStyleRule>;
}>({
  base: {
    width: spinnerSize,
    height: spinnerSize,
    position: "relative",
    display: "inline-flex",
    boxSizing: "border-box",
    borderRadius: "50%",
    border: "2px solid currentColor",
  },
  variants: {
    size: {
      xs: {
        width: "8px",
        height: "8px",
      },
      sm: {
        width: "16px",
        height: "16px",
      },
      md: {
        width: "24px",
        height: "24px",
      },
      lg: {
        width: "32px",
        height: "32px",
      },
      xl: {
        width: "40px",
        height: "40px",
      },
    },
  },
});

export type SpinnerVariants = RecipeVariants<typeof spinner>;

export const spin = style({
  borderLeftColor: "transparent",
  animation: `${spinAnimation} ${animationDuration} linear infinite`,
});

export const popver = style({
  animation: `${popverAnimation} ${animationDuration} linear infinite`,
});

export const spinnerAnimation = {
  spin,
  popver,
};
export type SpinnerAnimation = keyof typeof spinnerAnimation;
