import React from "react";
import "./Toggle.scss";
import { v4 as uuid4 } from "uuid";
import Icon from "../Icons/Icon";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label?: React.ReactNode;
  /** provide an accessible name for an element. */
  ariaLabel?: string;
  /** change the color eg: #f2f2f2 */
  color?: string;
};

/** A common checkbox */
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
      className={"ride-ui-kit-toggle-checkbox-wrapper"}
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
        className={"ride-ui-kit-toggle-checkbox"}
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
