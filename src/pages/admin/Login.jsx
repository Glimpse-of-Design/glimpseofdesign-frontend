import React, { useState } from "react";
import { BsEye } from "@react-icons/all-files/bs/BsEye";
import logo from "../../assets/footer-logo.png";
import { useEffect } from "react";
import glimpseofdesignAPI from "../../apis/glimpseofdesignAPI";

function Login() {
  useEffect(() => {}, []);

  const [sidebar, setsidebar] = useState();

  return (
    <div className="h-full w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img alt="Glimpse of Design" src={logo} className="h-20 mt-16" />
        <div className="bg-secondary bg-opacity-30 shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-12">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-secondary text-2xl font-extrabold leading-6 text-gray-800 mb-6"
          >
            Login to your account
          </p>
          <div>
            <lable className="text-sm font-medium leading-none text-gray-800 text-secondary">
              Email
            </lable>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-sm font-medium leading-none text-gray-800 text-secondary">
              Password
            </lable>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <BsEye />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="login to Account"
              className="bg-primary bg-opacity-80 hover:bg-opacity-100 text-secondary text-sm font-semibold leading-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-title_bg-700 focus:outline-none border-none rounded py-4 w-full"
            >
              Login to Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
