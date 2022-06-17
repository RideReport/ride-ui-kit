import React from "react";
import { Dropdown } from "../Dropdown";
import { IconName } from "../Icons/Icon";
import "./dropdown-select.scss";

type Props = {
    /** The text to shown in the select button */
    value: any;

    /** The icon to render on the left */
    icon: IconName;

    /** What goes inside the dropdown */
    children: React.ReactNode;

    /** Whether the dropdown is currently revealed */
    active: boolean;

    /** A state setter for the active state */
    setActive: React.Dispatch<React.SetStateAction<boolean>>;

    disabled?: boolean;

    position?: "bottom-left" | "bottom-right";
};

/**
 * A fake "select" field which creates a dropdown container on click, for when
 * we want more complicated dropdowns, such as date pickers.
 */
export function DropdownSelect({
    value,
    icon,
    children,
    active,
    setActive,
    disabled,
    position,
}: Props) {
    return (
        <Dropdown
            disabled={disabled}
            active={active}
            setActive={setActive}
            buttonProps={{
                className: "ride-ui-kit-dropdown-select-input",
                icon,
                children: value,
            }}
            position={position}
        >
            {children}
        </Dropdown>
    );
}
