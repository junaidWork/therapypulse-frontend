import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/tabs/Tabs";

interface TabsProps extends React.ComponentPropsWithoutRef<typeof Tabs> {}

export default {
  title: "Component/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  subcomponents: { TabsList, TabsTrigger, TabsContent },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto p-4">
        {" "}
        {/* Custom container */}
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: "text",
      description: "The current selected value",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "null" },
      },
    },
    onValueChange: {
      action: "changed",
      description: "Callback when the selected tab changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = (args) => (
  <Tabs {...args} className="w-[500px]">
    <TabsList className="w-full">
      <TabsTrigger value="tab1" className="w-full">
        Tab 1
      </TabsTrigger>
      <TabsTrigger value="tab2" className="w-full">
        Tab 2
      </TabsTrigger>
      <TabsTrigger value="tab3" className="w-full">
        Tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <p>This is the content of Tab 1.</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p>This is the content of Tab 2.</p>
    </TabsContent>
    <TabsContent value="tab3">
      <p>This is the content of Tab 3.</p>
    </TabsContent>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "tab1",
};

export const ControlledTabs: StoryFn<TabsProps> = (args) => {
  const [value, setValue] = React.useState("tab1");

  return (
    <Tabs value={value} onValueChange={setValue} className="w-[500px]">
      <TabsList className="w-full">
        <TabsTrigger value="tab1" className="w-full">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="w-full">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="w-full">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>This is the content of Tab 1.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>This is the content of Tab 2.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>This is the content of Tab 3.</p>
      </TabsContent>
    </Tabs>
  );
};
ControlledTabs.storyName = "Controlled Tabs";

export const TabsWithDisabledTab: StoryFn<TabsProps> = () => (
  <Tabs defaultValue="tab1" className="w-[500px]">
    <TabsList className="w-full">
      <TabsTrigger value="tab1" className="w-full">
        Tab 1
      </TabsTrigger>
      <TabsTrigger value="tab2" disabled className="w-full">
        Tab 2 (Disabled)
      </TabsTrigger>
      <TabsTrigger value="tab3" className="w-full">
        Tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <p>This is the content of Tab 1.</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p>This is the content of Tab 2.</p>
    </TabsContent>
    <TabsContent value="tab3">
      <p>This is the content of Tab 3.</p>
    </TabsContent>
  </Tabs>
);
TabsWithDisabledTab.storyName = "Tabs with Disabled Tab";

export const CustomizedTabs: StoryFn<TabsProps> = () => (
  <Tabs defaultValue="customTab1" className="w-[500px]">
    <TabsList className="w-full bg-blue-100">
      <TabsTrigger value="customTab1" className="w-full text-blue-600">
        Custom Tab 1
      </TabsTrigger>
      <TabsTrigger value="customTab2" className="w-full text-green-600">
        Custom Tab 2
      </TabsTrigger>
    </TabsList>
    <TabsContent value="customTab1">
      <p>Custom styled content for Tab 1.</p>
    </TabsContent>
    <TabsContent value="customTab2">
      <p>Custom styled content for Tab 2.</p>
    </TabsContent>
  </Tabs>
);
CustomizedTabs.storyName = "Customized Tabs";
