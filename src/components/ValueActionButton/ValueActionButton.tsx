import "./ValueActionButton.css";
import { TbCirclePlus } from "react-icons/tb";

export type ValueActionButtonProps = {
  buttonIcon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
};
export function ValueActionButton(props: ValueActionButtonProps) {
  const { buttonIcon, title, description, onClick } = props;
  return (
    <div className="value-action-button">
      <button className="value-action-button__button" onClick={onClick}>
        {buttonIcon}
      </button>
      <div className="value-action-button__info">
        <span className="value-action-button__title">{title}</span>
        <span className="value-action-button__description">{description}</span>
      </div>
    </div>
  );
}
