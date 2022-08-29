import React from "react";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import image1 from "../../assets/Categories/01.jpg";
import image2 from "../../assets/Categories/02.jpg";
import image3 from "../../assets/Categories/03.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px py-9 md:py-12 xl:py-16 text-secondary">
        <section>
          <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase">
            Projects
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            We deliver your desire. Trusted for many years.
          </p>
        </section>
        <section className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-8 md:mt-10 xl:mt-12 mb-6 mb-8">
          {/* <div className="w-full">
            <img
              alt=""
              src={image1}
            />
          </div> */}
          <div className="relative group">
            <img className="md:block w-full" src={image1} alt="Living Room" />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
              <p className="font-semibold text-2xl leading-6 text-secondary">
                KWA Living Room
              </p>
            </div>
            <div className="flex flex-col bottom-40 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="font-light text-xl leading-6 text-secondary">
                This is not a true content. A text used to describe the picture.
              </p>
            </div>
          </div>
          <div className="relative group">
            <img className="md:block w-full" src={image2} alt="Living Room" />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
              <p className="font-semibold text-2xl leading-6 text-secondary">
                JK Appartments - Peliyagoda
              </p>
            </div>
            <div className="flex flex-col bottom-40 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="font-light text-xl leading-6 text-secondary">
                This is not a true content. A text used to describe the picture.
              </p>
            </div>
          </div>
          <div className="relative group">
            <img className="md:block w-full" src={image3} alt="Living Room" />
            <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
              <p className="font-semibold text-2xl leading-6 text-secondary">
                Dialog Axiata Office Interior
              </p>
            </div>
            <div className="flex flex-col bottom-40 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="font-light text-xl leading-6 text-secondary">
                This is not a true content. A text used to describe the picture.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <button className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
            <Link to="projects" className="flex flex-row flex-nowrap items-center">
              Explore <BsArrowRight className="ml-2" />
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
}
