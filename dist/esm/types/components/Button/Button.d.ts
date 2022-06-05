import React from "react";
import { IconName } from "../Icons/Icon";
export declare type ButtonProps = {
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
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
};
/** A common button */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
