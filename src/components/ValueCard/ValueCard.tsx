import "./ValueCard.css";

export type ValueCardProps = {
  label: string;
  value: string;
  fluctuation: string;
  fluctuationIcon: React.ReactNode;
};

export function ValueCard(props: ValueCardProps) {
  const { label, value, fluctuation, fluctuationIcon } = props;
  return (
    <div className="value-card">
      <div className="value-card__info">
        <span data-testid="value-card-label" className="value-card__label">
          {label}
        </span>
        <span data-testid="value-card-value" className="value-card__value">
          {value}
        </span>
      </div>
      <div className="value-card__trend">
        {fluctuationIcon}
        <span data-testid="value-card-fluctuation">{`${fluctuation}%`}</span>
      </div>
    </div>
  );
}
