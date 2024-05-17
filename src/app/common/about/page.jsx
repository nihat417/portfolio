import React from 'react';
import Techstack from '@/app/components/about/techstack';
import Github from '@/app/components/about/github';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <section className="w-full px-5">
        <h1 className="text-center max-w-[800px] mx-auto whitetext">About Me</h1>
        <h4 className="text-center max-w-[800px] mx-auto whitetext">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </h4>
      </section>
      <section className="flex flex-col items-center mt-[100px] w-full">
        <h1 className="text-center text-3xl font-bold mb-5">
        Professional <span className="text-blue-800">Skillset</span>
      </h1>
        <Techstack />
      </section>
      <section className="flex flex-col items-center mt-[100px] w-full">
        <h1>Github Activity</h1>
        <Github />
      </section>
    </div>
  );
};

export default About;
