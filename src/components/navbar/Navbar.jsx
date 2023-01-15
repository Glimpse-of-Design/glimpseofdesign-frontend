import {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import {
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from "@heroicons/react/outline";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/nav-logo.png";

const solutions = [
    {
        name: "Home",
        description: "Get a better understanding of what is provided.",
        href: "/",
        icon: ChartBarIcon,
    },
    {
        name: "Projects",
        description: "Display what have been already done.",
        href: "/projects",
        icon: CursorClickIcon,
    },
    {
        name: "Services",
        description: "What we offer.",
        href: "/services",
        icon: ViewGridIcon,
    },
    {
        name: "Contact Us",
        description: "Speak directly to the company",
        href: "/contact",
        icon: RefreshIcon,
    },
];

export default function Navbar() {
    return (
        <Popover className="absolute z-50 w-full bg-main opacity-80 text-secondary">
            <div className="max-w-7xl">
                <div className="flex justify-between items-center  border-third-100 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="h-24 w-auto sm:h-26 min-w-full"
                                src={Logo}
                                alt="Glimpse of Design"
                            />
                        </Link>
                    </div>
                    <div className="mr-4 my-2 md:hidden">
                        <Popover.Button
                            className="bg-main opacity-80 rounded-md p-2 inline-flex items-center justify-center text-third-400 hover:text-third-500 hover:bg-third-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                            <span className="sr-only mx-6">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>

                    <div className="hidden md:flex space-x-20 items-center justify-end md:flex-1 lg:w-0 uppercase">
                        <NavLink to="/" className="nav-bar">
                            Home
                        </NavLink>
                        <NavLink to="projects" className="nav-bar">
                            Projects
                        </NavLink>
                        <NavLink to="services" className="nav-bar">
                            Services
                        </NavLink>
                        <NavLink
                            to="contact"
                            className="nav-bar border-primary border-solid border-2"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute flex justify-end top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden max-w-full"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-main ring-opacity-5 bg-secondary opacity-100">
                        <div className="pt-2 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-16 w-auto pr-16"
                                        src={Logo}
                                        alt="Glimpse of Design"
                                    />
                                </div>
                                <div className="-mr-2 text-third">
                                    <Popover.Button
                                        className="bg-secondary rounded-md p-2 inline-flex items-center justify-center text-primary-400 hover:text-primary-500 hover:bg-third-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6 ml-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <NavLink
                                            key={item.href}
                                            to={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-third-50 text-main navbar-color"
                                        >
                                            <item.icon
                                                className="flex-shrink-0 h-6 w-6 text-primary-600"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-third-900">
                        {item.name}
                      </span>
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
