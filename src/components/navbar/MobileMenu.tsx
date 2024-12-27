import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden mx-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
      ) : (
        <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenu;
