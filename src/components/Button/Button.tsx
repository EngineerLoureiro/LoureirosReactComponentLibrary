import classNames from "classnames";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: "primary" | "secondary";
}

export function Button({
  label,
  className,
  backgroundColor,
  textColor,
  style,
  onClick,
  variant,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames("btn", variant && `btn-${variant}`, className)}
      style={{ backgroundColor, color: textColor, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}
