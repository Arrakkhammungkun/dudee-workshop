import React from "react";
import { ModalProps } from "./type";

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleClose = () => {
    if (onClose) onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 w-full max-w-lg shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
export default Modal;
