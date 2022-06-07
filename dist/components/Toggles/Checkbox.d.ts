import React from "react";
declare type CheckboxProps = {
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
export declare function Checkbox({ checked, disabled, onChange, label, ariaLabel, color, }: CheckboxProps): JSX.Element;
export default Checkbox;
