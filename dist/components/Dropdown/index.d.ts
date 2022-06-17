import React from "react";
import { ButtonProps } from "../Button";
import "./dropdown.scss";
declare type Props = {
    /** Props for the button that opens the dropdown */
    buttonProps: Omit<ButtonProps, "onClick">;
    dropdownClassName?: string;
    /** What goes inside the dropdown */
    children: React.ReactNode;
    disabled?: boolean;
    position?: "bottom-left" | "bottom-right";
} & ({
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
} | {
    active?: undefined;
    setActive?: undefined;
});
/**
 * Generic component for creating a dropdown. Override the styles to reposition
 * or reanimate it.
 */
export declare function Dropdown({ children, buttonProps, dropdownClassName, active: propsActive, setActive: setPropsActive, disabled, position, }: Props): JSX.Element;
export {};
