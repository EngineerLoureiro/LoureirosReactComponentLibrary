import { CiCalendarDate } from "react-icons/ci";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import classNames from "classnames";
import "./CustomPeriodSelector.css";

export interface CustomPeriodSelectorProps {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export function CustomPeriodSelector({
  value,
  onChange,
}: CustomPeriodSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-period-selector">
      <button
        type="button"
        className={classNames(
          "custom-period-selector__trigger",
          isOpen && "custom-period-selector__trigger--active"
        )}
        onClick={() => setIsOpen((p) => !p)}
      >
        <CiCalendarDate className="custom-period-selector__trigger-icon" />
        <span className="custom-period-selector__trigger-label">
          Select period
        </span>
      </button>

      {isOpen && (
        <div
          className="custom-period-selector__popover"
          role="dialog"
          aria-label="Select custom period"
        >
          <DayPicker
            mode="range"
            selected={value}
            onSelect={onChange}
            min={2}
            disabled={{ after: new Date(Date.now()) }}
            className="custom-period-selector__calendar"
            classNames={{
              months: "custom-period-selector__months",
              month: "custom-period-selector__month",
              caption: "custom-period-selector__caption",
              caption_label: "custom-period-selector__caption-label",
              nav: "custom-period-selector__nav",
              nav_button: "custom-period-selector__nav-button",
              table: "custom-period-selector__table",
              head_row: "custom-period-selector__head-row",
              head_cell: "custom-period-selector__head-cell",
              row: "custom-period-selector__row",
              cell: "custom-period-selector__cell",
              day: "custom-period-selector__day", // in your version this ends up on TD
              day_today: "custom-period-selector__day--today",
              day_outside: "custom-period-selector__day--outside",
              day_selected: "custom-period-selector__day--selected",
              day_range_start: "custom-period-selector__day--range-start",
              day_range_middle: "custom-period-selector__day--range-middle",
              day_range_end: "custom-period-selector__day--range-end",
            }}
          />
        </div>
      )}
    </div>
  );
}
