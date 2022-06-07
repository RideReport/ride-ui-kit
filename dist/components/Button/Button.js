"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
/** A common button */
exports.Button = react_1.default.forwardRef(({ children, onClick, color = "blue", 
// className,
disabled = false, loading = false, center = false, iconPosition = "left", icon, style, type = "button", }, ref) => {
    return (react_1.default.createElement("button", { type: type, ref: ref, onClick: onClick, disabled: disabled || loading, className: (0, classnames_1.default)(Button_module_scss_1.default.button, Button_module_scss_1.default[color], iconPosition && Button_module_scss_1.default[iconPosition], center && Button_module_scss_1.default.center), style: style },
        icon ? react_1.default.createElement(Icon_1.default, { icon: icon }) : null,
        children ? react_1.default.createElement("span", null, children) : null));
});
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map