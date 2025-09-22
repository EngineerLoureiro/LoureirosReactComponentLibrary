import "./SlideOutMenu.css";
import classNames from "classnames";
import { GoX } from "react-icons/go";

export interface SlideOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  logo?: React.ReactNode;
  title?: string;
}

export function SlideOutMenu({
  isOpen,
  onClose,
  children,
  logo,
  title,
}: SlideOutMenuProps) {
  return (
    <aside
      className={classNames("slideout-menu", { open: isOpen })}
      data-testid="slideout-menu"
    >
      <div className="slideout-menu__header">
        <div className="slideout-menu__brand">
          {logo} <h2>{title}</h2>
        </div>
        <button
          onClick={onClose}
          className="slideout-menu__close"
          aria-label="Close menu"
        >
          <GoX />
        </button>
      </div>
      {children}
    </aside>
  );
}
