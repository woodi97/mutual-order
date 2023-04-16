import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import cx from "classnames";
import * as styles from "./ButtonStyles.css";

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
interface Props extends Omit<DefaultButtonProps, "type"> {
  type?: DefaultButtonProps["type"];
  fullWidth?: boolean;
}

export type ButtonProps = ForwardRefRenderFunction<HTMLButtonElement, Props>;

const Button: ButtonProps = (
  { type = "button", fullWidth, className, disabled, ...props },
  ref
) => {
  return (
    <button
      className={cx(styles.buttonStyle, className)}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      Button
    </button>
  );
};

export default forwardRef(Button);
