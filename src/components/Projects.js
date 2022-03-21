import EngageProject from "./projects/EngageProject";
import FocusProject from "./projects/FocusProject";

const Projects = () => {
  return (
    <div className="mt-20 md:mt-60">
      <span className="text-4xl font-semibold">My Projects</span>
      <hr className=" w-80 border-2 rounded mt-2 mb-8 border-lime-700" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <FocusProject />
        <EngageProject />
        <FocusProject />
      </div>
    </div>
  );
};

export default Projects;
