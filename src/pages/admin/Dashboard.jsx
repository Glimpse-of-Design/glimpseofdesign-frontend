import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import Logo from "../../assets/footer-logo.png";
import {BiGridAlt} from "@react-icons/all-files/bi/BiGridAlt";
import {BiAddToQueue} from "@react-icons/all-files/bi/BiAddToQueue";
import {BiLogOut} from "@react-icons/all-files/bi/BiLogOut";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {BiSliderAlt} from "@react-icons/all-files/bi/BiSliderAlt";
import image1 from "../../assets/Project/01.jpg";
import image2 from "../../assets/Project/02.jpg";
import image3 from "../../assets/Project/03.jpg";
import image4 from "../../assets/Project/04.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Index() {
  return (
    <div className="flex flex-nowrap bg-secondary h-screen">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="bg-main text-input_txt w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <div className="h-16 w-full flex items-center">
            {/* Brand name */}
            <Link to="/">
              <img
                className="w-full min-w-full sm:mt-12"
                src={Logo}
                alt="Glimpse of Design"
              />
            </Link>
          </div>
          <ul className="mt-12">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <BiGridAlt className="text-lg" />
                <span className="text-sm  ml-2">All projects</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <Link to="/admin/data-entry">
                <div className="flex items-center">
                  <BiAddToQueue className="text-lg" />
                  <span className="text-sm  ml-2">Add new project</span>
                </div>
              </Link>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <Link to="/admin/admin-login">
                <div className="flex items-center">
                  <BiLogOut className="text-lg" />
                  <span className="text-sm  ml-2">Logout</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center mt-48 mb-4 w-full">
            {/* Search bar */}
            <div className="relative ">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <BiSearch className="text-lg" />
              </div>
              <input
                className="bg-input_bg bg-opacity-30 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="px-8 border-t border-gray-700">
          <ul className="w-full flex items-center justify-between bg-gray-800">
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="text-input_txt w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div
          className="bg-title_bg h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onclick="sidebarHandler()"
        >
          <BiSliderAlt className="text-lg" />
        </div>
        <div className="px-8 bg-main text-input_txt">
          <div className="h-16 w-full flex items-center">
            {/* Brand name */}
            <Link to="/">
              <img
                className="w-full min-w-full mt-12"
                src={Logo}
                alt="Glimpse of Design"
              />
            </Link>
          </div>
          <ul className="mt-12">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <BiGridAlt className="text-lg" />
                <span className="text-sm  ml-2">All projects</span>
              </div>
              {/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                5
              </div> */}
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <BiAddToQueue className="text-lg" />
                <span className="text-sm  ml-2">Add new project</span>
              </div>
              <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                8
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <BiLogOut className="text-lg" />
                <span className="text-sm  ml-2">Logout</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                <span className="text-sm  ml-2">Settings</span>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-48 mb-4 w-full">
            <div className="relative ">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className=" bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="px-8 border-t border-gray-700">
          <ul className="w-full flex items-center justify-between bg-gray-800">
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </li>
            <li className="cursor-pointer text-white pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-archive"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar ends */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <div className="w-full h-full rounded scroll-smooth scroll-m-4">
          <div className="container mx-auto grid grid-cols-1 pt-6 gap-8">
            <div className="rounded bg-input_bg h-min w-full">
              <div className="2xl:container 2xl:mx-auto md:py-0 lg:px-20 md:px-6 py-9 px-4">
                <div id="viewerBox" className="lg:p-4 md:p-2 p-2 bg-white">
                  <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                    <Carousel responsive={responsive}>
                      <div>
                        <img alt="img1" src={image1} />
                      </div>
                      <div>
                        <img alt="img2" src={image2} />
                      </div>
                      <div>
                        <img alt="img3" src={image3} />
                      </div>
                      <div>
                        <img alt="img4" src={image4} />
                      </div>
                    </Carousel>

                    <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Bar Stool
                      </h1>
                      <p className="text-base leading-normal text-gray-600 mt-2">
                        You don't just want to be comfortable sitting in a bar
                        stool—you want to be comfortable shimmying it up to the
                        bar, closer to your lover, or back slightly to include a
                        third person in the conversation.
                      </p>
                      <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Edit
                        </button>
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded bg-input_bg h-min w-full">
              <div className="2xl:container 2xl:mx-auto md:py-0 lg:px-20 md:px-6 py-9 px-4">
                <div id="viewerBox" className="lg:p-4 md:p-2 p-2 bg-white">
                  <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                    <Carousel responsive={responsive}>
                      <div>
                        <img alt="img1" src={image1} />
                      </div>
                      <div>
                        <img alt="img2" src={image2} />
                      </div>
                      <div>
                        <img alt="img3" src={image3} />
                      </div>
                      <div>
                        <img alt="img4" src={image4} />
                      </div>
                    </Carousel>

                    <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Bar Stool
                      </h1>
                      <p className="text-base leading-normal text-gray-600 mt-2">
                        You don't just want to be comfortable sitting in a bar
                        stool—you want to be comfortable shimmying it up to the
                        bar, closer to your lover, or back slightly to include a
                        third person in the conversation.
                      </p>
                      <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Edit
                        </button>
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded bg-input_bg h-min w-full">
              <div className="2xl:container 2xl:mx-auto md:py-0 lg:px-20 md:px-6 py-9 px-4">
                <div id="viewerBox" className="lg:p-4 md:p-2 p-2 bg-white">
                  <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                  <Carousel responsive={responsive}>
                      <div>
                        <img alt="img1" src={image1} />
                      </div>
                      <div>
                        <img alt="img2" src={image2} />
                      </div>
                      <div>
                        <img alt="img3" src={image3} />
                      </div>
                      <div>
                        <img alt="img4" src={image4} />
                      </div>
                    </Carousel>

                    <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Bar Stool
                      </h1>
                      <p className="text-base leading-normal text-gray-600 mt-2">
                        You don't just want to be comfortable sitting in a bar
                        stool—you want to be comfortable shimmying it up to the
                        bar, closer to your lover, or back slightly to include a
                        third person in the conversation.
                      </p>
                      <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Edit
                        </button>
                        <button className="w-full md:w-2/4 border border-gray text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
