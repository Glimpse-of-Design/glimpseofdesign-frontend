import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/footer-logo.png";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { BsArrowUp } from "@react-icons/all-files/bs/BsArrowUp";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../apis/firebase/firebase-config";

const Footer = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex lg:justify-center lg:items-center flex-col px-12 lg:bg-surface pt-9 md:pt-12 xl:pt-20 pb-4 text-onSurface border-t border-onSurface mt-16">
      {/* 4 x 4 grid to store footer items*/}
      <div className="grid grid-cols-1 lg:grid-cols-4 pb-12">
        {/* row 1 */}
        <div className="flex flex-col flex-shrink-0 min-h-full">
          <div>
            <p className="font-bold text-2xl">Glimpse of Design</p>
            <p className="font-light text-base">Interior Design Studio</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <section className="flex my-4 float-right lg:float-left">
            <div className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="flex flex-row flex-nowrap items-center"
              >
                {" "}
                Go to Top <BsArrowUp className="ml-2" />
              </button>
            </div>
          </section>
        </div>

        {/* row 2 */}
        <div>
          <Link to="#">
            <img className="h-16" src={Logo} alt="Glimpse of Design" />
          </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>

        {/* row 3 */}
        <div>
          <p className="hidden lg:block text-sm leading-none text-gray-800 mt-6">
            Copyright © 2022 Glimpse of Design
          </p>
        </div>
        <div className="mt-4 shrink grow w-full sm:ml-0 lg:mt-0 h-8">
          <h2 className="text-base font-semibold text-gray-800 uppercase">
            Contact Us
          </h2>
        </div>
        <div></div>
        <div></div>

        {/* row 4 */}
        <div className="flex flex-nowrap flex-col content-start items-start gap-x-4">
          <p className="hidden lg:block text-sm leading-none text-gray-800 mt-4">
            All rights reserved
          </p>
          <div className="flex flex-row gap-x-4 mb-4 lg:mt-4">
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <a
                href="https://www.facebook.com/glimpseofdesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-onSurface hover:text-primary text-lg" />
              </a>
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Link to="#">
                <FaWhatsapp className="text-onSurface hover:text-primary text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-r-0 pl-2 h-12 mb-12 sm:mb-8 md:mb-4 lg:0">
          <p>Address:</p>
          <p>112/4/34, VIP Crescent, Bakmeegaha Road, Athurugiriya.</p>
        </div>
        <div className="border-l-2 border-r-0 pl-2 h-12 mb-8 md:mb-4 lg:0">
          <p>Telephone:</p>
          <p>+94 71 766 2323</p>
        </div>
        <div className="border-l-2 border-r-0 pl-2 h-12 mb-8 md:mb-4 lg:0">
          <p>Email:</p>
          <p>glimpseofdesign@gmail.com </p>
        </div>
      </div>

      <section className="w-full flex justify-end my-4 float-right cursor-pointer">
        <span className="flex flex-row flex-nowrap items-center">
          {" "}
          {user ? (
            <span onClick={logout}>
              {" "}
              {user.email} <br />
              <BiUserCircle className="ml-2 text-2xl" /> Log Out
            </span>
          ) : (
            <span onClick={() => navigate("login")}>
              <BiUserCircle className="ml-2 text-2xl" />
            </span>
          )}
        </span>
      </section>

      <section>
        <div className="block lg:hidden">
          <p className="text-sm leading-none text-gray-800">
            Copyright © 2022 Glimpse of Design
          </p>
          <p className="text-sm leading-none text-gray-800 mb-4">
            All rights reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
