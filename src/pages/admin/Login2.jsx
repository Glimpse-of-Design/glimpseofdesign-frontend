// This page is hidden to all users except for the website owner. Owner can add projects using this view.

import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import glimpseofdesignAPI from "../../apis/glimpseofdesignAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import { storage } from "../../apis/firebase/index";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ppassword: Yup.string()
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
            .post("/user", {
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
          <Form className="h-full w-full">
            <div className="w-full flex items-center justify-center">
              <div className="my-24 bg-secondary bg-opacity-30 shadow rounded py-12 lg:px-28 px-8">
                <p className="text-secondary md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                  Login
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
                        type="text"
                        name="password"
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      />
                      {touched.password && errors.password && (
                        <div className="text-error">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <button
                      type="submit"
                      className="bg-primary text-secondary mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-main-700 rounded hover:bg-main-600 focus:ring-2 focus:ring-offset-2 focus:ring-main-700 focus:outline-none"
                    >
                      Login
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
