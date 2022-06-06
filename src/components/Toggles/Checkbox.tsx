import React from "react";
import styles from "./Toggle.module.scss";
import { v4 as uuid4 } from "uuid";
import Icon from "../Icons/Icon";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label?: React.ReactNode;
  ariaLabel?: string;
  color?: string;
};

/**
 * A pretty checkbox
 */
export function Checkbox({
  checked,
  disabled,
  onChange,
  label,
  ariaLabel,
  color,
}: CheckboxProps) {
  // Generate a unique id for matching the input and label
  const id = uuid4();
  return (
    <div
      className={styles["checkbox-wrapper"]}
      style={
        color
          ? ({
              "--ride-report-inactive-toggle-color": color,
              "--ride-report-active-toggle-color": color,
              "--ride-report-hover-toggle-color": color,
            } as React.CSSProperties) // css variables aren't included in CSSProperties by default
          : undefined
      }
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label aria-label={ariaLabel} htmlFor={id}>
        <div>
          <Icon icon="Check" />
        </div>
        {label}
      </label>
    </div>
  );
}
export default Checkbox;
