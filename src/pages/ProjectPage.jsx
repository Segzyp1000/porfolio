import React from "react";
import Project0 from "../assets/project11.png";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Projec from "../assets/timbo-shop.png";

const ProjectPage = () => {
  return (
    <div>
      <div className="h1 text-4xl font-bold flex flex-col justify-center items-center text-darkBlue mt-20 p-4">
        Projects
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://timbo-shop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Projec} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p>
              Developed a fully responsive e-commerce website, ensuring seamless
              user experiences across various devices and screen sizes. Utilized
              state management techniques to efficiently manage the React
              application, and leveraged Tailwind CSS to implement a consistent
              and modern design language. By combining these technologies, I
              created a fast, scalable, and user-friendly online shopping
              platform
            </p>
            <div className="flex gap-2">
              <a
                href="https://timbo-shop.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/timbo-shop/tree/main/src"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://dariola-banana-bread.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project0} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p>
              Designed and developed a responsive banana bread ordering website,
              implementing Context API for efficient state management and
              ensuring a smooth user interface
            </p>
            <div className="flex gap-2">
              <a
                href="https://dariola-banana-bread.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/dariolaBananaBread"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://logisticstransport.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3} alt="" />
          </a>
          <div className="flex flex-col justify-center items-center w-1/2 mt-5">
            <p>
              Developed a transport logistics website replica with Tailwind,
              HTML, CSS, and JavaScript, demonstrating my skills in building
              responsive, dynamic, and modern web applications
            </p>
            <div className="flex gap-2">
              <a
                href="https://logisticstransport.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/logisticstra/tree/main/build"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://segzyp1000.github.io/loansite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project1} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p>
              Built a loan website replica using React, JavaScript, HTML, CSS,
              and Bootstrap, demonstrating my skills in creating responsive and
              dynamic web applications
            </p>
            <div className="flex gap-2">
              <a
                href="https://segzyp1000.github.io/loansite"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                href="https://segzyp1000.github.io/loansite"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://segzyp1000.github.io/hngtask2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project2} className="imgg" alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p>
              Created a data-driven movie website using React, JavaScript, HTML,
              and CSS, demonstrating my skills in building responsive and
              dynamic web applications with a focus on data visualization.
            </p>
            <div className="flex gap-2">
              <a
                href="https://segzyp1000.github.io/hngtask2/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/hngtask2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
