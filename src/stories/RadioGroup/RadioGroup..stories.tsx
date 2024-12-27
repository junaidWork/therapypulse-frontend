import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../../components/elements/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Component/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    value: "1",
    name: "radio-group",
  },
  argTypes: {
    options: {
      control: "object",
      description: "Array of radio options with label and value",
      table: {
        type: { summary: "RadioOption[]" },
      },
    },
    value: {
      control: "text",
      description: "Currently selected value",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "option1" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback when the selected value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    name: {
      control: "text",
      description: "Name attribute for the radio group",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "radio-group" },
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
