import { Route } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { ButtonProps } from "../components/GreatFrontEndNavBar/Button";
import { LinkProps, NavBar } from "../components/GreatFrontEndNavBar";

export function NavBarRoutes() {
  const links: LinkProps[] = [
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
  return (
    <Route
      path="components/navbar"
      element={
        <NavBar
          logo={<BsHouseFill size={24} color="blue" />}
          title={"Housing Crisis"}
          links={links}
          buttons={buttons}
        />
      }
    />
  );
}
