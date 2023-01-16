import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const UserRoutes = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/12 bg-column_bg_1"></div>
        <div className="w-10/12 px-4 ({location.pathname} == '/')? {bg-surface} : (bg-column_bg_2)">
          <Outlet />
          <Footer />
        </div>
        {/* if ({location.pathname} == '/')
        {
          <div className="w-10/12 px-4 bg-surface">
            <Outlet />
            <Footer />
          </div>
        }
        else
        {
          <div className="w-10/12 px-4 bg-column_bg_2">
            <Outlet />
            <Footer />
          </div>
        } */}
        <div className="w-1/12 bg-column_bg_1"></div>
      </div>
    </div>
  );
};

export default UserRoutes;
