import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="text-white font-medium w-3/4">
          Interested in learning more about my projects and how we can
          collaborate? Please share your details in the form, and I'll be in
          touch shortly to discuss how my skills and expertise can support your
          goals
        </p>
        <div className="flex flex-col mt-10">
          <h1 className="text-2xl font-bold text-white">Social Links</h1>
          <div className="flex space-x-5 justify-center">
            <Link
              to="https://github.com/Segzyp1000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mt-4"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/segun-olowoyeye-04909b76/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mt-4"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <form action="https://formspree.io/f/mjvnkeqy" method="post">
          <div className="space-y-12 p-4 mx-12 mt-10 rounded">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    for="first-name"
                    className="block text-sm font-bold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      className="block w-full rounded-md text-black border-0 py-1.5 bg-white  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/ sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    for="last-name"
                    className="block text-sm font-bold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      className="block w-full bg-white rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    for="email"
                    className="block text-sm font-bold leading-6 text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      className="block w-full rounded-md bg-white border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    for="about"
                    className="block text-sm font-bold leading-6 text-white"
                  >
                    Tell us about your project
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="block w-full  bg-white rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <button className="block max-w-full bg-blue-700 rounded-md border-0 p-1.5 text-white font-bold hover:bg-zinc-500">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
