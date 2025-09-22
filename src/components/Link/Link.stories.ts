// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link } from "./Link";

import { fn } from "storybook/test";

//👇 This default export determines where your story goes in the story list
const meta = {
  title: "Loureiro'sComponentLibrary/Link",
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { onClick: fn(() => alert("Link clicked")) },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveLink: Story = {
  args: {
    label: "Click Me",
  },
};

export const DisabledLink: Story = {
  args: {
    label: "Click Me",
    disabled: true,
  },
};
