const FocusProject = (props) => {
  return (
    <div class=" bg-slate-900 max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src={projectImg} alt="Sunset in the mountains" /> */}
      <div className="px-6 py-4">
        <div class=" text-slate-100 font-bold text-xl mb-2">
          iN2L Tablet Product UX Overhaul
        </div>
        <p className=" text-slate-300 text-base">
          Read about how we were able to re-launch our individual engagement
          solution to connect families with their loved ones across the country
          in the midst of a global pandemic.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span class="inline-block border-lime-500 border-2 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2">
          UI / UX Design
        </span>
        <span className="inline-block border-lime-500 border-2 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2">
          User Research
        </span>
        <span className="inline-block border-lime-500 border-2 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2">
          Product Design
        </span>
      </div>
    </div>
  );
};

export default FocusProject;
