import Icon from "./Icon";

import Html from "../components/Icons/Html";
import Css from "../components/Icons/Css";
import Javascript from "../components/Icons/Javascript";
import Tailwind from "../components/Icons/Tailwind";
import Bootstrap from "../components/Icons/Bootstrap";
import Sass from "../components/Icons/Sass";
import ReactJs from "../components/Icons/ReactJs";
import NodeJs from "../components/Icons/NodeJs";
import Figma from "../components/Icons/Figma";
import Photoshop from "../components/Icons/Photoshop";
import Illustrator from "../components/Icons/Illustrator";
import AdobeXd from "../components/Icons/AdobeXd";

const Skills = () => {
  return (
    <section
      className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
      id="skills"
      //   ref={skillsRef}
    >
      <h2 className="text-5xl">Skills</h2>
      <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

      {/* Skills icons */}
      <div className="flex flex-wrap w-full pr-4 mt-8">
        {/* HTML */}
        <Icon
          IconType={Html}
          title="HTML"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* CSS */}
        <Icon
          IconType={Css}
          title="CSS"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Sass */}
        <Icon
          IconType={Sass}
          title="Sass"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Bootstrap */}
        <Icon
          IconType={Bootstrap}
          title="Bootstrap"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Tailwind */}
        <Icon
          IconType={Tailwind}
          title="Tailwind"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Javascript */}
        <Icon
          IconType={Javascript}
          title="Javascript"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* React */}
        <Icon
          IconType={ReactJs}
          title="React"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Node */}
        <Icon
          IconType={NodeJs}
          title="Node"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Photoshop */}
        <Icon
          IconType={Photoshop}
          title="Photoshop"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Illustrator */}
        <Icon
          IconType={Illustrator}
          title="Illustrator"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Adobe XD */}
        <Icon
          IconType={AdobeXd}
          title="Adobe XD"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />

        {/* Figma */}
        <Icon
          IconType={Figma}
          title="Figma"
          columnSizing={"w-1/4 sm:w-1/3 lg:w-1/6"}
          width={"w-16 sm:w-24"}
          height={"h-16 sm:h-24"}
          padding={"p-0"}
          flexDirection={"flex-col"}
          titleMargins={"mt-4"}
          titleSize={"text-sm sm:text-base"}
          marginBottom={"mb-4"}
          marginRight={"mr-0"}
          textTransform={"normal-case"}
          fixedHeight={"h-28"}
        />
      </div>
    </section>
  );
};

export default Skills;
