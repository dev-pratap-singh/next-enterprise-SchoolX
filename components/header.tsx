'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="relative">
      {/* Yellowish-Gold "Shadow" behind the navbar */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-yellow-400 w-full h-full rounded-full py-4 px-6 mx-4" style={{ filter: 'blur(8px)' }}></div>
      </div>

      {/* Actual Navbar with white background */}
      <div className="relative z-10 flex justify-between items-center py-4 px-6 bg-white border-t-8 border-orange-400 rounded-full shadow-lg mx-4">
        
        {/* Logo Section */}
        <div className="logo flex items-center">
          <Image src="/Group 1.png" alt="logo" width={100} height={100} />
        </div>

        {/* Navigation Section */}
        <nav className="flex-grow ml-10">
          <ul className="flex space-x-6 justify-end">
            <li className="nav-item">
              <Link href="/home" className="text-lg font-bold text-black hover:text-orange-400">HOME</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="text-lg font-bold text-black hover:text-orange-400">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link href="/programs" className="text-lg font-bold text-black hover:text-orange-400">PROGRAMS</Link>
            </li>
            <li className="nav-item">
              <Link href="/curriculum" className="text-lg font-bold text-black hover:text-orange-400">CURRICULUM</Link>
            </li>
            <li className="nav-item">
              <Link href="/admission" className="text-lg font-bold text-black hover:text-orange-400">ADMISSION</Link>
            </li>
            <li className="nav-item">
              <Link href="/franchise" className="text-lg font-bold text-black hover:text-orange-400">FRANCHISE</Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="text-lg font-bold text-black hover:text-orange-400">BLOGS</Link>
            </li>

            {/* Profile Section */}
            <li className="nav-item flex items-center">
              <div
                className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-4 border-blue-500 shadow-lg transition-transform transform hover:scale-105" // Added border color and shadow effect
                onClick={toggleModal}
              >
                <Image 
                  src="/angry.jpg" 
                  alt="Profile" 
                  width={48} 
                  height={48} 
                  className="object-cover w-full h-full" 
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal Popup for Sign-Up/Sign-In */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Sign In / Sign Up</h2>
            {/* Your sign-in/sign-up form goes here */}
            <button onClick={toggleModal} className="bg-orange-400 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
