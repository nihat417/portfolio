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
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <CgCPlusPlus size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandCSharp size={50}/>
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandPython size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbHtml  size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbFileTypeCss size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandJavascript size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <DiNodejs size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandReact size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbSql size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandGit size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <SiFirebase size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandBootstrap size={50} />
      </div>
      <div className="w-1/4 md:w-1/6 p-4 flex justify-center tech-icons whitetext">
        <TbBrandTailwind size={50} />
      </div>
    </div>
  );
};

export default Techstack;
