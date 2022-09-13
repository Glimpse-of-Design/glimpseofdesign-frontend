// This page is hidden to all users except for the website owner. Owner can add projects using this view.

import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import glimpseofdesignAPI from "../../apis/glimpseofdesignAPI";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

import {storage} from "../../apis/firebase/index";


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
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        images.map((image) => {
            const uploadTask = ref(storage, `locationImages/${"img" + v4()}`);
            uploadBytes(uploadTask, image)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setUrls((prev) => [...prev, url]);
                    });
                })
                .catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="">Why do I have this issue?</a>',
                    });
                });
            return null;
        });
    }

    return (
        <div>
            <h1>Displaying Error Messages</h1>
            <Formik
                initialValues={{
                    projectName: '',
                    projectSummary: '',
                    description: '',
                    projectImages: []
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    const obj = urls.map((url) => ({url}));
                    console.log(obj);

                    glimpseofdesignAPI.post("/project", {
                        projectName: values.projectName,
                        projectSummary: values.projectSummary,
                        description: values.description,
                        projectImages: obj
                    }).then(res => {
                        console.log(res.data);

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/projects");
                    });
                }}
            >
                {({errors, touched}) => (
                    <Form className="h-full w-full">
                        <div className="w-full flex items-center justify-center">
                            <div className="my-24 bg-secondary bg-opacity-30 shadow rounded py-12 lg:px-28 px-8">
                                <p className="text-secondary mb-8 md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                                    Showcase your team's work!
                                </p>
                                <div>
                                    <div className="md:flex items-center mt-8">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="field-label">
                                                Project Name
                                            </label>
                                            <Field type="text" name="projectName"
                                                   className="field-input"/>
                                            {touched.projectName && errors.projectName &&
                                                <div className="text-error">{errors.projectName}</div>}
                                        </div>
                                    </div>

                                    <div className="md:flex items-center mt-4">
                                        <div className="w-full flex flex-col">
                                            <label
                                                className="field-label">
                                                Project Summary
                                            </label>
                                            <Field type="text" name="projectSummary"
                                                   className="field-input"/>
                                            {touched.projectSummary && errors.projectSummary &&
                                                <div className="text-error">{errors.projectSummary}</div>}
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-col mt-4">
                                        <label
                                            className="field-label">
                                            Project Description
                                        </label>
                                        <Field
                                            type="textarea"
                                            name="description"
                                            aria-label="Please input project description"
                                            className="h-36 field-input resize-none"
                                            placeholder="Minimum 50 words"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col mt-4">
                                        <label className="field-label">
                                            {/*block text-sm font-medium text-gray-700*/}
                                            Photos of Location
                                        </label>
                                        <div
                                            className="mt-4 flex justify-center rounded-md bg-secondary bg-opacity-80 border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-1 text-center">
                                                {!urls && (
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="inputGroupFile04"
                                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        {urls && <span>Upload a file</span>}
                                                        <input
                                                            id="inputGroupFile04"
                                                            type="file"
                                                            multiple
                                                            aria-describedby="inputGroupFileAddon04"
                                                            className="sr-only"
                                                            onChange={handleChange}
                                                            aria-label="Upload"
                                                            onClick={handleUpload}
                                                        />
                                                        <div>
                                                            {urls.map((url, i) => (
                                                                <img
                                                                    key={i}
                                                                    style={{
                                                                        width: "100px",
                                                                        height: "100px",
                                                                        display: "inline",
                                                                    }}
                                                                    src={url || "http://via.placeholder.com/300"}
                                                                    alt={url}
                                                                />
                                                            ))}
                                                        </div>
                                                    </label>
                                                    {urls.length === 0 && (
                                                        <p className="pl-1">or drag and drop</p>
                                                    )}
                                                </div>
                                                {urls.length === 0 && (
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-full">
                                        <button
                                            type="submit"
                                            className="bg-primary bg-opacity-80 hover:bg-opacity-100 text-secondary mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-main-700 rounded hover:bg-main-600 focus:ring-2 focus:ring-offset-2 focus:ring-main-700 focus:outline-none">
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

