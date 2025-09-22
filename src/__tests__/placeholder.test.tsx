import { render, screen } from "@testing-library/react";

describe("Test Suite", () => {
  it("renders text", () => {
    render(<div>Hello, test!</div>);
    expect(screen.getByText("Hello, test!")).toBeInTheDocument();
  });
});
