import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from "../../components/table/Table";

export default {
  title: "Component/Table",
  component: Table,
  subcomponents: {
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the table",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
  },
} as Meta<typeof Table>;

// Create a Template for stories
const Template: StoryFn<React.ComponentProps<typeof Table>> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>3</TableCell>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Moderator</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  className: "",
};
Default.storyName = "Default Table";

export const StripedRows: StoryFn<React.ComponentProps<typeof Table>> = (
  args
) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="bg-gray-100">
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow className="bg-gray-100">
        <TableCell>3</TableCell>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Moderator</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
StripedRows.args = {
  className: "",
};
StripedRows.storyName = "Striped Rows";

// Hoverable Rows Story
export const HoverableRows: StoryFn<React.ComponentProps<typeof Table>> = (
  args
) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="hover:bg-gray-200">
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow className="hover:bg-gray-200">
        <TableCell>2</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow className="hover:bg-gray-200">
        <TableCell>3</TableCell>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Moderator</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
HoverableRows.args = {
  className: "",
};
HoverableRows.storyName = "Hoverable Rows";

// Clickable Rows Story
export const ClickableRows: StoryFn<React.ComponentProps<typeof Table>> = (
  args
) => {
  const handleRowClick = (id: number) => {
    alert(`Row ${id} clicked`);
  };

  return (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          onClick={() => handleRowClick(1)}
          className="cursor-pointer hover:bg-gray-200"
        >
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow
          onClick={() => handleRowClick(2)}
          className="cursor-pointer hover:bg-gray-200"
        >
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow
          onClick={() => handleRowClick(3)}
          className="cursor-pointer hover:bg-gray-200"
        >
          <TableCell>3</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Moderator</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
ClickableRows.args = {
  className: "",
};
ClickableRows.storyName = "Clickable Rows";

// Table with Footer Story
export const TableWithFooter: StoryFn<React.ComponentProps<typeof Table>> = (
  args
) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>3</TableCell>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>Moderator</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={4} className="text-right">
          Total Users: 3
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);
TableWithFooter.args = {
  className: "",
};
TableWithFooter.storyName = "Table with Footer";
