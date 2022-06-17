import React from "react";
import { FormattedDate } from "react-intl";
import { LocalDate, LocalMonth } from "@ridereport/localdate";
import Icon from "../Icons/Icon";
import "./calendar-month-nav.scss";

type CalendarNavBarProps = {
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
function CalendarNavBar({
    label,
    onPreviousClick,
    onNextClick,
    setEarliestMonthOnClick,
    setLatestMonthOnClick,
    showEarliestBtn,
    showLatestBtn,
}: CalendarNavBarProps) {
    return (
        <div className="ride-ui-kit-calendar-month-nav">
            <div className="ride-ui-kit-calendar-month-nav-buttons">
                {showEarliestBtn && (
                    <button
                        type="button"
                        disabled={!setEarliestMonthOnClick}
                        onClick={setEarliestMonthOnClick}
                        className="ride-ui-kit-calendar-month-nav-link"
                    >
                        <Icon icon="Double-Left" />
                    </button>
                )}
                <button
                    type="button"
                    disabled={!onPreviousClick}
                    onClick={onPreviousClick}
                    className="ride-ui-kit-calendar-month-nav-link"
                >
                    <Icon icon="Left" />
                </button>
            </div>
            {label}
            <div className="ride-ui-kit-calendar-month-nav-buttons">
                <button
                    type="button"
                    disabled={!onNextClick}
                    onClick={onNextClick}
                    className="ride-ui-kit-calendar-month-nav-link"
                >
                    <Icon icon="Right" />
                </button>
                {showLatestBtn && (
                    <button
                        disabled={!setLatestMonthOnClick}
                        type="button"
                        onClick={setLatestMonthOnClick}
                        className="ride-ui-kit-calendar-month-nav-link"
                    >
                        <Icon icon="Double-Right" />
                    </button>
                )}
            </div>
        </div>
    );
}

type CalendarMonthNavProps = {
    /** the currently selected month */
    month: LocalMonth;
    /** a state setter for the currently selected month */
    onChange: (month: LocalMonth) => void;
    start?: LocalMonth;
    end?: LocalMonth;
    onClick?: (clicked: LocalDate) => void;
};
/** The month selector for a standard datepicker */
export function CalendarMonthNav({
    month,
    onChange: onChangeMonth,
    start,
    end,
    onClick,
}: CalendarMonthNavProps) {
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

    return (
        <CalendarNavBar
            label={
                <FormattedDate
                    value={month.first.toDate()}
                    year="numeric"
                    month="long"
                />
            }
            onNextClick={
                end && month.toString() >= end.toString()
                    ? undefined
                    : () => onChangeMonth(month.plusMonths(1))
            }
            onPreviousClick={
                start && month.toString() <= start.toString()
                    ? undefined
                    : () => onChangeMonth(month.minusMonths(1))
            }
            setEarliestMonthOnClick={
                start && month.isAfter(start) ? setToEarliestMonth : undefined
            }
            setLatestMonthOnClick={
                end && month.isBefore(end) ? setToLatestMonth : undefined
            }
            showEarliestBtn={!!start}
            showLatestBtn={!!end}
        />
    );
}
