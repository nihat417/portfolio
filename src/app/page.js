"use client";
import Typer from "./components/typeWriter/typer";
import Lottie from 'react-lottie';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import codingAnimationData from '../assets/animations/mycodinganimation.json';
import mycoderanimation from '../assets/animations/mycoderanimation.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: codingAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: mycoderanimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24">
      <section className="flex flex-col md:flex-row justify-around items-center h-[90vh]">
        <div className="text-center md:text-left md:mb-0">
          <h1 className="text-6xl md:text-7xl lg:text-9xl whitetext">Hi There!</h1>
          <p className="text-3xl md:text-4xl lg:text-6xl whitetext">
            I'M <span className="blacktext">Nihat.</span>
          </p>
          <h1 className="text-xl md:text-2xl lg:text-4xl whitetext">
            <Typer />
          </h1>
        </div>
        <div className="flex justify-center items-center md:mt-0">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mt-20">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl md:text-6xl whitetext">
            About <span className="blacktext">Me</span>
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-4 whitetext">
            I've ventured into the world of coding with hands-on experience in languages like C++, Python, C#, JavaScript, and Dart. While my journey has touched various languages, I've honed my skills specializing in C#. My expertise extends to frameworks and technologies such as ASP.NET, Node.js, MS SQL, React, Next.js, React Native, and Flutter.
          </p>
          <p className="text-md md:text-lg lg:text-xl mb-4 whitetext">
            My passion lies in crafting robust APIs and delving into the realm of mobile development, where I strive to innovate and create seamless user experiences.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Lottie options={defaultOptions2} height={300} width={300} />
        </div>
      </section>

      <section className="flex flex-col items-center mt-20">
        <h1 className="text-4xl md:text-6xl whitetext mb-4">FIND ME ON</h1>
        <h4 className="text-lg md:text-xl whitetext mb-8">Feel free to connect with me</h4>
        <div className="flex space-x-6">
          <a href="https://github.com/nihat417" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl text-gray-300 hover:text-black transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nihat-akremi-683318260/" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl text-blue-700 hover:text-blue-900 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/nihat417" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl text-pink-500 hover:text-pink-700 transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>
      </section>
    </main>
  );
}
