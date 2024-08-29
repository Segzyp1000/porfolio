import React from "react";
import Project0 from "../assets/project11.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.jpg";
import Projec from "../assets/timbo-shop.png";
import Project4 from "../assets/project4.png";
import Barb from "../assets/Barb-show.png";

const ProjectPage = () => {
  return (
    <div className="bg-white text-4xl  text-black mt-2 p-4">
      <div className="mt-20 flex flex-col justify-center items-center text-center ">
        <h1 className="font-bold">Projects</h1>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://seg-barb-show-8myq.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Barb} alt="" className="w-[323px" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p className="text-black">
              I conceptualized and developed a cutting-edge shoe e-commerce
              platform, featuring a robust search functionality, advanced
              filtering capabilities, secure user authentication and
              registration processes powered by Firebase and Firestore,
              efficient state management, and a visually stunning design
              language leveraging React and Tailwind CSS, while also
              incorporating essential administrative tools and an informative
              'About Us' page to foster a seamless and engaging user experience.
            </p>
            <div className="flex gap-2">
              <a
                href="https://seg-barb-show-8myq.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/barb-show"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://segun-olowoyeye-lendsqr-fe-test.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project4} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p className="text-black">
              "Built a replica of the Lendsqr dashboard website using React and
              TypeScript, with styling achieved through SCSS. Additionally,
              implemented pagination functionality utilizing React Router Dom,
              enhancing the user experience through seamless navigation."
            </p>
            <div className="flex gap-2">
              <a
                href="https://segun-olowoyeye-lendsqr-fe-test.vercel.app/"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/lendsqr-fe-test"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://timbo-shop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Projec} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p className="text-black">
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
                href="https://github.com/Segzyp1000/timbo-shop"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center  text-sm space-x-2">
          <a
            href="https://dariola-banana-bread.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project0} alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p className="text-black">
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
        <div className="separator"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://trans-flows.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project3} alt="" />
          </a>
          <div className="flex flex-col justify-center items-center w-1/2 mt-5">
            <p className="text-black">
              Developed a transport logistics website replica with Tailwind,
              HTML, CSS, and JavaScript, demonstrating my skills in building
              responsive, dynamic, and modern web applications
            </p>
            <div className="flex gap-2">
              <a
                href="https://trans-flows.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bgBackground rounded p-2 mt-3 hover:bg-zinc-500"
              >
                Preview
              </a>
              <a
                href="https://github.com/Segzyp1000/transFlows"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bgBackground text-white rounded p-2 mt-3 hover:bg-gray-500"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="mt-10 flex flex-wrap justify-center items-center text-white text-sm space-x-2">
          <a
            href="https://segzyp1000.github.io/hngtask2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project2} className="imgg" alt="" />
          </a>
          <div className="flex flex-col items-center w-1/2 mt-5">
            <p className="text-black">
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
