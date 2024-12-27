import { StoryObj, Meta } from "@storybook/react";
import Switch from "../../components/switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "Component/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "boolean",
      description: "Indicates if the switch is on or off",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback when the switch state changes",
      table: {
        type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" },
      },
    },
    name: {
      control: "text",
      description: "Name attribute for the input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "switch" },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Switch> = {};
