"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
require("./Button.scss");
const classnames_1 = __importDefault(require("classnames"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
const Loading_1 = __importDefault(require("../Loading"));
/** A common button */
exports.Button = react_1.default.forwardRef(({ children, onClick, color = "blue", className = "ride-ui-kit-button", disabled = false, loading = false, center = false, iconPosition = "left", icon, style, type = "button", }, ref) => {
    return (react_1.default.createElement("button", { type: type, ref: ref, onClick: onClick, disabled: disabled || loading, className: (0, classnames_1.default)(className, color, iconPosition, center), style: style },
        react_1.default.createElement(Loading_1.default, { loading: loading, kind: "blue", size: 2 }),
        icon ? react_1.default.createElement(Icon_1.default, { icon: icon }) : null,
        children ? react_1.default.createElement("span", null, children) : null));
});
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map