import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white p-4'>
        <div className="flex justify-between items-center">
            <p className="text-left">Designed and Developed by Nihat Akremi</p>
            <p className="text-center">Copyright © 2024 NA</p>
            <div className="flex space-x-4">
            <a href="https://github.com/nihat417" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors duration-300">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nihat-akremi-683318260/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors duration-300">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nihat417" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors duration-300">
                <FaInstagram />
            </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer