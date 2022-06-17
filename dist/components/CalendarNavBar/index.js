"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarNavBar = void 0;
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
require("./calendar-nav-bar.scss");
/** The month or year left/right navigator for a calendar */
function CalendarNavBar({ label, onPreviousClick, onNextClick, setEarliestMonthOnClick, setLatestMonthOnClick, showEarliestBtn, showLatestBtn, }) {
    return (react_1.default.createElement("div", { className: "ride-ui-kit-calendar-nav-bar" },
        react_1.default.createElement("div", { className: "ride-ui-kit-calendar-nav-bar-buttons" },
            showEarliestBtn && (react_1.default.createElement("button", { type: "button", disabled: !setEarliestMonthOnClick, onClick: setEarliestMonthOnClick, className: "ride-ui-kit-calendar-nav-bar-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Double-Left" }))),
            react_1.default.createElement("button", { type: "button", disabled: !onPreviousClick, onClick: onPreviousClick, className: "ride-ui-kit-calendar-nav-bar-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Left" }))),
        label,
        react_1.default.createElement("div", { className: "ride-ui-kit-calendar-nav-bar-buttons" },
            react_1.default.createElement("button", { type: "button", disabled: !onNextClick, onClick: onNextClick, className: "ride-ui-kit-calendar-nav-bar-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Right" })),
            showLatestBtn && (react_1.default.createElement("button", { disabled: !setLatestMonthOnClick, type: "button", onClick: setLatestMonthOnClick, className: "ride-ui-kit-calendar-nav-bar-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Double-Right" }))))));
}
exports.CalendarNavBar = CalendarNavBar;
//# sourceMappingURL=index.js.map