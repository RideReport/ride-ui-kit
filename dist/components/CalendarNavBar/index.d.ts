/// <reference types="react" />
import "./calendar-nav-bar.scss";
declare type CalendarNavBarProps = {
    /** The currently selected month/year/whatever */
    label: any;
    /** When you click the left arrow */
    onPreviousClick?: () => void;
    /** When you click the right arrow */
    onNextClick?: () => void;
    setEarliestMonthOnClick?: () => void;
    setLatestMonthOnClick?: () => void;
    showEarliestBtn?: boolean;
    showLatestBtn?: boolean;
};
/** The month or year left/right navigator for a calendar */
export declare function CalendarNavBar({ label, onPreviousClick, onNextClick, setEarliestMonthOnClick, setLatestMonthOnClick, showEarliestBtn, showLatestBtn, }: CalendarNavBarProps): JSX.Element;
export {};
