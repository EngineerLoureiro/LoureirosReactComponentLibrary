import { Link, LinkProps } from "../Link";
import { Button, ButtonProps } from "../Button";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBar.css";
import { SlideOutMenu } from "../SlideOutMenu";
import { useState } from "react";

export interface NavBarProps {
  logo: React.ReactNode;
  title: string;
  links: LinkProps[];
  buttons: ButtonProps[];
}

export function NavBar({ logo, title, links, buttons }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderedLinks = links.map((props, index) => {
    return (
      <li key={index}>
        <Link {...props} />
      </li>
    );
  });

  const renderedButtons = buttons.map((props, index) => {
    return (
      <li className="navbar__slideout-menu_buttons-list_item" key={index}>
        <Button {...props} />
      </li>
    );
  });
  return (
    <div className="navbar">
      <div className="navbar__brand" data-testid="navbar-brand">
        {logo}
        <h1>{title}</h1>
      </div>
      <ul className="navbar__links" data-testid="navbar__links">
        {renderedLinks}
      </ul>
      <ul className="navbar__buttons" data-testid="navbar__buttons">
        {renderedButtons}
      </ul>

      <button
        className="navbar__mobile-menu-icon"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <RxHamburgerMenu />
      </button>

      <SlideOutMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        logo={logo}
        title={title}
      >
        <ul className="navbar__slideout-menu_links">{renderedLinks}</ul>
        <ul className="navbar__slideout-menu_buttons">{renderedButtons}</ul>
      </SlideOutMenu>
    </div>
  );
}
