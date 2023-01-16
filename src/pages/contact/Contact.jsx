import React from "react";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import cover_img_1 from "../../assets/Categories/05.jpg";
import cover_img_2 from "../../assets/Categories/06.jpg";
import cover_img_3 from "../../assets/Categories/07.jpg";

const contact = () => {
  return (
    <div>
      {/* section 01 with the background image and form */}
      {/*//hidden until form is activated*/}
      <div className="hidden dark:bg-gray-900">
        <div className="container mx-0 py-0">
          <div className="relative mx-0 w-screen flex flex-nowrap flex-col items-center justify-center">
            <img
              src={cover_img_1}
              alt="A work table with house plants"
              className="w-full hidden lg:block h-auto"
            />
            <img
              src={cover_img_2}
              alt="A work table with house plants"
              className="w-full hidden sm:block lg:hidden h-auto"
            />
            <img
              src={cover_img_3}
              alt="A work table with house plants"
              className="w-full block sm:hidden lg:hidden h-auto"
            />
            {/* <div className="absolute top-0 sm:top-12 md:top-24 lg:top-32 left-0 w-full h-full flex justify-center items-start opacity-100 p-4 lg:p-8">
              <p className="font-semibold text-2xl leading-6 text-secondary text-center">
                Get in touch with us
              </p>
            </div> */}
            <div className="absolute mx-4 sm:mx-auto w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 mt-20 sm:mt-30 md:mt-28 lg:mt-36">
              <div className="w-full h-8 mb-4 px-2">
                <p className="font-semibold text-base sm:text-2xl leading-6 text-onSurface text-center">
                  Get in touch with us
                </p>
              </div>
              <div className="w-full bg-onSurface bg-opacity-80 px-4 sm:px-8 py-4 sm:py-10">
                <div className="text-input_txt text-sm sm:text-base bg-input_bg bg-opacity-20 w-full h-8 mb-4 px-2">
                  <p>Name</p>
                </div>
                <div className="text-input_txt text-sm sm:text-base bg-input_bg bg-opacity-20 w-full h-8 mb-4 px-2">
                  <p>Email</p>
                </div>
                <div className="text-input_txt text-sm sm:text-base bg-input_bg bg-opacity-20 w-full h-8 mb-4 px-2">
                  <p>Subject</p>
                </div>
                <div className="text-input_txt text-sm sm:text-base bg-input_bg bg-opacity-20 w-full h-28 mb-4 px-2">
                  <p>Message</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* section 02 with contact details */}
      <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px py-9 md:py-12 xl:py-16 text-onSurface mt-28 sm:mt-0">
        <section>
          <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase mt-20">
            Contact us
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            Need to get in touch with us? 
            {/* Either fill out the form with your
            inquiry or find the contact details you'd like to contact below. */}
          </p>
        </section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-10 text-onSurface">
          <div className="h-max p-8 flex flex-col justify-center items-center">
            <div className="bg-primary bg-opacity-80 h-20 w-20 mb-6 rounded-full flex justify-center items-center">
              <FaPhoneAlt className="text-2xl text-surface" />
            </div>
            <p className="font-semibold text-xl text-primary">Phone:</p>
            <p>+94 71 7662323</p>
          </div>
          {/* <div className="h-max p-8 flex flex-col justify-center items-center">
            <div className="bg-primary bg-opacity-80 h-20 w-20 mb-6 rounded-full flex justify-center items-center">
              <HiLocationMarker className="text-2xl text-surface" />
            </div>
            <p className="font-semibold text-xl text-primary">Address:</p>
            <p className="text-center">112/34/4, VIP Crescent, Bakmeegaha Road, Athurugiriya.</p>
          </div> */}
          <div className="h-max p-8 flex flex-col justify-center items-center">
            <div className="bg-primary bg-opacity-80 h-20 w-20 mb-6 rounded-full flex justify-center items-center">
              <MdEmail className="text-2xl text-surface" />
            </div>
            <p className="font-semibold text-xl text-primary">Email:</p>
            <p>glimpseofdesign@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
