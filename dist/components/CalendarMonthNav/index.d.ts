/// <reference types="react" />
import { LocalDate, LocalMonth } from "@ridereport/localdate";
import "./calendar-month-nav.scss";
declare type CalendarMonthNavProps = {
    /** the currently selected month */
    month: LocalMonth;
    /** a state setter for the currently selected month */
    onChange: (month: LocalMonth) => void;
    start?: LocalMonth;
    end?: LocalMonth;
    onClick?: (clicked: LocalDate) => void;
};
/** The month selector for a standard datepicker */
export declare function CalendarMonthNav({ month, onChange: onChangeMonth, start, end, onClick, }: CalendarMonthNavProps): JSX.Element;
export {};
