/// <reference types="react" />
import "./Toggle.scss";
declare type ToggleProps = {
    checked: boolean;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    /** What color to change the toggle to, away from its default */
    color?: string;
    label?: string;
};
/**
 * A pretty toggle switch
 */
export declare function Toggle({ checked, disabled, onChange, color, label, }: ToggleProps): JSX.Element;
export default Toggle;
