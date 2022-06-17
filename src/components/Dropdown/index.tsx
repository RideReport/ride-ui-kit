import React, { useEffect, useState } from "react";
import cx from "classnames";

import { CSSTransition } from "react-transition-group";
import Button, { ButtonProps } from "../Button";
import "./dropdown.scss";

type Props = {
    /** Props for the button that opens the dropdown */
    buttonProps: Omit<ButtonProps, "onClick">;

    dropdownClassName?: string;

    /** What goes inside the dropdown */
    children: React.ReactNode;

    disabled?: boolean;

    position?: "bottom-left" | "bottom-right";
} & (
    | {
          active: boolean;
          setActive: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | { active?: undefined; setActive?: undefined }
);

/**
 * Generic component for creating a dropdown. Override the styles to reposition
 * or reanimate it.
 */
export function Dropdown({
    children,
    buttonProps,
    dropdownClassName,
    active: propsActive,
    setActive: setPropsActive,
    disabled,
    position = "bottom-left",
}: Props) {
    const [hovering, setHovering] = useState(false);
    const [innerActive, setInnerActive] = useState(false);
    const active = propsActive ?? innerActive;
    const setActive = setPropsActive ?? setInnerActive;
    useEffect(() => {
        if (!hovering && active) {
            const onClickOutside = () => {
                setActive(false);
            };
            document.addEventListener("click", onClickOutside);
            return () => document.removeEventListener("click", onClickOutside);
        }
    }, [active, hovering, setActive]);

    return (
        <div
            className="ride-ui-kit-dropdown-wrapper"
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Button
                disabled={disabled}
                onClick={() => setActive((value) => !value)}
                {...buttonProps}
            />
            <CSSTransition
                in={active}
                timeout={{ enter: 100, exit: 200 }}
                mountOnEnter
                unmountOnExit
            >
                <div
                    className={
                        dropdownClassName ||
                        cx("ride-ui-kit-dropdown", position)
                    }
                >
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
}
