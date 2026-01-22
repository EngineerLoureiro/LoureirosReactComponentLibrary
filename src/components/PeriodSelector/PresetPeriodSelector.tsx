import classNames from "classnames";
import "./PeriodSelector.css";
import { PresetKey } from "./types";

export interface PeriodSelectorProps {
  value: PresetKey | undefined;
  onChange: (value: PresetKey) => void;
}

export const presetOptions = [
  { id: "this_month", label: "This month" },
  { id: "last_month", label: "Last Month" },
  { id: "this_year", label: "This year" },
  { id: "last_12_months", label: "Last 12 months" },
] satisfies ReadonlyArray<{ id: PresetKey; label: string }>;

export function PresetPeriodSelector(props: PeriodSelectorProps) {
  const { onChange, value } = props;

  return (
    <div className="period-selector" role="tablist">
      {presetOptions.map((option, index) => {
        return (
          <div key={option.id} className="period-selector-item">
            <button
              role="tab"
              className={classNames(
                "period-selector-button",
                value === option.id && "period-selector-button--active"
              )}
              onClick={() => {
                onChange(option.id);
              }}
            >
              {option.label}
            </button>
            {index < presetOptions.length - 1 && (
              <span className="period-selector-divider" />
            )}
          </div>
        );
      })}
    </div>
  );
}
