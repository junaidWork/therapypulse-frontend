import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/helpers";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isLink: boolean;
  className: string | undefined;
}

export const NavItemComponent: React.FC<NavLinkProps> = ({
  href,
  children,
  isLink,
  className,
}) => {
  return isLink ? (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? "h-full flex items-center font-bold text-primary border-primary border-b-4"
          : "h-full flex items-center font-normal text-[#707070] hover:border-primary hover:text-primary hover:border-b-4 transition-colors duration-300"
      }
    >
      <p className="text-base leading-6 text-left transition-colors duration-300">
        {children}
      </p>
    </NavLink>
  ) : (
    <p
      className={cn(
        "text-base leading-6 text-left transition-colors duration-300",
        className
      )}
    >
      {children}
    </p>
  );
};
