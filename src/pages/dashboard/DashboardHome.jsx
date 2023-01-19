import {Menu, Transition} from '@headlessui/react';
import {signOut} from 'firebase/auth';
import {collection, getDocs} from 'firebase/firestore';
import {Fragment, useEffect, useState} from 'react';
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import navLogo from '../../assets/nav-logo.png';
import {auth, db} from '../../config/firebase/firebase-config';

const projectsCollectionRef = collection(db, 'projects');

const DashboardHome = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const getProjects = async () => {
        const data = await getDocs(projectsCollectionRef);
        setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    const logout = async () => {
        await signOut(auth);
        navigate('/');
    };

    useEffect(() => {
        getProjects().catch((err) => console.log(err));
    }, []);

    return (
        <div className="text-gray-600 h-screen flex overflow-hidden text-sm">
            <div className="bg-white w-50 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
                <div className="h-16 text-blue-500 flex items-center justify-center">
                    <Link to="/">
                        <img className="hidden h-20 mt-4 w-auto lg:block" src={navLogo} alt="Glimpse of Design" />
                    </Link>
                </div>
                <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
                    <aside className="w-64" aria-label="Sidebar">
                        <div className="px-3 py-4 overflow-y-auto rounded">
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="/dashboard/projects"
                                             className="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-orange-100 hover:text-gray-400">
                                        <svg aria-hidden="true"
                                             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                            <path
                                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                                        <span
                                            className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">{projects.length}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add"
                                             className="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-orange-100">
                                        <svg aria-hidden="true"
                                             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                            <path
                                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add Projects</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="flex-grow overflow-hidden h-full flex flex-col">
                <div className="flex-grow flex overflow-x-hidden">
                    <div className="flex-grow bg-white overflow-y-auto">
                        <div
                            className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white  sticky top-0">
                            <div className="flex w-full items-center">
                                <div className="flex items-center text-3xl text-gray-900 ">
                                    Dashboard
                                </div>
                                <div className="ml-auto sm:flex hidden items-center justify-end">

                                    <div
                                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button
                                                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:rounded focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-10 w-10 rounded"
                                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                                        alt=""
                                                    />
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
                                                        <Link
                                                            to="/"
                                                            className={'block hover:bg-gray-100 px-4 py-2 text-sm text-gray-700'}
                                                        >
                                                            Go to Home
                                                        </Link>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <div
                                                            onClick={logout}
                                                            className={'block hover:bg-gray-100 px-4 py-2 text-sm text-gray-700'}
                                                        >
                                                            Sign out
                                                        </div>
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                                <NavLink to="/dashboard/projects" className="px-3 py-2 rounded">
                                    Projects
                                    <span
                                        className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-orange-600 bg-orange-100 rounded-full  ">{projects.length}</span>
                                </NavLink>
                                <NavLink
                                    to="/dashboard/add"
                                    className="px-3 py-2 rounded"
                                >
                                    Add Projects
                                </NavLink>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;
