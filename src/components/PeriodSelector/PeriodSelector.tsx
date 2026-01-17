import classNames from "classnames";
import "./PeriodSelector.css";

export interface PeriodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const presetOptions = [
  "This month",
  "Last Month",
  "This year",
  "Last 12 months",
];
export function PeriodSelector(props: PeriodSelectorProps) {
  const { onChange, value } = props;

  return (
    <div className="period-selector" role="tablist">
      {presetOptions.map((option, index) => {
        return (
          <div key={option} className="period-selector-item">
            <button
              role="tab"
              className={classNames(
                "period-selector-button",
                value === option && "period-selector-button--active"
              )}
              onClick={() => {
                onChange(option);
              }}
            >
              {option}
            </button>
            {index < presetOptions.length - 1 && (
              <span className="period-selector-divider"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}
