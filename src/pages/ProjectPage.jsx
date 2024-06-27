import React from "react";
import Project0 from "../assets/project11.png";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";

const ProjectPage = () => {
  return (
    <div>
      <div className="h1 text-4xl font-bold flex flex-col justify-center items-center text-darkBlue mt-20 p-4">
        Projects
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://segzyp1000.github.io/loansite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project0} alt="" />
          </a>
          <p className="flex flex-col items-center w-1/2 mt-5">
            Designed and developed a responsive banana bread ordering website,
            implementing Context API for efficient state management and ensuring
            a smooth user interface
            <a
              href="https://dariola-banana-bread.vercel.app/"
              className="bg-white text-black rounded p-1 mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
            <a
              href="https://segzyp1000.github.io/loansite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Project1} alt="" />
            </a>
            <p className="flex flex-col items-center w-1/2 mt-5">
              Built a loan website replica using React, JavaScript, HTML, CSS,
              and Bootstrap, demonstrating my skills in creating responsive and
              dynamic web applications
              <a
                href="https://segzyp1000.github.io/loansite"
                className="bg-white text-black rounded p-1 mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
            <a
              href="https://segzyp1000.github.io/hngtask2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Project2} className="imgg" alt="" />
            </a>
            <p className="flex flex-col items-center w-1/2 mt-5">
              Created a data-driven movie website using React, JavaScript, HTML,
              and CSS, demonstrating my skills in building responsive and
              dynamic web applications with a focus on data visualization.
              <a
                href="https://segzyp1000.github.io/hngtask2/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded p-1 mt-3"
              >
                Click here
              </a>
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
            <a
              href="https://logisticstransport.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Project3} alt="" />
            </a>
            <p className="flex flex-col justify-center items-center w-1/2 mt-5">
              Developed a transport logistics website replica with Tailwind,
              HTML, CSS, and JavaScript, demonstrating my skills in building
              responsive, dynamic, and modern web applications
              <a
                href="https://logisticstransport.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded p-1 mt-3"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
