import React from 'react';
import { Link } from 'react-router-dom';

const OffCanvas = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 flex ${isOpen ? '' : 'hidden'}`}>
      {/* Background gelap */}
      <div className="bg-black bg-opacity-50 flex-1" onClick={onClose}></div>
      
      {/* OffCanvas yang muncul dari kanan */}
      <div
        className={`bg-black text-white w-96 h-full fixed top-0 right-0 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-close text-2xl"></i>
            </button>
          </div>
          
          {/* Logo Centered */}
          <div className="flex justify-center items-center px-4 py-8">
            <Link to="/" onClick={onClose}>
              <img src="/assets/01.png" alt="Logo" className="h-15" />
            </Link>
          </div>

          {/* Content */}
          <div className="px-4 flex-1 overflow-y-auto">
            <div className="main-canvas-inner">
              <div className="canvas-bar-post-list">
                {Array(4).fill().map((_, index) => (
                  <article key={index} className="mb-4">
                    <div className="flex">
                      <div className="w-1/3">
                        <Link to="post-single.html" onClick={onClose}>
                          <img
                            src={`assets/media/image-${index + 1}.jpg`}
                            alt={`Post ${index + 1}`}
                            className="w-full rounded-lg"
                          />
                        </Link>
                      </div>
                      <div className="w-2/3 pl-4">
                        <h2 className="text-lg font-bold">
                          <Link
                            to="post-single.html"
                            className="hover:text-gray-400"
                            onClick={onClose}
                          >
                            Rachel Maddow Will Go Mondays Only On MSNBC
                          </Link>
                        </h2>
                        <p className="text-gray-300 text-sm">Sep 30 - Cristiano</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 py-4">
            <Link to="#" className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-facebook text-xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-twitter text-xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-instagram text-xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-linkedin text-xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-400" onClick={onClose}>
              <i className="icofont-youtube text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
