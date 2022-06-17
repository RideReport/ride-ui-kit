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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangeSelect = void 0;
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const DropdownSelect_1 = require("../DropdownSelect");
const DateRangePicker_1 = require("../DateRangePicker");
/** A select dropdown for a choosing a range of dates */
function DateRangeSelect(_a) {
    var { selectedDateRange, onChange, disabled, position } = _a, props = __rest(_a, ["selectedDateRange", "onChange", "disabled", "position"]);
    const [selectActive, setSelectActive] = (0, react_1.useState)(false);
    const setSelectedDateRange = (value) => {
        setSelectActive(false);
        onChange(value);
    };
    return (react_1.default.createElement(DropdownSelect_1.DropdownSelect, { position: position, disabled: disabled, icon: "Calendar", active: selectActive, setActive: setSelectActive, value: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_intl_1.FormattedDate, { value: selectedDateRange[0].toDate(), dateStyle: "short" }),
            "\u2014",
            react_1.default.createElement(react_intl_1.FormattedDate, { value: selectedDateRange[1].toDate(), dateStyle: "short" })) },
        react_1.default.createElement(DateRangePicker_1.DateRangePicker, Object.assign({ selectedDateRange: selectedDateRange, onChange: setSelectedDateRange }, props))));
}
exports.DateRangeSelect = DateRangeSelect;
//# sourceMappingURL=index.js.map