import { StoryObj, Meta } from "@storybook/react";
import Modal from "../../components/modal/Modal";

const meta: Meta<typeof Modal> = {
  title: "Component/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Indicates if the modal is open or closed",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClose: {
      action: "closed",
      description: "Callback when the modal is closed",
      table: {
        type: { summary: "() => void" },
      },
    },
    title: {
      control: "text",
      description: "Title of the modal",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    subtitle: {
      control: "text",
      description: "Subtitle of the modal",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
  },
};

export default meta;

export const ModalExample: StoryObj<typeof Modal> = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "This is a title",
    subtitle: "This is a subtitle",
    children: "This is some content inside the modal",
  },
};
