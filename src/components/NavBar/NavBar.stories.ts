// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BsHouseFill } from "react-icons/bs";

import { NavBar } from "./NavBar";

import * as ButtonLayout from "../Button/Button.stories";
import * as LinkLayout from "../Link/Link.stories";
import { ButtonProps, Button } from "../Button";
import { LinkProps, Link } from "../Link";
import React from "react";

//👇 This default export determines where your story goes in the story list
const meta = {
  title: "Loureiro'sComponentLibrary/NavBar",
  component: NavBar,
  subcomponents: { Button, Link },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const logo: React.ReactNode = React.createElement(BsHouseFill, {
  size: 24,
  color: "blue",
});

export const FirstNavBar: Story = {
  args: {
    title: "Housing Crisis",
    buttons: [ButtonLayout.Primary.args, ButtonLayout.Secondary.args],
    links: [
      LinkLayout.ActiveLink.args,
      LinkLayout.ActiveLink.args,
      LinkLayout.ActiveLink.args,
      LinkLayout.ActiveLink.args,
    ],
    logo: logo,
  },
};
