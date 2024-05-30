import React from 'react';

const Card = ({ image, description, githubLink, demoLink,about }) => {
  return (
    <div className=" max-w-sm w-full sm:w-72 mx-auto bg-black rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt="Card Image" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25"></div>
      </div>
      <div className="p-6">
        <p className="text-white text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            <button className="bg-primary text-white px-4 py-2 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              GitHub
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            <button className="bg-primary text-white px-4 py-2 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
              About
            </button>
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              <button className="bg-primary text-white px-4 py-2 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
