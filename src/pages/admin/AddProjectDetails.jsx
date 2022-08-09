// This page is hidden to all users except for the website owner. Owner can add projects using this view.

import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import glimpseofdesignAPI from "../../apis/glimpseofdesignAPI";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DisplayingErrorMessagesSchema = Yup.object().shape({
    projectName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    projectSummary: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const AddProject = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Displaying Error Messages</h1>
            <Formik
                initialValues={{
                    projectName: '',
                    projectSummary: '',
                    description: ''
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    // same shape as initial values

                    glimpseofdesignAPI.post("/project", {
                        projectName: values.projectName,
                        projectSummary: values.projectSummary,
                        description: values.description
                    }).then(res => {
                        console.log(res.data);

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/dashboard");
                    });
                }}
            >
                {({errors, touched}) => (
                    <Form className="h-full w-full">
                        <div className="w-full flex items-center justify-center">
                            <div className="my-24 bg-secondary bg-opacity-30 shadow rounded py-12 lg:px-28 px-8">
                                <p className="text-secondary md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                                    Showcase your team's work!
                                </p>
                                <div>
                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="text-secondary text-base font-semibold leading-none text-gray-800">
                                                Project Name
                                            </label>
                                            <Field type="text" name="projectName"
                                                   className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                                            {touched.projectName && errors.projectName &&
                                                <div className="text-error">{errors.projectName}</div>}
                                        </div>
                                    </div>

                                    <div className="md:flex items-center mt-12">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="text-secondary text-base font-semibold leading-none text-gray-800">
                                                Project Summary
                                            </label>
                                            <Field type="text" name="projectSummary"
                                                   className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                                            {touched.projectSummary && errors.projectSummary &&
                                                <div className="text-error">{errors.projectSummary}</div>}
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-col mt-8">
                                        <label
                                            className="text-secondary text-base font-semibold leading-none text-gray-800">
                                            Project Description
                                        </label>
                                        <textarea
                                            name="description"
                                            aria-label="Please input project description"
                                            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                                            placeholder="Minimum 50 words"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center w-full">
                                        <button
                                            type="submit"
                                            className="bg-primary text-secondary mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-main-700 rounded hover:bg-main-600 focus:ring-2 focus:ring-offset-2 focus:ring-main-700 focus:outline-none">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )

};


export default AddProject;

// import React from "react";

//
// function MyApp() {
//     return (
//         <div className="h-full w-full">
//             <div className="w-full flex items-center justify-center">
//                 <div className="my-24 bg-secondary bg-opacity-30 shadow rounded py-12 lg:px-28 px-8">
//                     <p className="text-secondary md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
//                         Showcase your team's work!
//                     </p>
//                     <div className="md:flex items-center mt-12">
//                         <div className="w-full flex flex-col">
//                             <label className="text-secondary text-base font-semibold leading-none text-gray-800">
//                                 Project Name
//                             </label>
//                             <input
//                                 tabIndex={0}
//                                 type="name"
//                                 className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
//                                 placeholder="Please input  name"
//                             />
//                         </div>
//                     </div>
//                     <div className="md:flex items-center mt-8">
//                         <div className="w-full flex flex-col">
//                             <label className="text-secondary text-base font-semibold leading-none text-gray-800">
//                                 Project Summary
//                             </label>
//                             <input
//                                 tabIndex={0}
//                                 type="name"
//                                 className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
//                                 placeholder="Please input summary (Max 25 words)"
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="w-full flex flex-col mt-8">
//                             <label className="text-secondary text-base font-semibold leading-none text-gray-800">
//                                 Project Description
//                             </label>
//                             <textarea
//                                 tabIndex={0}
//                                 aria-label="Please input project description"
//                                 className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-main-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
//                                 placeholder="Minimum 50 words"
//                                 defaultValue={""}
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="w-full flex flex-col mt-8">
//                             <label className="text-secondary text-base font-semibold leading-none text-gray-800">
//                                 Images
//                             </label>
//                             {/* image upload division */}
//                             <div className="grid grid-cols-4 my-8">
//                                 {/* image1 */}
//                                 <div
//                                     className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative ml-12 shadow flex items-center justify-center">
//                                     <img
//                                         src={Upload_img}
//                                         alt
//                                         className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
//                                     />
//                                     <div
//                                         className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"/>
//                                     <div
//                                         className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-edit"
//                                             width={20}
//                                             height={20}
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path stroke="none" d="M0 0h24v24H0z"/>
//                                             <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
//                                             <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
//                                             <line x1={16} y1={5} x2={19} y2={8}/>
//                                         </svg>
//                                         <p className="text-xs text-gray-100">Edit Picture</p>
//                                     </div>
//                                 </div>
//                                 {/* image2 */}
//                                 <div
//                                     className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative ml-12 shadow flex items-center justify-center">
//                                     <img
//                                         src={Upload_img}
//                                         alt
//                                         className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
//                                     />
//                                     <div
//                                         className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"/>
//                                     <div
//                                         className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-edit"
//                                             width={20}
//                                             height={20}
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path stroke="none" d="M0 0h24v24H0z"/>
//                                             <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
//                                             <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
//                                             <line x1={16} y1={5} x2={19} y2={8}/>
//                                         </svg>
//                   <p className="text-xs text-gray-100">Edit Picture</p>
//                 </div>
//               </div>
//               {/* image3 */}
//                                 <div
//                                     className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative ml-12 shadow flex items-center justify-center">
//                                     <img
//                                         src={Upload_img}
//                                         alt
//                                         className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
//                                     />
//                                     <div
//                                         className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"/>
//                                     <div
//                                         className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-edit"
//                                             width={20}
//                                             height={20}
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path stroke="none" d="M0 0h24v24H0z"/>
//                                             <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
//                                             <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
//                                             <line x1={16} y1={5} x2={19} y2={8}/>
//                                         </svg>
//                                         <p className="text-xs text-gray-100">Edit Picture</p>
//                                     </div>
//                                 </div>
//                                 {/* image4 */}
//                                 <div
//                                     className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative ml-12 shadow flex items-center justify-center">
//                                     <img
//                                         src={Upload_img}
//                                         alt
//                                         className="absolute z-0 h-full w-full object-cover rounded-full shadow"
//                                     />
//                                     <div className="absolute bg-black opacity-50 rounded-full z-0"/>
//                                     <div
//                                         className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="icon icon-tabler icon-tabler-edit"
//                                             width={20}
//                                             height={20}
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             fill="none"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path stroke="none" d="M0 0h24v24H0z"/>
//                                             <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
//                                             <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
//                                             <line x1={16} y1={5} x2={19} y2={8}/>
//                                         </svg>
//                                         <p className="text-xs text-gray-100">Edit Picture</p>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </div>
//                     </div>
//
//                     <div className="flex items-center justify-center w-full">
//                         <button
//                             className="bg-primary text-secondary mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-main-700 rounded hover:bg-main-600 focus:ring-2 focus:ring-offset-2 focus:ring-main-700 focus:outline-none">
//                             SUBMIT
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

//
// export default MyApp;