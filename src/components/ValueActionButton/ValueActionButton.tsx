import "./ValueActionButton.css";

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
      <button
        className="value-action-button__button"
        onClick={onClick}
        aria-label={`perform action ${title}`}
      >
        {buttonIcon}
      </button>
      <div className="value-action-button__info">
        <span
          data-testid="value-action-button-title"
          className="value-action-button__title"
        >
          {title}
        </span>
        <span
          data-testid="value-action-button-description"
          className="value-action-button__description"
        >
          {description}
        </span>
      </div>
    </div>
  );
}
