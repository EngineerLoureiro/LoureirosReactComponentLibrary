import classNames from "classnames";
import { AnchorHTMLAttributes } from "react";
import "./Link.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  disabled?: boolean;
}

export function Link({
  target,
  rel,
  label,
  className,
  disabled,
  onClick,
  ...rest
}: LinkProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    } else if (onClick) {
      onClick(e);
    }
  };
  return (
    <a
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={classNames("link", { "link--disabled": disabled }, className)}
      onClick={handleOnClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : rest.tabIndex}
      {...rest}
    >
      {label}
    </a>
  );
}
