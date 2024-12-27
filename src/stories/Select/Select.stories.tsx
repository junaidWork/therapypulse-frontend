import { StoryObj, Meta, StoryFn } from "@storybook/react";
import SearchableSelect from "../../components/elements/Select";
import { useState } from "react";
import { Option } from "../../utils/types/clients";
import { ActionMeta, SingleValue } from "react-select";

export default {
  title: "Component/SearchableSelect",
  component: SearchableSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the select",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Select..." },
      },
    },
    value: {
      control: "object",
      description: "Selected value",
      table: {
        type: { summary: "Option" },
        defaultValue: { summary: "null" },
      },
    },
    isSearchable: {
      control: "boolean",
      description: "Enable search functionality",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    customStyles: {
      control: "object",
      description: "Custom styles for the select",
      table: {
        type: { summary: "Object" },
        defaultValue: { summary: "{}" },
      },
    },
  },
} as Meta<typeof SearchableSelect>;

const Template: StoryFn<typeof SearchableSelect> = (args) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    args.value ?? null
  );

  const handleChange = (
    option: SingleValue<Option> | null,
    actionMeta: ActionMeta<Option>
  ) => {
    setSelectedOption(option);
    args.onChange?.(option, actionMeta);
  };

  return (
    <div className="w-[400px]">
      <SearchableSelect
        className="w-full"
        {...args}
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  className: "",
};
Default.storyName = "Default Select";
export const WithoutSearch: StoryObj<typeof SearchableSelect> = {
  render: Template,
  args: {
    isSearchable: false,
  },
};
