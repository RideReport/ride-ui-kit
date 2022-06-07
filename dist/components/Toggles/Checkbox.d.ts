import React from "react";
declare type CheckboxProps = {
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
export declare function Checkbox({ checked, disabled, onChange, label, ariaLabel, color, }: CheckboxProps): JSX.Element;
export default Checkbox;
