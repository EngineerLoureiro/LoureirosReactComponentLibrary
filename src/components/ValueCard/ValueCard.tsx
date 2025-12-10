import "./ValueCard.css";
import { FaArrowUp } from "react-icons/fa";
import { IconType } from "react-icons";

export type ValueCardProps = {
  description: string;
  value: string;
  fluctuation: string;
  fluctuationIcon: React.ReactNode;
};
/* <FaArrowUp color="#008000" style={{ marginRight: "4px", lineHeight: "0" }} />; */

export function ValueCard(props: ValueCardProps) {
  const { description, value, fluctuation, fluctuationIcon } = props;
  return (
    <div className="value-card">
      <div className="value-card__info">
        <span className="value-card__label">{description}</span>
        <span className="value-card__value">{value}</span>
      </div>
      <div className="value-card__trend">
        {fluctuationIcon}
        <span>{`${fluctuation}%`}</span>
      </div>
    </div>
  );
}
