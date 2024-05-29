import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiNodejs,
} from 'react-icons/di';
import {
  SiFirebase,
} from 'react-icons/si';
import { TbBrandCSharp,TbBrandPython,TbSql,TbHtml,TbFileTypeCss ,TbBrandBootstrap ,TbBrandTailwind ,TbBrandReact ,TbBrandJavascript  ,TbBrandGit  } from 'react-icons/tb';

const Techstack = () => {
  return (
    <div className="flex flex-wrap justify-center pb-12">
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <CgCPlusPlus size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandCSharp size={50}/>
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandPython size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbHtml  size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbFileTypeCss size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandJavascript size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <DiNodejs size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandReact size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbSql size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandGit size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <SiFirebase size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandBootstrap size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext backdrop-blur-lg">
        <TbBrandTailwind size={50} />
      </div>
    </div>
  );
};

export default Techstack;
