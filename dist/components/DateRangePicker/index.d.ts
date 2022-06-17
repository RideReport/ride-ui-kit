/// <reference types="react" />
import { LocalDate } from "@ridereport/localdate";
import { DateRange } from "../../types";
import "./date-range-picker.scss";
declare type DateRangePickerProps = {
    selectedDateRange: DateRange;
    onChange: (selectedDateRange: DateRange) => void;
    latestAllowed?: LocalDate;
    earliestAllowed?: LocalDate;
    /** A set of dates (as strings) that should be marked as preliminary */
    preliminaryDates?: Set<string>;
};
export declare function DateRangePicker({ selectedDateRange, onChange, latestAllowed, earliestAllowed, preliminaryDates, }: DateRangePickerProps): JSX.Element;
export {};
