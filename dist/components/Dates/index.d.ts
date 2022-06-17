/**
 * Generic date-picker components.
 *
 * I chose to roll my own instead of using a library because I found that after
 * having implemented our date-tools library that the custom code was simpler
 * than the many workarounds I needed to do to make the libraries have the
 * desired appearance and functionality.
 */
/// <reference types="react" />
import { LocalDate } from "@ridereport/localdate";
import { DateRange } from "../../types";
declare type DateSelectProps = {
    /** The currently selected date */
    selectedDate: LocalDate | null;
    /** A setter for the currently selected date */
    onChange: (selectedDate: LocalDate) => void;
    /** The latest date the user is allowed to select */
    latestAllowed?: LocalDate;
    /** The earliest date the user is allowed to select */
    earliestAllowed?: LocalDate;
    /** If this control is disabled */
    disabled?: boolean;
};
/** A select dropdown for a choosing a single date */
export declare function DateSelect({ selectedDate, onChange, latestAllowed, earliestAllowed, disabled, }: DateSelectProps): JSX.Element;
interface DateButtonsProps {
    earliestDate: LocalDate | null;
    selectedDateRange: DateRange;
    setSelectedDateRange: (range: DateRange) => void;
}
export declare function DateButtons({ selectedDateRange, earliestDate, setSelectedDateRange, }: DateButtonsProps): JSX.Element;
declare type DateRangeTextOnlyProps = {
    selectedDateRange: DateRange;
};
/** Displays a minimal text-only version of the date, used when not allowing users to pick a custom date range through the calendar date-picker */
export declare function DateRangeTextOnly({ selectedDateRange, }: DateRangeTextOnlyProps): JSX.Element;
export {};
