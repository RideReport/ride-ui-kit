import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import Icon, { IconName } from "../Icons/Icon";

export type ButtonProps = {
  /** What text to render inside the button */
  children?: React.ReactNode;

  /** The appearance of the button */
  color?: "red" | "blue" | "gray" | "outline-red";

  /** The icon to show to the left of the text, if any. */
  icon?: IconName;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  center?: boolean;
  /** changes the position of the icon to the right, on left by default*/
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLButtonElement>
  ) => void;
  style?: React.CSSProperties;
};

/** A common button */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      color = "blue",
      className,
      disabled = false,
      loading = false,
      center = false,
      iconPosition = "left",
      icon,
      style,
      type = "button",
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        className={cx(
          className,
          styles.button,
          styles[color],
          iconPosition && styles[iconPosition],
          center && styles.center
        )}
        style={style}
      >
        {/* <Loading loading={loading} kind="blue" size={2} /> */}
        {icon ? <Icon icon={icon} /> : null}
        {children ? <span>{children}</span> : null}
      </button>
    );
  }
);

export default Button;
