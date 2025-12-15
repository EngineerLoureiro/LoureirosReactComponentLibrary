import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./Link";

describe("Link component", () => {
  it("renders with correct label and href", () => {
    render(<Link href="/about" label="About" />);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
  });

  it("adds rel = 'noopener noreferrer' when target='_blank'", () => {
    render(<Link href="/about" label="About" target="_blank" />);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("adds rel ='nofollow ", () => {
    render(<Link href="/about" label="About" rel="nofollow" />);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("rel", "nofollow");
  });

  it("calls onClick when clicked", () => {
    const handleOnClick = jest.fn();
    render(<Link href="/about" label="About" onClick={handleOnClick} />);
    fireEvent.click(screen.getByRole("link", { name: "About" }));
    expect(handleOnClick).toHaveBeenCalled();
  });
  it("disables the link", () => {
    const handleOnClick = jest.fn();
    render(
      <Link
        href="/about"
        label="About"
        onClick={handleOnClick}
        disabled={true}
      />
    );
    const link = screen.getByRole("link", { name: "About" });
    fireEvent.click(link);
    expect(handleOnClick).toHaveBeenCalledTimes(0);
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
  });

  it("renders valid Link", () => {
    const { asFragment } = render(<Link href="/about" label="About" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders disabled Link", () => {
    const { asFragment } = render(
      <Link href="/about" label="About" disabled={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
