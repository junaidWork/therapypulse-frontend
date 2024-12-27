import React, { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "",
  subtitle = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg min-w-[500px] p-6 py-8 relative">
        <div className="flex flex-col justify-between items-center mb-8">
          <h2 className="text-lg font-bold">{title}</h2>
          <h2 className="text-secondary">{subtitle}</h2>
        </div>
        <div className="w-full">{children}</div>
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
