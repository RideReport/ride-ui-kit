/// <reference types="react" />
import { LocalDate } from "@ridereport/localdate";
import { DateRange } from "../../types";
declare type DateRangeSelectProps = {
    /** The currently selected date range */
    selectedDateRange: DateRange;
    /** A setter for the currently selected date range */
    onChange: (selectedDateRange: DateRange) => void;
    /** The latest date the user is allowed to select */
    latestAllowed?: LocalDate;
    /** The earliest date the user is allowed to select */
    earliestAllowed?: LocalDate;
    /** A set of dates (as strings) that should be marked as preliminary */
    preliminaryDates?: Set<string>;
    disabled?: boolean;
    position?: "bottom-left" | "bottom-right";
};
/** A select dropdown for a choosing a range of dates */
export declare function DateRangeSelect({ selectedDateRange, onChange, disabled, position, ...props }: DateRangeSelectProps): JSX.Element;
export {};
