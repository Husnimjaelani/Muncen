import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OffCanvas from './Offcanvas';

const Navbar = ({ toggleOffcanvas: toggleOffcanvasProp }) => {
    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

    const handleToggleOffcanvas = () => {
        setOffcanvasOpen(!isOffcanvasOpen);
        toggleOffcanvasProp(); // Call the prop function if needed
    };

    // Example for handling search toggle, adjust as necessary
    const [isSearchOpen, setSearchOpen] = useState(false);
    const handleSearchToggle = () => {
        setSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <header id="theme-header-one" className="theme-header-main header-style-one">
                <div className="theme-header-area">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="w-1/4">
                                <div className="logo theme-logo">
                                    <Link to="/">
                                        <img src="assets/media/logo.svg" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <nav className="nav-main-wrap">
                                    <ul className="theme-navigation-wrap theme-main-menu flex space-x-4">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="relative group">
                                            <Link to="#">Features</Link>
                                            <ul className="dropdown sub-menu absolute left-0 hidden group-hover:block bg-white shadow-lg">
                                                <li><Link to="/blog-category">Category Page</Link></li>
                                                <li className="relative group">
                                                    <Link to="/blog">Blog Page</Link>
                                                    <ul className="dropdown sub-menu absolute left-full top-0 hidden group-hover:block bg-white shadow-lg">
                                                        <li><Link to="/blog">Blog List</Link></li>
                                                        <li><Link to="/blog-grid">Blog Grid</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/post-single">Blog Single</Link></li>
                                                <li><Link to="/about">About Page</Link></li>
                                                <li><Link to="/contact">Contact Us</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/fashion">Fashion</Link></li>
                                        <li><Link to="/lifestyle">Lifestyle</Link></li>
                                        <li><Link to="/travel">Travel</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="w-1/4 flex items-center justify-end space-x-4">
                                <div className="relative">
                                    <div
                                        className="search-icon theme-search-custom-iconn cursor-pointer"
                                        onClick={handleSearchToggle}
                                    >
                                        <i className="icofont-search-1"></i>
                                    </div>
                                    {isSearchOpen && (
                                        <div className="absolute right-0 theme-serach-box_inner_wrapper bg-white shadow-lg">
                                            <form role="search" method="get" id="searchform" className="search-form" action="#">
                                                <input
                                                    type="text"
                                                    className="search-input border p-2"
                                                    name="s"
                                                    placeholder="Type keywords here....."
                                                />
                                                <button type="submit" className="search-button submit-btn">
                                                    <i className="icofont-search-1"></i>
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                                <div className="header-subscribe">
                                    <Link to="/subscribe" className="subscribe-btn">Subscribe</Link>
                                </div>
                                <div className="header-burger-menu">
                                    <div className="burger-nav-bar">
                                        <button className="tp-header__bars tp-menu-bar" onClick={handleToggleOffcanvas}>
                                            <i className="ri-menu-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffCanvas isOpen={isOffcanvasOpen} toggleOffcanvas={handleToggleOffcanvas} />
        </>
    );
};

export default Navbar;
