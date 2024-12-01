import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import '../style/LoginPage.css'; // Import custom CSS for animation

const RegisterPage = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    
    if (!isOpen) return null; // Return nothing if the modal is not open

    return (
        // Backdrop overlay
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-xl animate-modal">
                {/* Left Side - Logo */}
                <div className="w-full md:w-1/2 p-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 rounded-t-lg md:rounded-l-lg">
                    <img
                        src="./assets/01.png"
                        alt="Logo"
                        className="object-cover w-3/4"  // Adjust the size of the logo
                    />
                </div>

                {/* Right Side - Form Register */}
                <div className="w-full md:w-1/2 p-12">
                    <div className="text-center text-3xl text-white mb-8">
                        <p>Register</p>
                    </div>
                    <form>
                        <div className="mb-6">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="username"
                                type="text"
                                placeholder="Masukkan Username Anda"
                                required
                                autoComplete="username"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                type="email"
                                placeholder="Masukkan Email Anda"
                                required
                                autoComplete="email"
                            />
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                required
                                autoComplete="new-password"
                            />
                            <button 
                                type="button" 
                                className="absolute inset-y-0 right-4 flex text-black items-center"
                                style={{ top: '50%', transform: 'translateY(-15%)' }} 
                                onClick={togglePasswordVisibility}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                id="confirm-password"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="********"
                                required
                            />
                            <button 
                                type="button" 
                                className="absolute inset-y-0 right-4 flex items-center text-black"
                                style={{ top: '50%', transform: 'translateY(-15%)' }} 
                                onClick={toggleConfirmPasswordVisibility}
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>

                        <div className="mt-6 text-sm text-center">
                            <label className="inline-flex items-center text-gray-700">
                                <span className="ml-2">Sudah punya akun? <Link to="/login" className="text-blue-500">Login</Link></span>
                            </label>
                        </div>
                    </form>
                    {/* Close Modal Button */}
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-white hover:text-gray-800"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
