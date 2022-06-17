"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownSelect = void 0;
const react_1 = __importDefault(require("react"));
const Dropdown_1 = require("../Dropdown");
require("./dropdown-select.scss");
/**
 * A fake "select" field which creates a dropdown container on click, for when
 * we want more complicated dropdowns, such as date pickers.
 */
function DropdownSelect({ value, icon, children, active, setActive, disabled, position, }) {
    return (react_1.default.createElement(Dropdown_1.Dropdown, { disabled: disabled, active: active, setActive: setActive, buttonProps: {
            className: "ride-ui-kit-dropdown-select-input",
            icon,
            children: value,
        }, position: position }, children));
}
exports.DropdownSelect = DropdownSelect;
//# sourceMappingURL=index.js.map