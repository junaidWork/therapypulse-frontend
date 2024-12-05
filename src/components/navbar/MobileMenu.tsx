import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex lg:hidden px-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};
