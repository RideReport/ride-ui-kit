import React, { useState, useEffect } from "react";
import { LocalDate, LocalMonth } from "@ridereport/localdate";
import cx from "classnames";
import { DateRange } from "../../types";
import Icon from "../Icons/Icon";
import { CalendarMonthNav } from "../CalendarMonthNav";
import "./date-range-picker.scss";

type PartialDateRange = DateRange | readonly [LocalDate, null];

type DateRangePickerCalendarProps = {
    selectedDateRange: PartialDateRange;
    onClick: (clicked: LocalDate) => void;
    hovered: LocalDate | null;
    onHover: (hovered: LocalDate | null) => void;
    month: LocalMonth;
    onChangeMonth: (month: LocalMonth) => void;
    first?: boolean;
    latestAllowed?: LocalDate;
    earliestAllowed?: LocalDate;
    singleDate?: boolean;

    /** A set of dates (as strings) that should be marked as preliminary */
    preliminaryDates?: Set<string>;
};

const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

/** The row of weekdays at the top of the calendar */
function Weekdays() {
    return (
        <>
            {weekdays.map((day) => (
                <div
                    key={day}
                    className="ride-ui-kit-date-range-picker-weekday-cell"
                >
                    {day}
                </div>
            ))}
        </>
    );
}

function DateRangePickerCalendar({
    selectedDateRange,
    onClick,
    hovered,
    onHover,
    month,
    onChangeMonth,
    first,
    earliestAllowed,
    latestAllowed,
    singleDate = false,
    preliminaryDates,
}: DateRangePickerCalendarProps) {
    let firstValue = selectedDateRange[0];
    let secondValue = selectedDateRange[1] || hovered || selectedDateRange[0];
    if (firstValue > secondValue) {
        firstValue = secondValue;
        secondValue = selectedDateRange[0];
    }
    const selectedDays = firstValue.range(secondValue);
    return (
        <div className="ride-ui-kit-date-range-picker-calendar">
            <CalendarMonthNav
                month={month}
                onChange={onChangeMonth}
                start={
                    singleDate
                        ? undefined
                        : first
                        ? earliestAllowed?.toLocalMonth()
                        : month
                }
                end={
                    singleDate
                        ? undefined
                        : first
                        ? month
                        : latestAllowed?.toLocalMonth()
                }
                onClick={onClick}
            />
            <div className="ride-ui-kit-date-range-picker-days-of-week">
                <Weekdays />
            </div>
            <div className="ride-ui-kit-date-range-picker-calendar-grid">
                {/* The gray selection background. Manually positioned on the grid.
                     Only show if selecting a date range. */}
                {!singleDate &&
                    month.toWeeks().map((week, r) =>
                        week.toDays().map((day, c) => {
                            const selected = !!selectedDays.find((x) =>
                                x.equals(day)
                            );
                            let continueLeft = false;
                            let continueRight = false;
                            if (!day.toLocalMonth().equals(month)) {
                                if (selected) {
                                    if (
                                        day.day === 1 &&
                                        day.isAfter(firstValue)
                                    ) {
                                        continueRight = true;
                                    } else if (
                                        day.plusDays(1).day === 1 &&
                                        day.isBefore(secondValue)
                                    ) {
                                        continueLeft = true;
                                    } else {
                                        return null;
                                    }
                                }
                            }
                            if (selected) {
                                const left = day.equals(firstValue);
                                const right = day.equals(secondValue);
                                return (
                                    <div
                                        key={day.day}
                                        className={cx(
                                            "ride-ui-kit-date-range-picker-selected",
                                            {
                                                left,
                                                right,
                                                "continue-left": continueLeft,
                                                "continue-right": continueRight,
                                            }
                                        )}
                                        style={{
                                            gridRow: r + 1,
                                            gridColumn: c + 1,
                                        }}
                                    />
                                );
                            }
                            return null;
                        })
                    )}
                {/* The day numbers. Manually positioned on the grid. */}
                {month.toWeeks().map((week, r) =>
                    week.toDays().map((day, c) =>
                        day.toLocalMonth().equals(month) ? (
                            <button
                                type="button"
                                key={day.day}
                                disabled={
                                    (latestAllowed &&
                                        day.isAfter(latestAllowed)) ||
                                    (earliestAllowed &&
                                        day.isBefore(earliestAllowed))
                                }
                                className={cx(
                                    "ride-ui-kit-date-range-picker-day",
                                    {
                                        active: !!selectedDateRange.find(
                                            (d) => d && day.equals(d)
                                        ),
                                        hover: hovered
                                            ? hovered.equals(day)
                                            : false,
                                        preliminary:
                                            preliminaryDates &&
                                            preliminaryDates.has(
                                                day.toString()
                                            ),
                                    }
                                )}
                                onMouseOver={() => {
                                    onHover(day);
                                }}
                                onClick={() => onClick(day)}
                                style={{
                                    gridRow: r + 1,
                                    gridColumn: (c % 7) + 1,
                                }}
                            >
                                {day.day}
                            </button>
                        ) : null
                    )
                )}
            </div>
        </div>
    );
}

function PreliminaryDataKey() {
    return (
        <div className="ride-ui-kit-date-range-picker-preliminary-dates">
            <Icon icon="Circle" />
            Preliminary data
        </div>
    );
}

type DateRangePickerProps = {
    selectedDateRange: DateRange;
    onChange: (selectedDateRange: DateRange) => void;
    latestAllowed?: LocalDate;
    earliestAllowed?: LocalDate;

    /** A set of dates (as strings) that should be marked as preliminary */
    preliminaryDates?: Set<string>;
};
export function DateRangePicker({
    selectedDateRange,
    onChange,
    latestAllowed,
    earliestAllowed,
    preliminaryDates,
}: DateRangePickerProps) {
    const [clicked, setClicked] = useState<LocalDate | null>(null);
    const [hovered, setHovered] = useState<LocalDate | null>(null);
    const [month, setMonth] = useState(selectedDateRange[1].toLocalMonth());
    const onClick = (selectedDateRange: LocalDate) => {
        if (clicked) {
            setClicked(null);
            onChange(
                clicked > selectedDateRange
                    ? [selectedDateRange, clicked]
                    : [clicked, selectedDateRange]
            );
        } else {
            setClicked(selectedDateRange);
        }
    };
    useEffect(() => {
        if (earliestAllowed && selectedDateRange[0].isBefore(earliestAllowed)) {
            const newDefaultLatest =
                latestAllowed &&
                earliestAllowed.plusDays(90).isAfter(latestAllowed)
                    ? latestAllowed
                    : earliestAllowed.plusDays(90);
            const endDateForLatestChange = selectedDateRange[1].isBefore(
                earliestAllowed
            )
                ? newDefaultLatest
                : selectedDateRange[1];
            onChange([earliestAllowed, endDateForLatestChange]);
        } else if (
            latestAllowed &&
            selectedDateRange[1].isAfter(latestAllowed)
        ) {
            const newDefaultEarliest =
                earliestAllowed &&
                latestAllowed.minusDays(90).isBefore(earliestAllowed)
                    ? earliestAllowed
                    : latestAllowed.minusDays(90);
            const startDateForLatestChange = selectedDateRange[0].isAfter(
                latestAllowed
            )
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
            : selectedDateRange) as PartialDateRange,
    };
    return (
        <div>
            <div className="ride-ui-kit-date-range-picker-container">
                {latestAllowed &&
                earliestAllowed &&
                latestAllowed
                    .toLocalMonth()
                    .equals(earliestAllowed.toLocalMonth()) ? null : (
                    <DateRangePickerCalendar
                        {...commonProps}
                        first
                        month={month.minusMonths(1)}
                        onChangeMonth={(month) => setMonth(month.plusMonths(1))}
                    />
                )}
                <DateRangePickerCalendar
                    {...commonProps}
                    month={month}
                    onChangeMonth={setMonth}
                />
            </div>
            {preliminaryDates && preliminaryDates.size > 0 && (
                <PreliminaryDataKey />
            )}
        </div>
    );
}
