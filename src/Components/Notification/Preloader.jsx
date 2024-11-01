import React from 'react';

const Preloader = () => {
  return (
    <div id="preloader" className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="spinner flex space-x-2">
        <div className="dot1 w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
        <div className="dot2 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
};

export default Preloader;
