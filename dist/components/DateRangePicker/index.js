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
exports.DateRangePicker = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Icon_1 = __importDefault(require("../Icons/Icon"));
const CalendarMonthNav_1 = require("../CalendarMonthNav");
require("./date-range-picker.scss");
const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
/** The row of weekdays at the top of the calendar */
function Weekdays() {
    return (react_1.default.createElement(react_1.default.Fragment, null, weekdays.map((day) => (react_1.default.createElement("div", { key: day, className: "ride-ui-kit-date-range-picker-weekday-cell" }, day)))));
}
function DateRangePickerCalendar({ selectedDateRange, onClick, hovered, onHover, month, onChangeMonth, first, earliestAllowed, latestAllowed, singleDate = false, preliminaryDates, }) {
    let firstValue = selectedDateRange[0];
    let secondValue = selectedDateRange[1] || hovered || selectedDateRange[0];
    if (firstValue > secondValue) {
        firstValue = secondValue;
        secondValue = selectedDateRange[0];
    }
    const selectedDays = firstValue.range(secondValue);
    return (react_1.default.createElement("div", { className: "ride-ui-kit-date-range-picker-calendar" },
        react_1.default.createElement(CalendarMonthNav_1.CalendarMonthNav, { month: month, onChange: onChangeMonth, start: singleDate
                ? undefined
                : first
                    ? earliestAllowed === null || earliestAllowed === void 0 ? void 0 : earliestAllowed.toLocalMonth()
                    : month, end: singleDate
                ? undefined
                : first
                    ? month
                    : latestAllowed === null || latestAllowed === void 0 ? void 0 : latestAllowed.toLocalMonth(), onClick: onClick }),
        react_1.default.createElement("div", { className: "ride-ui-kit-date-range-picker-days-of-week" },
            react_1.default.createElement(Weekdays, null)),
        react_1.default.createElement("div", { className: "ride-ui-kit-date-range-picker-calendar-grid" },
            !singleDate &&
                month.toWeeks().map((week, r) => week.toDays().map((day, c) => {
                    const selected = !!selectedDays.find((x) => x.equals(day));
                    let continueLeft = false;
                    let continueRight = false;
                    if (!day.toLocalMonth().equals(month)) {
                        if (selected) {
                            if (day.day === 1 &&
                                day.isAfter(firstValue)) {
                                continueRight = true;
                            }
                            else if (day.plusDays(1).day === 1 &&
                                day.isBefore(secondValue)) {
                                continueLeft = true;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                    if (selected) {
                        const left = day.equals(firstValue);
                        const right = day.equals(secondValue);
                        return (react_1.default.createElement("div", { key: day.day, className: (0, classnames_1.default)("ride-ui-kit-date-range-picker-selected", {
                                left,
                                right,
                                "continue-left": continueLeft,
                                "continue-right": continueRight,
                            }), style: {
                                gridRow: r + 1,
                                gridColumn: c + 1,
                            } }));
                    }
                    return null;
                })),
            month.toWeeks().map((week, r) => week.toDays().map((day, c) => day.toLocalMonth().equals(month) ? (react_1.default.createElement("button", { type: "button", key: day.day, disabled: (latestAllowed &&
                    day.isAfter(latestAllowed)) ||
                    (earliestAllowed &&
                        day.isBefore(earliestAllowed)), className: (0, classnames_1.default)("ride-ui-kit-date-range-picker-day", {
                    active: !!selectedDateRange.find((d) => d && day.equals(d)),
                    hover: hovered
                        ? hovered.equals(day)
                        : false,
                    preliminary: preliminaryDates &&
                        preliminaryDates.has(day.toString()),
                }), onMouseOver: () => {
                    onHover(day);
                }, onClick: () => onClick(day), style: {
                    gridRow: r + 1,
                    gridColumn: (c % 7) + 1,
                } }, day.day)) : null)))));
}
function PreliminaryDataKey() {
    return (react_1.default.createElement("div", { className: "ride-ui-kit-date-range-picker-preliminary-dates" },
        react_1.default.createElement(Icon_1.default, { icon: "Circle" }),
        "Preliminary data"));
}
function DateRangePicker({ selectedDateRange, onChange, latestAllowed, earliestAllowed, preliminaryDates, }) {
    const [clicked, setClicked] = (0, react_1.useState)(null);
    const [hovered, setHovered] = (0, react_1.useState)(null);
    const [month, setMonth] = (0, react_1.useState)(selectedDateRange[1].toLocalMonth());
    const onClick = (selectedDateRange) => {
        if (clicked) {
            setClicked(null);
            onChange(clicked > selectedDateRange
                ? [selectedDateRange, clicked]
                : [clicked, selectedDateRange]);
        }
        else {
            setClicked(selectedDateRange);
        }
    };
    (0, react_1.useEffect)(() => {
        if (earliestAllowed && selectedDateRange[0].isBefore(earliestAllowed)) {
            const newDefaultLatest = latestAllowed &&
                earliestAllowed.plusDays(90).isAfter(latestAllowed)
                ? latestAllowed
                : earliestAllowed.plusDays(90);
            const endDateForLatestChange = selectedDateRange[1].isBefore(earliestAllowed)
                ? newDefaultLatest
                : selectedDateRange[1];
            onChange([earliestAllowed, endDateForLatestChange]);
        }
        else if (latestAllowed &&
            selectedDateRange[1].isAfter(latestAllowed)) {
            const newDefaultEarliest = earliestAllowed &&
                latestAllowed.minusDays(90).isBefore(earliestAllowed)
                ? earliestAllowed
                : latestAllowed.minusDays(90);
            const startDateForLatestChange = selectedDateRange[0].isAfter(latestAllowed)
                ? newDefaultEarliest
                : selectedDateRange[0];
            onChange([startDateForLatestChange, latestAllowed]);
        }
    }, [earliestAllowed, latestAllowed, onChange, selectedDateRange]);
    const commonProps = {
        onClick,
        hovered,
        onHover: setHovered,
        latestAllowed,
        earliestAllowed,
        preliminaryDates,
        selectedDateRange: (clicked
            ? [clicked, null]
            : selectedDateRange),
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "ride-ui-kit-date-range-picker-container" },
            latestAllowed &&
                earliestAllowed &&
                latestAllowed
                    .toLocalMonth()
                    .equals(earliestAllowed.toLocalMonth()) ? null : (react_1.default.createElement(DateRangePickerCalendar, Object.assign({}, commonProps, { first: true, month: month.minusMonths(1), onChangeMonth: (month) => setMonth(month.plusMonths(1)) }))),
            react_1.default.createElement(DateRangePickerCalendar, Object.assign({}, commonProps, { month: month, onChangeMonth: setMonth }))),
        preliminaryDates && preliminaryDates.size > 0 && (react_1.default.createElement(PreliminaryDataKey, null))));
}
exports.DateRangePicker = DateRangePicker;
//# sourceMappingURL=index.js.map