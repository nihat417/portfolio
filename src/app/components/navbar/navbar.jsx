"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) 
        setIsScrolled(true);
      else 
        setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full border-gray-200 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap">Niko Portfolio</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-search"
          aria-expanded={isOpen}
          onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li className="relative group">
              <Link href="/" className="block py-2 pl-3 pr-4 text-blue-700 bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page" style={{ fontSize: '1.25rem', transition: 'font-size 0.3s' }}>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Home</span>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0" style={{ fontSize: '1.25rem', transition: 'font-size 0.3s' }}>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">About</span>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0" style={{ fontSize: '1.25rem', transition: 'font-size 0.3s' }}>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Projects</span>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href="/common/resume" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0" style={{ fontSize: '1.25rem', transition: 'font-size 0.3s' }}>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Resume</span>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
