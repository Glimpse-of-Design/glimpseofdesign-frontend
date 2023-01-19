import {Disclosure, Menu, Transition} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {Fragment, useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import navLogo from '../../assets/nav-logo.png';
import {auth} from '../../config/firebase/firebase-config';

const navigation = [
    {name: 'HOME', to: '/', current: false},
    {name: 'PROJECTS', to: '/projects', current: false},
    {name: 'SERVICES', to: '/services', current: false},
    {name: 'CONTACT US', to: '/contact', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const logout = async () => {
    await signOut(auth);
};

export default function Navbar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user]);

    return (
        <Disclosure as="nav" className="bg-white">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="nline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div
                                className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <Link to="/"  className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-20 w-auto lg:hidden"
                                        src={navLogo}
                                        alt="Glimpse of Design"
                                    />
                                    <img
                                        className="hidden h-20 w-auto lg:block"
                                        src={navLogo}
                                        alt="Glimpse of Design"
                                    />
                                </Link>
                                <div
                                    className={user ? 'hidden sm:ml-6 sm:flex sm:flex-1 sm:items-center sm:justify-center' : 'hidden sm:ml-6 sm:flex sm:flex-1 sm:items-center sm:justify-end'}>
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={'hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                                aria-current={'page'}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {user && (
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button
                                                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:rounded focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                                                    {({active}) => (
                                                        <Link
                                                            to="/dashboard/projects"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Dashboard
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <div
                                                            onClick={logout}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Mobile View*/}
                    <Disclosure.Panel className="sm:hidden bg-white hover:bg-white">
                        <div className="space-y-1 px-2 pt-2 pb-3 bg-white hover:bg-white text-center">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    as="a"
                                    to={item.to}
                                    className={'hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
