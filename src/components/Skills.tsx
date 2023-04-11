import React from "react";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
} from "react-icons/tb";

interface SkillsProps {
  setSkillsHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const Skills: React.FC<SkillsProps> = ({ setSkillsHover }) => {
  return (
    <div
      id="skills"
      onMouseEnter={() => setSkillsHover(true)}
      onMouseLeave={() => setSkillsHover(false)}
      className="absolute z-20 w-full mt-10 p-10 text-[rgb(30,30,30)] select-none"
    >
      <h1 className="text-6xl font-light text-center uppercase tracking-wider">Skills</h1>
      <div className="container mx-auto flex flex-wrap gap-5 justify-between text-3xl mt-10 px-10 font-bold">
        <div className="flex flex-col gap-3 items-center">
          <TbBrandHtml5 className="text-6xl " />
          <span>HTML</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TbBrandCss3 className="text-6xl " />
          <span>CSS</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TbBrandJavascript className="text-6xl " />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TbBrandTypescript className="text-6xl " />
          <span>Typescript</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TbBrandReact className="text-6xl " />
          <span>React</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
