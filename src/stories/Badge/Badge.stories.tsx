import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge, badgeVariants } from "../../components/badge/Badge";

export default {
  title: "Component/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "info", "warning"],
      control: { type: "select" },
      table: {
        category: "Variant",
        defaultValue: { summary: "primary" },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export const Default: StoryObj<typeof Badge> = {
  args: {
    variant: "primary",
    children: "Primary badge",
  },
};
