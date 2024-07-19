import React from "react";
import segz from "../assets/segz.png";

const Showcase = () => {
  return (
    <main className="show grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mt-20 ">
      <div className=" flex flex-col text-darkBlue items-center justify-center">
        <h1 className="text-4xl font-bold">Frontend Developer</h1>
        <p className="max-w-full mt-10  font-semibold">
          I craft exceptional web applications that prioritize accessibility,
          responsiveness, and user experience. I'm passionate about creating
          intuitive, inclusive, and delightful digital solutions that users love
          and remember.
        </p>

        <div className="flex flex-col mt-10 justify-center items-center">
          <h1 className="text-4xl font-bold">TechStack</h1>
          <div className="text-black max-w-full mx-0 space-x-6 space-y-6">
            <button className=" bg-colorButton rounded font-bold  p-3">
              HTML
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              CSS
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              JavaScript
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              Bootstrap
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              Tailwind
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              Git & Github
            </button>
            <button className=" bg-colorButton rounded font-bold  p-3">
              React
            </button>
          </div>
        </div>
      </div>

      <div className="flex mdmx-3 p-5 max-w-full h-full justify-center items-center">
        <img src={segz} alt="" />
      </div>
    </main>
  );
};

export default Showcase;
