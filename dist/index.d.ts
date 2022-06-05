/// <reference types="react" />
import React from 'react';

/** A string enum of all the icons that exist. */
declare type IconName = "Right" | "Left" | "Up" | "Down" | "Back" | "Forward" | "Fast-Forward" | "Outbound" | "Inbound" | "Double-Right" | "Double-Left" | "Close" | "Check" | "Refresh" | "Rewind" | "Expand" | "Collapse" | "Orientation" | "Plus" | "Minus" | "Higher" | "Lower" | "More" | "Hamburger" | "Report" | "Fees" | "Map" | "MunBoundary" | "Area" | "Audit" | "No-Car" | "Beta" | "Navigation-Chart" | "Policy" | "Street" | "Points" | "Line" | "Heatmap" | "Satellite" | "Trip-End" | "Trip-Start" | "Search" | "Expand" | "Camera" | "Collapse" | "Image" | "Visibility-On" | "Visibility-Off" | "Delete" | "Download" | "Upload" | "Print" | "Email" | "Copy-Paste" | "Drawing" | "Layer" | "Pointer" | "Plus" | "Calendar" | "Day" | "Week" | "Month" | "Facebook" | "Twitter" | "LinkedIn" | "Car" | "Bike" | "Scooter" | "eBike" | "Moped" | "Alert" | "Information" | "Time" | "Circle" | "Triangle" | "Stopwatch" | "Response" | "Compliant" | "Non-Compliant" | "Code" | "Geography" | "General" | "Status" | "Comment" | "Missing-File" | "List-File" | "Document-Agreement" | "Document-Privacy" | "User-Remove" | "Spreadsheet" | "Archive" | "Marker" | "Sunny" | "Cloudy" | "Rainy" | "Stormy" | "Battery-66-100" | "Battery-33-66" | "Battery-0-33" | "Battery-Disabled" | "Fuel-Status-66-100" | "Fuel-Status-33-66" | "Fuel-Status-0-33" | "Fuel-Status-Disabled" | "United-States" | "European-Union" | "United-Kingdom" | "Germany" | "France" | "Spain" | "Australia" | "New-Zealand";
declare type Props = {
    className?: string;
    icon: IconName;
    style?: React.CSSProperties;
};
/**
 * An Icon component that renders an svg of the chosen icon. Its size is
 * determined by the parent's font size, and the color by the font color.
 */
declare function Icon({ icon, style, className }: Props): JSX.Element;

declare type ButtonProps = {
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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

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
declare function Toggle({ checked, disabled, onChange, color, label, }: ToggleProps): JSX.Element;

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
declare function Checkbox({ checked, disabled, onChange, label, ariaLabel, color, }: CheckboxProps): JSX.Element;

export { Button, Checkbox, Icon, Toggle };
