import { StoryObj, Meta } from "@storybook/react";
import Avatar from "../../components/avatar/Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Jane Doe",
  },
  argTypes: {
    name: {
      control: "text",
      description: "Name to display in the avatar",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Jane Doe" },
      },
    },
    imageUrl: {
      control: "text",
      description: "Image URL to display in the avatar",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size of the avatar",
      table: {
        type: { summary: "sm | md | lg | icon" },
        defaultValue: { summary: "md" },
      },
    },
  },
} as Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {};

export const WithImageUrl: StoryObj<typeof Avatar> = {
  args: {
    imageUrl:
      "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
};
