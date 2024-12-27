import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as NotesIcon } from "../../assets/icons/note.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-circle.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { Button } from "../../components/elements/Button";
import Avatar from "../../components/avatar/Avatar";
import { Navbar } from "../../components/navbar/Navbar";

const navItems = [
  { href: "/new-notes", label: "New Notes", isLink: true, classes: "" },
  { href: "/", label: "Clients", isLink: true, classes: "" },
  { href: "/clinicians", label: "Clinicians", isLink: true, classes: "" },
  { href: "/templates", label: "Templates", isLink: true, classes: "" },
  {
    href: "#",
    label: "Earn $80",
    isLink: false,
    classes: "hidden xl:flex text-primary",
  },
];
const rightButtons = (
  <>
    <div className="hidden sm:flex items-center gap-2">
      <NotesIcon />
      <p className="text-secondary">12 notes left</p>
      <InfoIcon />
    </div>
    <Button className="bg-primary-gradient hidden sm:flex">Become SUPER</Button>
    <div className="flex items-center gap-1">
      <Avatar name="John Doe" imageUrl="" size="md" />
      <ArrowDown />
    </div>
  </>
);

const withRouter = (Story: any) => (
  <Router>
    <Story />
  </Router>
);

const meta = {
  title: "component/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    logo: <Logo />,
    navItems,
    rightButtons,
  },
  decorators: [withRouter],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
