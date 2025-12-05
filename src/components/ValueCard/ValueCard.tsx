import "./ValueCard.css";
import { FaArrowUp } from "react-icons/fa";

export function ValueCard() {
  return (
    <div className="value-card">
      <div className="value-card__info">
        <span className="value-card__label">{"Balance"}</span>
        <span className="value-card__value">{"5,502.45"}</span>
      </div>
      <div className="value-card__trend">
        <span>
          <FaArrowUp
            color="#008000"
            style={{ marginRight: "4px", lineHeight: "0" }}
          />
          {`12,5%`}
        </span>
      </div>
    </div>
  );
}
