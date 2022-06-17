"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarMonthNav = void 0;
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const Icon_1 = __importDefault(require("../Icons/Icon"));
require("./calendar-month-nav.scss");
/** The month or year left/right navigator for a calendar */
function CalendarNavBar({ label, onPreviousClick, onNextClick, setEarliestMonthOnClick, setLatestMonthOnClick, showEarliestBtn, showLatestBtn, }) {
    return (react_1.default.createElement("div", { className: "ride-ui-kit-calendar-month-nav" },
        react_1.default.createElement("div", { className: "ride-ui-kit-calendar-month-nav-buttons" },
            showEarliestBtn && (react_1.default.createElement("button", { type: "button", disabled: !setEarliestMonthOnClick, onClick: setEarliestMonthOnClick, className: "ride-ui-kit-calendar-month-nav-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Double-Left" }))),
            react_1.default.createElement("button", { type: "button", disabled: !onPreviousClick, onClick: onPreviousClick, className: "ride-ui-kit-calendar-month-nav-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Left" }))),
        label,
        react_1.default.createElement("div", { className: "ride-ui-kit-calendar-month-nav-buttons" },
            react_1.default.createElement("button", { type: "button", disabled: !onNextClick, onClick: onNextClick, className: "ride-ui-kit-calendar-month-nav-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Right" })),
            showLatestBtn && (react_1.default.createElement("button", { disabled: !setLatestMonthOnClick, type: "button", onClick: setLatestMonthOnClick, className: "ride-ui-kit-calendar-month-nav-link" },
                react_1.default.createElement(Icon_1.default, { icon: "Double-Right" }))))));
}
/** The month selector for a standard datepicker */
function CalendarMonthNav({ month, onChange: onChangeMonth, start, end, onClick, }) {
    const setToEarliestMonth = () => {
        if (onClick && start) {
            onChangeMonth(start);
        }
    };
    const setToLatestMonth = () => {
        if (onClick && end) {
            onChangeMonth(end);
        }
    };
    return (react_1.default.createElement(CalendarNavBar, { label: react_1.default.createElement(react_intl_1.FormattedDate, { value: month.first.toDate(), year: "numeric", month: "long" }), onNextClick: end && month.toString() >= end.toString()
            ? undefined
            : () => onChangeMonth(month.plusMonths(1)), onPreviousClick: start && month.toString() <= start.toString()
            ? undefined
            : () => onChangeMonth(month.minusMonths(1)), setEarliestMonthOnClick: start && month.isAfter(start) ? setToEarliestMonth : undefined, setLatestMonthOnClick: end && month.isBefore(end) ? setToLatestMonth : undefined, showEarliestBtn: !!start, showLatestBtn: !!end }));
}
exports.CalendarMonthNav = CalendarMonthNav;
//# sourceMappingURL=index.js.map