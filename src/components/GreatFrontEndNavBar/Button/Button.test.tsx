import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with the correct label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled;
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled={true} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("applies the correct variant class", () => {
    render(<Button label="Secondary" variant="secondary" />);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");
  });

  it("renders primary button snapshot", () => {
    const { asFragment } = render(<Button label="Save" variant="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders secondary button snapshot", () => {
    const { asFragment } = render(<Button label="Save" variant="secondary" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders disabled button snapshot", () => {
    const { asFragment } = render(<Button label="Save" disabled={true} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
