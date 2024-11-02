import React from 'react'

const Land = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-20 mt-20 gap-8">
      <header className="flex flex-col items-center mb-10">
        <img
          className="mb-5"
          src="/assets/01.png" // Ganti dengan path logo Anda
          alt="Logo Music Organizer"
          width={180}
          height={180}
        />
        <h1 className="text-5xl font-bold text-center">Music Organizer</h1>
        <p className="mt-3 text-lg">Your ultimate hub for metal music!</p>
      </header>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Now</h2>
        <p className="mb-6 text-center">Sign up to organize and explore your favorite metal tracks and events.</p>
        <a
          className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-300 transition duration-300"
          href="/signup" // Ganti dengan path halaman signup Anda
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Land