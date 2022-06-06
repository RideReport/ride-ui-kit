import React from "react";
import styles from "./Select.module.scss";
import cx from "classnames";
// import Icon, { IconName } from "../Icons/Icon";
import ReactSelect, { GroupBase, Props, Theme } from "react-select";

/** Overrides the default theme to use RR colors
 *  see: https://react-select.com/styles#overriding-the-theme
 */
function themeOverride(theme: Theme): Theme {
  return {
    ...theme,
    borderRadius: 6,
    colors: {
      ...theme.colors,
      primary: "#222a35", // gray-90
      primary75: "#667380", // gray-70
      primary50: "#c5cdd4", // gray-50
      primary25: "#f0f0f2", // gray-10
      danger: "#b22423", // red-70
      dangerLight: "#ffaead", // red-10
    },
    spacing: {
      ...theme.spacing,
      controlHeight: 32,
    },
  };
}

/** A version of react-select with our custom styling applied. See the docs
 * for more info on using this select https://react-select.com/
 */
function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  // styles must be applied in a particular order to ensure we can use defaults
  // while still enabling custom versions of this select to override them. (see below)
  const { styles: customStyles, ...restOfProps } = props;
  return (
    <ReactSelect
      styles={{
        // If there are custom styles, they are applied and nothing else is!
        // Otherwise, we apply the defaults from react-select, then
        // override specific properties with our custom styles
        ...customStyles,
        control: customStyles?.control
          ? customStyles.control
          : (defaultStyles, { isDisabled }) => ({
              ...defaultStyles,
              cursor: isDisabled ? "default" : "pointer",
            }),
        dropdownIndicator: customStyles?.dropdownIndicator
          ? customStyles.dropdownIndicator
          : (defaultStyles) => ({
              ...defaultStyles,
              padding: 7,
            }),
        menu: customStyles?.menu
          ? customStyles.menu
          : (defaultStyles) => ({
              ...defaultStyles,
              zIndex: 3,
            }),
        option: customStyles?.option
          ? customStyles.option
          : (defaultStyles, { isDisabled }) => ({
              ...defaultStyles,
              cursor: isDisabled ? "default" : "pointer",
              ...customStyles?.option,
            }),
      }}
      theme={themeOverride}
      className={cx(styles.select, props.className)}
      hideSelectedOptions
      menuShouldScrollIntoView
      menuPlacement="auto"
      {...restOfProps}
    />
  );
}

export default Select;

/** A multi-select version of react-select with our custom styling applied. See the docs
 * for more info on using this select https://react-select.com/
 */
export function MultiSelect<
  Option,
  IsMulti extends true,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return <Select isMulti={true} {...props} />;
}
