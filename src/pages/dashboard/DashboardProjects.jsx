import {Menu, Transition} from '@headlessui/react';
import {collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from 'firebase/firestore';
import {Field, Form, Formik, useField} from 'formik';
import React, {Fragment, useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import img1 from '../../assets/project/01.jpeg';
import {db} from '../../config/firebase/firebase-config';

const projectsCollectionRef = collection(db, 'projects');
const PER_PAGE = 6;

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

const DashboardProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectId, setProjectId] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState({
        projectSummary: '',
        projectName: '',
        description: '',
        images: [{
            url: '../../assets/project/01.jpeg',
        }]
    });

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(projects.length / PER_PAGE);
    const handlePageClick = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
    };
    const deleteProject = async (id) => {
        const projectDoc = await doc(db, 'projects', id);

        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#dd3333',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                deleteDoc(projectDoc);
                getProjects().catch((err) => console.log(err));
            }
        })
    }
    const getProjects = async () => {
        const data = await getDocs(projectsCollectionRef);
        setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    const getProject = async (id) => {
        const projectDoc = doc(db, 'projects', id);
        const dSnap = await getDoc(projectDoc);
        if (dSnap.exists()) {
            const data = dSnap.data();
            setProject(data);
            setProjectId(dSnap.id);
        }
    }

    useEffect(() => {
        getProjects().catch((err) => console.log(err));
    }, []);

    return (
        <div className="sm:p-7 p-4">
            <table className="w-full text-left">
                <thead>
                <tr className="text-gray-400">
                    <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                        Project Name
                    </th>
                    <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 ">
                        Project Summery
                    </th>
                    <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200  hidden md:table-cell">
                        Description
                    </th>
                    <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200  hidden md:table-cell">
                        Images
                    </th>
                </tr>
                </thead>
                <tbody className="text-gray-600 ">
                {
                    projects.length !== 0 && projects
                        .slice(offset, offset + PER_PAGE)
                        .map(({projectName, projectSummary, description, id, images}) => (
                            <tr key={id}>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                    <div className="flex items-center">
                                        {projectName}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                                    <div className="flex items-center">
                                        {projectSummary}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                                    <div className="flex items-center">
                                        {description}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200">
                                    <div className="flex items-center">
                                        {images.map((image, id) => (
                                            <img key={id} src={image.url} className="w-20 h-10 object-cover" alt="" />
                                        ))}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 ">
                                    {showModal ? (
                                        <>
                                            <div
                                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                            >
                                                <div className="relative w-auto my-1 mx-auto max-w-3xl">
                                                    {/*content*/}
                                                    <div
                                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        {/*header*/}
                                                        <div
                                                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                            <h3 className="mx-4 text-3xl font-semibold text-center">
                                                                Update Project
                                                            </h3>
                                                            <AiOutlineClose
                                                                className="p-1 ml-auto border-0 text-black float-right text-3xl"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                            </AiOutlineClose>
                                                        </div>
                                                        {/*body*/}
                                                        <div>
                                                            <Formik
                                                                enableReinitialize={true}
                                                                initialValues={{
                                                                    projectName: project.projectName ? project.projectName : '',
                                                                    projectSummary: project.projectSummary ? project.projectSummary : '',
                                                                    description: project.description ? project.description : '',
                                                                    images: project.images ? project.images : []
                                                                }}
                                                                validationSchema={DisplayingErrorMessagesSchema}
                                                                onSubmit={(values) => {
                                                                    try {
                                                                        const updateProject = async () => {
                                                                            const projectDoc = doc(db, 'projects', projectId);
                                                                            await updateDoc(projectDoc, {
                                                                                projectName: values.projectName,
                                                                                projectSummary: values.projectSummary,
                                                                                description: values.description,
                                                                            })
                                                                        }
                                                                        updateProject().then();
                                                                        setShowModal(false);
                                                                        getProjects().then();
                                                                    } catch (e) {
                                                                        Swal.fire({
                                                                            icon: 'error',
                                                                            title: 'Oops...',
                                                                            text: 'Update Error!',
                                                                            footer: '<a href="">Why do I have this issue?</a>',
                                                                        }).then();
                                                                    }
                                                                }}
                                                            >
                                                                {({errors, touched}) => (
                                                                    <Form>
                                                                        <div className="flex items-center justify-center">
                                                                            <div
                                                                                className="bg-tertiary bg-opacity-30 shadow rounded px-4">
                                                                                <div>
                                                                                    <div className="md:flex items-center">
                                                                                        <div className="flex flex-col m-4">
                                                                                            <label className="mb-2">
                                                                                                Project Name
                                                                                            </label>
                                                                                            <Field
                                                                                                className="border border-gray-400 rounded p-1"
                                                                                                type="text"
                                                                                                name="projectName" />
                                                                                            {touched.projectName && errors.projectName &&
                                                                                                <div
                                                                                                    className="text-error">{errors.projectName}</div>}
                                                                                        </div>
                                                                                        <div className="flex flex-col m-4">
                                                                                            <label className="mb-2">
                                                                                                Project Summary
                                                                                            </label>
                                                                                            <Field
                                                                                                className="border border-gray-400 rounded p-1"
                                                                                                type="text"
                                                                                                name="projectSummary" />
                                                                                            {touched.projectSummary && errors.projectSummary &&
                                                                                                <div
                                                                                                    className="text-error">{errors.projectSummary}</div>}
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flex flex-col m-4">
                                                                                        <MyTextArea
                                                                                            label="Project Description"
                                                                                            name="description"
                                                                                            rows="2"
                                                                                            required={true}
                                                                                            className="border border-gray-400 rounded p-1 mt-2"
                                                                                            placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                                                                                        />
                                                                                    </div>

                                                                                    <div className="flex flex-col mx-4">
                                                                                        <label className="field-label">
                                                                                            Photos of Location
                                                                                        </label>
                                                                                        <div className="flex flex-col m-4">
                                                                                            {project ? project.images.map((image, id) => (
                                                                                                <div key={id}
                                                                                                     className="relative my-1 rounded bg-gray-100">
                                                                                                    <img className="w-20"
                                                                                                         src={image.url ? image.url : img1}
                                                                                                         alt={image.url} />
                                                                                                    <AiOutlineClose
                                                                                                        className={'absolute right-2 top-3.5'} />
                                                                                                </div>
                                                                                            )) : null}
                                                                                        </div>
                                                                                    </div>

                                                                                    <div
                                                                                        className="flex items-center justify-center w-full my-4">
                                                                                        <button
                                                                                            type="submit"
                                                                                            className="bg-primary text-white font-semibold leading-none text-onSurface py-3 px-10 bg-surface-700 rounded hover:bg-surface-600 focus:ring-2 focus:ring-offset-2 focus:ring-surface-700 focus:outline-none">
                                                                                            Update Project
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Form>
                                                                )}
                                                            </Formik>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                        </>
                                    ) : null}
                                    <div className="flex items-center">
                                        <div
                                            className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button
                                                        className="flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            className="w-5"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <circle cx={12} cy={12} r={1} />
                                                            <circle cx={19} cy={12} r={1} />
                                                            <circle cx={5} cy={12} r={1} />
                                                        </svg>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            <div
                                                                className={'block hover:bg-gray-100 px-4 py-2 text-sm text-gray-700'}
                                                                onClick={() => {
                                                                    setShowModal(true);
                                                                    getProject(id).then();
                                                                }}>
                                                                Edit
                                                            </div>
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            <div
                                                                className={'block px-4 hover:bg-gray-100 py-2 text-sm text-gray-700'}
                                                                onClick={() => {
                                                                    deleteProject(id).then()
                                                                }}
                                                            >
                                                                Delete
                                                            </div>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))

                }
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="my-4 flex flex-start content-center justify-center"
                pageClassName={''}
                pageLinkClassName="px-2 py-1 mx-2 border rounded-md border-orange"
                previousLinkClassName={
                    'px-2 py-1 mx-2 border rounded-md'
                }
                nextLinkClassName={
                    'px-2 py-1 mx-2 border rounded-md'
                }
                disabledClassName={''}
                disabledLinkClassName={
                    'px-2 py 1 mx-2 border rounded-md bg-orange-100 text-gray-600'
                }
                activeLinkClassName={'text-white bg-primary'}
            />
        </div>
    )
}

export default DashboardProjects;
