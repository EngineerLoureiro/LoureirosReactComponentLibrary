import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { BsHouseFill } from "react-icons/bs";
import "@testing-library/jest-dom";
import { ButtonProps } from "../Button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/components/button" },
  {
    label: "Docs",
    href: "/docs",
    target: "_blank",
  },
  { label: "Contact", href: "/components/button", disabled: true },
  {
    label: "GitHub",
    href: "https://github.com/EngineerLoureiro",
    target: "_blank",
  },
];

const buttons: ButtonProps[] = [
  {
    label: "Login",
    variant: "primary",
    onClick: () => alert("Logging in..."),
  },
  {
    label: "Sign Up",
    variant: "secondary",
    onClick: () => alert("Signing up..."),
  },
];

const logo = <BsHouseFill size={24} color="blue" />;

describe("NavBar", () => {
  it("renders logo, title, links and button", () => {
    render(
      <NavBar
        logo={logo}
        title="Housing Crisis"
        links={links}
        buttons={buttons}
      />
    );

    const brand = screen.getByTestId("navbar-brand");
    expect(
      within(brand).getByRole("heading", { name: "Housing Crisis" })
    ).toBeInTheDocument();

    const navBarLinks = screen.getByTestId("navbar__links");
    links.forEach((link) => {
      expect(
        within(navBarLinks).getByRole("link", { name: link.label })
      ).toHaveAttribute("href", link.href);
    });
    const navBarButtons = screen.getByTestId("navbar__buttons");
    buttons.forEach((button) => {
      expect(
        within(navBarButtons).getByRole("button", { name: button.label })
      ).toBeInTheDocument();
    });
  });

  it("opens and closes the mobile menu when hamburguer and close buttons are clicked", () => {
    render(
      <NavBar
        logo={logo}
        title="Housing Crisis"
        links={links}
        buttons={buttons}
      />
    );

    const hamburguerButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(hamburguerButton);

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeVisible();

    fireEvent.click(closeButton);
    const slideoutMenu = screen.getByTestId("slideout-menu");
    expect(slideoutMenu).not.toHaveClass("open");
  });
  it("has proper aria attributes", () => {
    render(
      <NavBar
        logo={logo}
        title="Housing Crisis"
        links={links}
        buttons={buttons}
      />
    );

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <NavBar
        logo={logo}
        title="Housing Crisis"
        links={links}
        buttons={buttons}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
