"use strict";
/**
 * Generic date-picker components.
 *
 * I chose to roll my own instead of using a library because I found that after
 * having implemented our date-tools library that the custom code was simpler
 * than the many workarounds I needed to do to make the libraries have the
 * desired appearance and functionality.
 */
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
exports.DateRangeTextOnly = exports.DateButtons = exports.DateSelect = void 0;
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const localdate_1 = require("@ridereport/localdate");
const Icon_1 = __importDefault(require("../Icons/Icon"));
const classnames_1 = __importDefault(require("classnames"));
const DropdownSelect_1 = require("../DropdownSelect");
const Button_1 = __importDefault(require("../Button"));
const CalendarMonthNav_1 = require("../CalendarMonthNav");
function DatePickerCalendar({ selectedDate, onClick, earliestAllowed, latestAllowed, }) {
    const [hovered, setHovered] = (0, react_1.useState)(null);
    const [month, setMonth] = (0, react_1.useState)(selectedDate.toLocalMonth());
    return (react_1.default.createElement("div", { className: "ride-ui-kit-date-range-calendar" },
        react_1.default.createElement(CalendarMonthNav_1.CalendarMonthNav, { month: month, onChange: setMonth, start: earliestAllowed === null || earliestAllowed === void 0 ? void 0 : earliestAllowed.toLocalMonth(), end: latestAllowed === null || latestAllowed === void 0 ? void 0 : latestAllowed.toLocalMonth(), onClick: onClick }),
        react_1.default.createElement("div", { className: "ride-ui-kit-date-range-calendar-grid" }, month.toWeeks().map((week, r) => week.toDays().map((day, c) => day.toLocalMonth().equals(month) ? (react_1.default.createElement("button", { type: "button", key: day.day, disabled: (latestAllowed &&
                day.isAfter(latestAllowed)) ||
                (earliestAllowed &&
                    day.isBefore(earliestAllowed)), className: (0, classnames_1.default)("ride-ui-kit-date-range-day", {
                active: day.equals(selectedDate),
                hover: hovered
                    ? hovered.equals(day)
                    : false,
            }), onMouseOver: () => {
                setHovered(day);
            }, onClick: () => onClick(day), style: {
                gridRow: r + 1,
                gridColumn: (c % 7) + 1,
            } }, day.day)) : null)))));
}
/** A select dropdown for a choosing a single date */
function DateSelect({ selectedDate, onChange, latestAllowed, earliestAllowed, disabled, }) {
    const [selectActive, setSelectActive] = (0, react_1.useState)(false);
    return (react_1.default.createElement(DropdownSelect_1.DropdownSelect, { disabled: disabled, icon: "Calendar", active: selectActive, setActive: setSelectActive, value: selectedDate ? (react_1.default.createElement(react_intl_1.FormattedDate, { dateStyle: "short", value: selectedDate.toDate() })) : ("-- -- --") }, selectedDate && (react_1.default.createElement(DatePickerCalendar, { selectedDate: selectedDate, onClick: (clickedDate) => {
            setSelectActive(false);
            onChange(clickedDate);
        }, latestAllowed: latestAllowed, earliestAllowed: earliestAllowed }))));
}
exports.DateSelect = DateSelect;
function getDateButtons(earliestDate) {
    const dateButtons = [
        {
            name: "1W",
            value: [
                localdate_1.LocalDate.fromDate(new Date()).minusDays(7),
                localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
            ],
        },
        {
            name: "1M",
            value: [
                localdate_1.LocalDate.fromDate(new Date()).minusDays(28),
                localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
            ],
        },
        {
            name: "3M",
            value: [
                localdate_1.LocalDate.fromDate(new Date()).minusDays(90),
                localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
            ],
        },
        {
            name: "6M",
            value: [
                localdate_1.LocalDate.fromDate(new Date()).minusDays(180),
                localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
            ],
        },
        {
            name: "1YR",
            value: [
                localdate_1.LocalDate.fromDate(new Date()).minusDays(365),
                localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
            ],
        },
    ];
    const allTimeButton = {
        name: "All Time",
        value: [
            earliestDate,
            localdate_1.LocalDate.fromDate(new Date()).minusDays(1),
        ],
    };
    return earliestDate ? [...dateButtons, allTimeButton] : dateButtons;
}
function DateButtons({ selectedDateRange, earliestDate, setSelectedDateRange, }) {
    const dateButtons = getDateButtons(earliestDate);
    return (react_1.default.createElement("div", { className: "ride-ui-kit-date-buttons" }, dateButtons.map((dateButton) => (react_1.default.createElement(Button_1.default, { key: dateButton.name, color: 
        // use a primary button if it's the selected date
        selectedDateRange[0].equals(dateButton.value[0]) &&
            selectedDateRange[1].equals(dateButton.value[1])
            ? "blue"
            : "gray", onClick: () => {
            setSelectedDateRange(dateButton.value);
        } }, dateButton.name)))));
}
exports.DateButtons = DateButtons;
/** Displays a minimal text-only version of the date, used when not allowing users to pick a custom date range through the calendar date-picker */
function DateRangeTextOnly({ selectedDateRange, }) {
    return (react_1.default.createElement("div", { className: "ride-ui-kit-date-text-only" },
        react_1.default.createElement(Icon_1.default, { icon: "Calendar" }),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_intl_1.FormattedDate, { value: selectedDateRange[0].toDate(), dateStyle: "short" }),
            "\u2014",
            react_1.default.createElement(react_intl_1.FormattedDate, { value: selectedDateRange[1].toDate(), dateStyle: "short" }))));
}
exports.DateRangeTextOnly = DateRangeTextOnly;
//# sourceMappingURL=index.js.map