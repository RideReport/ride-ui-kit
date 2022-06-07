import React from "react";
import { v4 as uuid4 } from "uuid";
import styles from "./Toggle.module.scss";
import cx from "classnames";

type ToggleProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  /** What color to change the toggle to, away from its default */
  color?: string;
  label?: string;
  // tooltipLabel?: string;
  // tooltipPlacement?: Placement;
};

/**
 * A pretty toggle switch
 */
export function Toggle({
  checked,
  disabled,
  onChange,
  // tooltipLabel,
  // tooltipPlacement = 'right',
  color,
  label = "",
}: ToggleProps) {
  // Generate a unique id for matching the input and label

  // NOTE -> REMOVING USE OF USEMEMO FOR ERRORS
  //   const id = useMemo(uuid4, []);
  const id = uuid4();

  // const [tippy] = useTippy<HTMLDivElement>(tooltipLabel ?? null, {
  //     placement: tooltipPlacement
  // });

  return (
    <div
      //   ref={tippy}
      style={
        {
          "--ride-report-active-toggle-color": color,
          "--ride-report-hover-toggle-color": color,
        } as React.CSSProperties // css variables aren't included in CSSProperties by default
      }
    >
      <input
        className={cx(styles.toggle, label && styles.label)}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Toggle;
