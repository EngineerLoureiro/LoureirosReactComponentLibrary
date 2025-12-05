import "./ValueActionButton.css";
import { TbCirclePlus } from "react-icons/tb";

export function ValueActionButton() {
  return (
    <div className="value-action-button">
      <button className="value-action-button__button">
        <TbCirclePlus color="#008000" />
      </button>
      <div className="value-action-button__info">
        <span className="value-action-button__title">{"Add Income"}</span>
        <span className="value-action-button__description">
          {"Create an income manually"}
        </span>
      </div>
    </div>
  );
}
