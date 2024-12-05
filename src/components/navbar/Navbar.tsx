import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as NotesIcon } from "../../assets/icons/note.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-circle.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { NavItem } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../elements/Button";
import Avatar from "../avatar/Avatar";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 xl:px-24">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center gap-8 xl:gap-10 2xl:gap-16">
            <div className="flex-shrink-0 flex items-center">
              <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 lg:space-x-4 h-full">
              <NavItem href="/new-notes">New notes</NavItem>
              <NavItem href="/">Clients</NavItem>
              <NavItem href="/clinicians">Clinicians</NavItem>
              <NavItem href="/templates">Templates</NavItem>
              <p className="hidden xl:flex text-primary">Earn $80</p>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <NotesIcon />
              <p className="text-secondary">12 notes left </p>
              <InfoIcon />
            </div>
            <Button className="bg-primary-gradient hidden sm:flex">
              Become SUPER
            </Button>
            <div className="flex items-center gap-1">
              <Avatar name="John Doe" imageUrl="" size="md" />
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <NavLink
              to="/new-notes"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              New Notes
            </NavLink>
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Clients
            </NavLink>
            <NavLink
              to="/clinicians"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Clinicians
            </NavLink>
            <NavLink
              to="/templates"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Templates
            </NavLink>
            <Button className="w-full mt-2 bg-primary-gradient">
              Become SUPER
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
