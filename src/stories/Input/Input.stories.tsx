import React, { useState } from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Input } from "../../components/elements/Input";

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Username",
    required: false,
    type: "text",
    placeholder: "Enter your username",
    disabled: false,
    value: "",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the input field",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Username" },
      },
    },
    required: {
      control: "boolean",
      description: "Marks the input as required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    type: {
      control: {
        type: "select",
        options: [
          "text",
          "password",
          "email",
          "number",
          "search",
          "tel",
          "url",
        ],
      },
      description: "Type of the input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Enter your username" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the input if true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: "text",
      description: "Value of the input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the value changes",
      table: {
        type: {
          summary: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState(args.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    args.onChange?.(e);
  };

  return <Input {...args} value={inputValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "",
};
Default.storyName = "Default Table";
export const RequiredField: Story = {
  render: Template,
  args: {
    required: true,
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
    label: "Disabled Input",
    placeholder: "Can't type here",
  },
};

export const PasswordInput: Story = {
  render: Template,
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
};

export const CustomPlaceholder: Story = {
  render: Template,
  args: {
    label: "First Name",
    placeholder: "Type your first name here",
  },
};
