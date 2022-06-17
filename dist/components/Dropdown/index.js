"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_transition_group_1 = require("react-transition-group");
const Button_1 = __importDefault(require("../Button"));
require("./dropdown.scss");
/**
 * Generic component for creating a dropdown. Override the styles to reposition
 * or reanimate it.
 */
function Dropdown({ children, buttonProps, dropdownClassName, active: propsActive, setActive: setPropsActive, disabled, position = "bottom-left", }) {
    const [hovering, setHovering] = (0, react_1.useState)(false);
    const [innerActive, setInnerActive] = (0, react_1.useState)(false);
    const active = propsActive !== null && propsActive !== void 0 ? propsActive : innerActive;
    const setActive = setPropsActive !== null && setPropsActive !== void 0 ? setPropsActive : setInnerActive;
    (0, react_1.useEffect)(() => {
        if (!hovering && active) {
            const onClickOutside = () => {
                setActive(false);
            };
            document.addEventListener("click", onClickOutside);
            return () => document.removeEventListener("click", onClickOutside);
        }
    }, [active, hovering, setActive]);
    return (react_1.default.createElement("div", { className: "ride-ui-kit-dropdown-wrapper", onMouseOver: () => setHovering(true), onMouseLeave: () => setHovering(false) },
        react_1.default.createElement(Button_1.default, Object.assign({ disabled: disabled, onClick: () => setActive((value) => !value) }, buttonProps)),
        react_1.default.createElement(react_transition_group_1.CSSTransition, { in: active, timeout: { enter: 100, exit: 200 }, mountOnEnter: true, unmountOnExit: true },
            react_1.default.createElement("div", { className: dropdownClassName ||
                    (0, classnames_1.default)("ride-ui-kit-dropdown", position) }, children))));
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=index.js.map