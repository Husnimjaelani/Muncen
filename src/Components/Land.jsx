import React, { useState } from 'react';
import LoginComponent from './LoginComponents';
import RegisterPage from './RegisterComponents';
import { Link } from 'react-router-dom';

const Land = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignOpen, setSignOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);
  const openSignModal = () => setSignOpen(true);
  const closeSignModal = () => setSignOpen(false);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-16 p-14 sm:p-10 sm:mt-27 md:mt-14 md:p-20 gap-6 sm:gap-8">
        <header className="flex flex-col items-center mb-10">
          <img
            className="mb-5 w-32 sm:w-44 md:w-52" // Logo size responsive
            src="/assets/01.png" // Replace with your logo path
            alt="Logo Music Organizer"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-center">Music Organizer</h1>
          <p className="mt-3 text-lg sm:text-xl">Your ultimate hub for metal music!</p>
        </header>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Join Us Now</h2>
          <p className="mb-6 text-center text-sm sm:text-base">
            Sign up to organize and explore your favorite metal tracks and events.
          </p>

          {/* Sign Up Button */}
          <Link
            className="px-6 py-2 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-300 transition duration-300 mb-4"
            onClick={openSignModal}
            href="#"
          >
            Sign Up
          </Link>

          {/* Log In Button */}
          <Link
            className="px-8 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-full hover:from-blue-600 hover:to-red-600 transition duration-300"
            onClick={openLoginModal} // Open login modal on click
            href="#"
          >
            Log In
          </Link>
          <LoginComponent isOpen={isLoginOpen} onClose={closeLoginModal} />
          <RegisterPage isOpen={isSignOpen} onClose={closeSignModal} />

          <Link 
            to="/home" 
            className="text-lg pt-8 sm:pt-12 font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-2 rounded-full shadow-lg"
          >
            Enter as a Guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Land;
