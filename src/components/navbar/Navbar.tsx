import React, { useState, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { NavItemComponent } from "./NavLink";
import { cn } from "../../utils/helpers";

interface NavItem {
  href: string;
  label: string;
  isLink: boolean;
  classes?: string;
}

interface NavbarProps {
  logo?: ReactNode;
  navItems: NavItem[];
  rightButtons?: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo = "Logo",
  navItems,
  rightButtons,
}) => {
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
              {logo}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 lg:space-x-4 h-full">
              {navItems.map((item) => {
                return (
                  <NavItemComponent
                    key={item.href}
                    href={item.href}
                    isLink={item.isLink}
                    className={item.classes}
                  >
                    {item.label}
                  </NavItemComponent>
                );
              })}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">{rightButtons}</div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) =>
              item.isLink ? (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.label}
                </NavLink>
              ) : (
                <p className={cn("", item.classes)}>{item.label}</p>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
