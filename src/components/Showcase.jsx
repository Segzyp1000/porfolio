import React from "react";
import segz from "../assets/segz.png";

const Showcase = () => {
  return (
    <main className="show grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mt-20 ml-0 md:ml-10 ">
      <div className=" flex flex-col text-darkBlue">
        <h1 className="text-4xl font-bold">Frontend Developer</h1>
        <p className="max-w-full mt-10  font-semibold">
          I craft exceptional web applications that prioritize accessibility,
          responsiveness, and user experience. I'm passionate about creating
          intuitive, inclusive, and delightful digital solutions that users love
          and remember.
        </p>

        <div className="flex flex-col mt-10 ">
          <h1 className="text-4xl font-bold">TechStack</h1>
          <div className="text-white mx-0 space-x-6 space-y-6 mt-6">
            <div className="flex">
              <li className="font-bold  p-2">HTML</li>
              <li className="font-bold  p-2">CSS</li>
              <li className="font-bold  p-2">Bootstrap</li>
              <li className="font-bold  p-2">Tailwind</li>
            </div>
            <div className="separator2"></div>
            <div className="mt-4 flex">
              <li className="font-bold  p-2">JavaScript</li>
              <li className="font-bold  p-2">React</li>
              <li className="font-bold  p-2">Git</li>
              <li className="font-bold  p-2">Github</li>
            </div>
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
