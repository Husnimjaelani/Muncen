import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="theme-breadcrumb-area py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-full">
            <div className="breadcrumb-inner">
              <ul className="flex space-x-4">
                <li className="hover:text-blue-500 cursor-pointer">Home</li>
                <li className="hover:text-blue-500 cursor-pointer">About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
