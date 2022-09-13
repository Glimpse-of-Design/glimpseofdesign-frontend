// This page is hidden to all users except for the website owner. Owner can add projects using this view.

import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import glimpseofdesignAPI from "../../apis/glimpseofdesignAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import logo from "../../assets/footer-logo.png";

import { storage } from "../../apis/firebase/index";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Displaying Error Messages</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => {
          glimpseofdesignAPI
            .post("/user/auth/login", {
              email: values.email,
              password: values.password,
            })
            .then((res) => {
              console.log(res.data);

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/dashboard");
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className="h-full w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
              <img alt="Glimpse of Design" src={logo} className="h-20 mt-8" />
              <div className="bg-secondary bg-opacity-30 shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-12">
                <p className="text-secondary text-2xl font-extrabold leading-6 text-gray-800 mb-6">
                  Login to your account
                </p>
                <div>
                  <div className="md:flex items-center mt-12">
                    <div className="w-full flex flex-col">
                      <label className="text-secondary text-base font-semibold leading-none text-gray-800">
                        Email
                      </label>
                      <Field
                        type="text"
                        name="email"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      />
                      {touched.email && errors.email && (
                        <div className="text-error">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex items-center mt-12">
                    <div className="w-full flex flex-col">
                      <label className="text-secondary text-base font-semibold leading-none text-gray-800">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="text-gray-900 p-3 focus:oultine-none focus:border-main-700 bg-gray-100 border-gray-200 placeholder-gray-100bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      />
                      {touched.password && errors.password && (
                        <div className="text-error">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full mt-8">
                    <button
                      type="submit"
                      className="bg-primary bg-opacity-80 hover:bg-opacity-100 text-secondary text-sm font-semibold leading-none text-white focus:ring-2 focus:ring-offset-2 focus:ring-title_bg-700 focus:outline-none border-none rounded py-4 w-full"
                    >
                      Login to Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login2;
