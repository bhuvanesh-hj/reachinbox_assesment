import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#848484] bg-opacity-60 flex justify-center items-center">
      <div className="bg-gradient-to-l from-[#141517] to-[#232528] rounded-md shadow-md relative">
        <div >{children}</div>
      </div>
    </div>
  );
};

export { Modal };