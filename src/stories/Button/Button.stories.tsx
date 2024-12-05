import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/elements/Button";

const meta = {
  title: "Component/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    children: "Button Text",
    disabled: false,
  },
  argTypes: {
    variant: {
      category: "Variant",
      options: ["primary", "secondary", "outline", "ghost", "link"],
      control: { type: "select" },
      table: {
        category: "Variant",
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
      table: {
        category: "Size",
        defaultValue: { summary: "default" },
      },
    },
  },
};
