import React from 'react';

const BodyOverlay = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40" // Menggunakan Tailwind CSS untuk overlay
          onClick={onClose} // Menangani klik untuk menutup overlay
        ></div>
      )}
    </>
  );
};

export default BodyOverlay;
