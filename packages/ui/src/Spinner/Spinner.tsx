import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import cx from "classnames";

import * as styles from "./Spinner.css";

export type SpinnerProps = {
  animation?: styles.SpinnerAnimation;
  animationSpeed?: string;
} & Omit<React.ComponentProps<"span">, "children"> &
  styles.SpinnerVariants;

export const Spinner: ForwardRefExoticComponent<
  SpinnerProps & RefAttributes<HTMLSpanElement>
> = forwardRef((props, ref) => {
  const {
    size = "md",
    animation = "spin",
    animationSpeed = "1s",
    className,
    ...restProps
  } = props;

  return (
    <span
      className={cx(
        styles.spinner({
          size,
        }),
        styles.spinnerAnimation[animation],
        className
      )}
      ref={ref}
      style={assignInlineVars({
        [styles.spinnerSize]: typeof size === "number" ? `${size}px` : "0px",
        [styles.animationDuration]: animationSpeed,
      })}
      {...restProps}
    />
  );
});

Spinner.displayName = "Spinner";
