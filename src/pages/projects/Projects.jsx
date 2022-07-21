import React from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { Link } from "react-router-dom";
import cover_img from "../../assets/Categories/02.jpg";
import image1 from "../../assets/Categories/01.jpg";
import image2 from "../../assets/Categories/02.jpg";
import image3 from "../../assets/Categories/03.jpg";
import image4 from "../../assets/Categories/04.jpg";

export default function Index() {
  return (
    <div>
      <div className="dark:bg-gray-900">
        <div className="container mx-0 py-0">
          <div className="relative mx-0 w-screen">
            <img
              src={cover_img}
              alt="A work table with house plants"
              className="w-full h-full hidden lg:block"
            />
            <img
              src={cover_img}
              alt="A work table with house plants"
              className="hidden sm:block lg:hidden w-full h-full"
            />
            <img
              src={cover_img}
              alt="A work table with house plants"
              className="sm:hidden w-full h-full"
            />

            <div className="absolute z-10 top-8 sm:top-20 lg:top-32 left-0 mx-0 sm:mx-0 mt-20 sm:mt-12 sm:py-4 py-4 px-4 md:py-8 lg:py-8 xl:py-8 sm:pl-14 flex flex-col sm:justify-start items-start bg-title_bg  opacity-75 text-secondary">
              <h1 className="text-base sm:text-base lg:text-3xl font-semibold text-gray-800 sm:w-9/12 uppercase underline underline-offset-4">
                Portfolio
              </h1>
              <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-9/12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-9 md:py-12 xl:py-16">
        <section>
          <h1 className="leading-5 md:leading-6 xl:leading-9 text-secondary-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase text-secondary">
            Projects
          </h1>
          <p className="text-secondary-600 text-base text-center mt-4 text-secondary">
            We deliver your desire. Trusted for many years.
          </p>
        </section>
        <div className=" 2xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
            <div>
              <div className="flex items-center border-b border-third pb-2 border-solid">
                <BsSearch className="mx-2 text-secondary" />
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm bg-main text-gray-600 focus:outline-none"
                />
              </div>
              <div className="text-secondary font-light pt-4">
                <span>All | </span>
                <span>Living | </span>
                <span>Apartments | </span>
                <span>Office Interior | </span>
                <span>Parks</span>
              </div>
            </div>
            <div></div>
            <div></div>
            <div className="relative group">
              <img className="md:block w-full" src={image1} alt="Living Room" />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
                <p className="font-semibold text-2xl leading-6 text-secondary">
                  KWA Living Room
                </p>
              </div>
              <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="font-light text-xl leading-6 text-secondary">
                  This is not a true content. A text used to describe the
                  picture.
                </p>
              </div>
            </div>
            <div className="relative group">
              <img className="md:block w-full" src={image2} alt="Apartments" />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
                <p className="font-semibold text-2xl leading-6 text-secondary">
                  JK Appartments - Peliyagoda
                </p>
              </div>
              <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="font-light text-xl leading-6 text-secondary">
                  This is not a true content. A text used to describe the
                  picture.
                </p>
              </div>
            </div>
            <div className="relative group">
              <img className="md:block w-full" src={image3} alt="Office" />
              <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
              <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
                <p className="font-semibold text-2xl leading-6 text-secondary">
                  Dialog Axiata Office Interior
                </p>
              </div>
              <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="font-light text-xl leading-6 text-secondary">
                  This is not a true content. A text used to describe the
                  picture.
                </p>
              </div>
            </div>
            <div className="relative group">
              <Link to="projectView">
                <img className="md:block w-full" src={image4} alt="Parks" />
                <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-main group-hover:bg-opacity-50">
                  <p className="font-semibold text-2xl leading-6 text-secondary">
                    Bellanwila Park
                  </p>
                </div>
                <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="font-light text-xl leading-6 text-secondary">
                    This is not a true content. A text used to describe the
                    picture.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
