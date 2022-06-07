"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_svg_1 = __importDefault(require("./../../assets/svgs/icons.svg"));
const classnames_1 = __importDefault(require("classnames"));
const icon_module_scss_1 = __importDefault(require("./icon.module.scss"));
const HALF_ICONS = [
    "Battery-0-33",
    "Battery-33-66",
    "Battery-66-100",
    "Battery-Disabled",
];
/**
 * An Icon component that renders an svg of the chosen icon. Its size is
 * determined by the parent's font size, and the color by the font color.
 */
function Icon({ icon, style, className = "" }) {
    return (react_1.default.createElement("svg", { className: (0, classnames_1.default)(icon_module_scss_1.default.icon, className, {
            half: HALF_ICONS.includes(icon),
        }), style: style },
        react_1.default.createElement("use", { xlinkHref: `${icons_svg_1.default}#icon-${icon}` })));
}
exports.default = Icon;
//# sourceMappingURL=Icon.js.map