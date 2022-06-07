"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const Toggle_module_scss_1 = __importDefault(require("./Toggle.module.scss"));
const uuid_1 = require("uuid");
const Icon_1 = __importDefault(require("../Icons/Icon"));
/** A common checkbox */
function Checkbox({ checked, disabled, onChange, label, ariaLabel, color, }) {
    // Generate a unique id for matching the input and label
    const id = (0, uuid_1.v4)();
    return (react_1.default.createElement("div", { className: Toggle_module_scss_1.default["checkbox-wrapper"], style: color
            ? {
                "--ride-report-inactive-toggle-color": color,
                "--ride-report-active-toggle-color": color,
                "--ride-report-hover-toggle-color": color,
            } // css variables aren't included in CSSProperties by default
            : undefined },
        react_1.default.createElement("input", { className: Toggle_module_scss_1.default.checkbox, type: "checkbox", id: id, checked: checked, onChange: (e) => onChange(e.target.checked), disabled: disabled }),
        react_1.default.createElement("label", { "aria-label": ariaLabel, htmlFor: id },
            react_1.default.createElement("div", null,
                react_1.default.createElement(Icon_1.default, { icon: "Check" })),
            label)));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map