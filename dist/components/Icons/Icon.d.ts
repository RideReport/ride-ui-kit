import React from "react";
import "./icon.scss";
/** A string enum of all the icons that exist. */
export declare type IconName = "Right" | "Left" | "Up" | "Down" | "Back" | "Forward" | "Fast-Forward" | "Outbound" | "Inbound" | "Double-Right" | "Double-Left" | "Close" | "Check" | "Refresh" | "Rewind" | "Expand" | "Collapse" | "Orientation" | "Plus" | "Minus" | "Higher" | "Lower" | "More" | "Hamburger" | "Report" | "Fees" | "Map" | "MunBoundary" | "Area" | "Audit" | "No-Car" | "Beta" | "Navigation-Chart" | "Policy" | "Street" | "Points" | "Line" | "Heatmap" | "Satellite" | "Trip-End" | "Trip-Start" | "Search" | "Expand" | "Camera" | "Collapse" | "Image" | "Visibility-On" | "Visibility-Off" | "Delete" | "Download" | "Upload" | "Print" | "Email" | "Copy-Paste" | "Drawing" | "Layer" | "Pointer" | "Plus" | "Calendar" | "Day" | "Week" | "Month" | "Facebook" | "Twitter" | "LinkedIn" | "Car" | "Bike" | "Scooter" | "eBike" | "Moped" | "Alert" | "Information" | "Time" | "Circle" | "Triangle" | "Stopwatch" | "Response" | "Compliant" | "Non-Compliant" | "Code" | "Geography" | "General" | "Status" | "Comment" | "Missing-File" | "List-File" | "Document-Agreement" | "Document-Privacy" | "User-Remove" | "Spreadsheet" | "Archive" | "Marker" | "Sunny" | "Cloudy" | "Rainy" | "Stormy" | "Battery-66-100" | "Battery-33-66" | "Battery-0-33" | "Battery-Disabled" | "Fuel-Status-66-100" | "Fuel-Status-33-66" | "Fuel-Status-0-33" | "Fuel-Status-Disabled" | "United-States" | "European-Union" | "United-Kingdom" | "Germany" | "France" | "Spain" | "Australia" | "New-Zealand";
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
export default Icon;
