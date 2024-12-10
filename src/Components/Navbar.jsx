import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OffCanvas from './Notification/OffCanvas';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen); // Toggle offcanvas
    console.log("Offcanvas", !isOpen);
  };

  const handleClose = () => {
    setIsOpen(false); // Close offcanvas
  };

  return (
    <>
      <header id="theme-header-one" className="bg-black shadow-md border-b border-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="w-1/7">
              <Link to="/home" className="flex items-center">
                <img src="/assets/01.png" alt="Logo" className="h-12" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex w-3/5 mt-3">
              <ul className="flex space-x-6 mt-2 gap-2 font-bold mb-6">
                <li><Link to="/home" className="text-white hover:text-blue-500 no-underline">Home</Link></li>
                <li className="relative group">
                  <button className="text-white w-full hover:text-blue-500">Features</button>
                  <ul className="absolute left-0 w-40 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <li>
                      <Link to="/blog-category" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">Category Page</Link>
                    </li>
                    <div className="border-t border-gray-200"></div>
                    <li className="relative group">
                      <button className="block w-full px-4 py-2 text-left text-black hover:text-blue-500 no-underline">Blog Page</button>
                      <ul className="absolute left-full top-0 hidden mt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                        <li><Link to="/blog" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">Blog List</Link></li>
                        <li><Link to="/blog-grid" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">Blog Grid</Link></li>
                      </ul>
                    </li>
                    <div className="border-t border-gray-200"></div>
                    <li><Link to="/post-single" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">Blog Single</Link></li>
                    <div className="border-t border-gray-200"></div>
                    <li><Link to="/about" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">About Page</Link></li>
                    <div className="border-t border-gray-200"></div>
                    <li><Link to="/Contact" className="block px-4 py-2 text-black hover:text-blue-500 no-underline">Contact Us</Link></li>
                  </ul>
                </li>
                <li><Link to="/fashion" className="text-white hover:text-blue-500 no-underline">Fashion</Link></li>
                <li><Link to="/lifestyle" className="text-white hover:text-blue-500 no-underline">Lifestyle</Link></li>
                <li><Link to="/travel" className="text-white hover:text-blue-500 no-underline">Travel</Link></li>
                <li><Link to="/contact" className="text-white hover:text-red-500 no-underline">Contact</Link></li>
              </ul>
            </nav>

            {/* Header Right */}
            <div className="flex items-center space-x-4 w-1/5 justify-end">
              {/* Search Icon */}
              <div className="relative flex items-center">
                <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
                  <i className="icofont-search-1 text-xl"></i>
                </button>
                <div className="absolute right-0 hidden mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <form className="flex items-center">
                    <input
                      type="text"
                      className="w-full px-2 py-1 border rounded-md focus:outline-none"
                      placeholder="Type keywords here..."
                    />
                    <button type="submit" className="ml-2 text-blue-500">
                      <i className="icofont-search-1"></i>
                    </button>
                  </form>
                </div>
              </div>
              {/* Subscribe Button */}
              <Link to="/subscribe" className="px-4 py-2 text-white border bg-gradient-to-r from-blue-500 to-red-500 rounded-full hover:from-blue-600 hover:to-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Subscribe
              </Link>
              {/* Hamburger Menu */}
              <button onClick={toggleOffCanvas} className="text-gray-600 hover:text-blue-500">
                <i className="ri-menu-fill text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OffCanvas for Mobile Menu */}
      <OffCanvas isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Navbar;
