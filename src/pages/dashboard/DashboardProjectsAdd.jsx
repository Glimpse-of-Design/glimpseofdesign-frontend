import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {Field, Form, Formik, useField} from 'formik';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {v4} from 'uuid';
import * as Yup from 'yup';
import {db, storage} from '../../config/firebase/firebase-config';

const projectsCollectionRef = collection(db, 'projects');

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

const MyTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const DashboardProjectsAdd = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const handleChange = (e) => {
        const preview = document.querySelector('#preview');
        const files = e.target.files;

        function readAndPreview(file) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                const image = new Image();
                image.height = 100;
                image.width = 100;
                image.style.display = 'inline';
                image.title = file.name;
                image.src = String(reader.result);
                preview.appendChild(image);
            }, false);
            reader.readAsDataURL(file);
        }

        if (files) {
            Array.prototype.forEach.call(files, readAndPreview);
        }

        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage['id'] = Math.random();
            setImages((prevState) => [...prevState, newImage])
        }
    };
    const handleUpload = () => {
        images.map((image) => {
            const uploadTask = ref(storage, `images/${'img' + v4()}`);
            uploadBytes(uploadTask, image)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setUrls((prev) => [...prev, url]);
                    });
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>',
                    }).then();
                });
            return null;
        });
    }

    return (
        <div>
            <Formik
                initialValues={{
                    projectName: '',
                    projectSummary: '',
                    description: '',
                    images: []
                }}
                enableReinitialize={true}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    const obj = urls.map((url) => ({url}));

                    try {
                        const createProject = async () => {
                            await addDoc(projectsCollectionRef, {
                                projectName: values.projectName,
                                projectSummary: values.projectSummary,
                                description: values.description,
                                images: obj
                            });
                        }
                        createProject().catch((err) => console.log(err));
                        navigate('/dashboard/projects');
                    } catch (e) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">Why do I have this issue?</a>',
                        }).then();
                    }
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="flex items-center justify-center m-2">
                            <div className="bg-tertiary bg-opacity-30 shadow rounded p-4">
                                <div>
                                    <h1 className="text-center text-2xl mb-2 font-bold">Add Project</h1>
                                    <div className="md:flex items-center">
                                        <div className="flex flex-col m-4">
                                            <label className="mb-2">
                                                Project Name
                                            </label>
                                            <Field className="border border-gray-400 rounded p-1" type="text"
                                                   name="projectName" />
                                            {touched.projectName && errors.projectName &&
                                                <div className="text-error">{errors.projectName}</div>}
                                        </div>
                                        <div className="flex flex-col m-4">
                                            <label className="mb-2">
                                                Project Summary
                                            </label>
                                            <Field className="border border-gray-400 rounded p-1" type="text"
                                                   name="projectSummary" />
                                            {touched.projectSummary && errors.projectSummary &&
                                                <div className="text-error">{errors.projectSummary}</div>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col m-4">
                                        <MyTextArea
                                            label="Project Description"
                                            name="description"
                                            rows="3"
                                            required={true}
                                            className="border border-gray-400 rounded p-1 mt-2"
                                            placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                                        />
                                    </div>

                                    <div className="flex flex-col m-4">
                                        <label className="field-label">
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
                                                <div className="text-gray-600">
                                                    <label
                                                        htmlFor="inputGroupFile04"
                                                        className="relative cursor-pointer rounded-md bg-onSurface font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        {urls && <span>Select Images</span>}
                                                        <input
                                                            id="inputGroupFile04"
                                                            type="file"
                                                            required={true}
                                                            multiple
                                                            aria-describedby="inputGroupFileAddon04"
                                                            className="sr-only"
                                                            onChange={handleChange}
                                                            aria-label="Upload"
                                                        />
                                                        <div id="preview">

                                                        </div>
                                                    </label>
                                                </div>
                                                {urls.length === 0 && (
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                )}
                                                {images.length !== 0 && (
                                                    <button type="button"
                                                            className="px-3 py-1 text-xs text-white bg-primary rounded"
                                                            onClick={handleUpload}>
                                                        Upload
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center w-full">
                                        {urls.length !== 0 && (
                                            <button
                                                type="submit"
                                                className="bg-primary mt-3 text-white font-semibold leading-none text-onSurface py-3 px-10 bg-surface-700 rounded hover:bg-surface-600 focus:ring-2 focus:ring-offset-2 focus:ring-surface-700 focus:outline-none">
                                                SUBMIT
                                            </button>
                                        )}
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


export default DashboardProjectsAdd;
