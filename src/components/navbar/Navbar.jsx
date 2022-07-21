import {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";
import {ChartBarIcon, CursorClickIcon, MenuIcon, RefreshIcon, ShieldCheckIcon, ViewGridIcon, XIcon,} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
import Logo from "../../assets/nav-logo.png";

const solutions = [
    {
        name: "Home",
        description: "Get a better understanding of what is provided.",
        href: "#",
        icon: ChartBarIcon,
    },
    {
        name: "Projects",
        description: "Display what have been already done.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "About Us",
        description: "What we serve and who we are.",
        href: "#",
        icon: ShieldCheckIcon,
    },
    {
        name: "Services",
        description: "What we offer.",
        href: "#",
        icon: ViewGridIcon,
    },
    {
        name: "Contact Us",
        description: "Speak directly to the company",
        href: "#",
        icon: RefreshIcon,
    },
];

export default function Navbar() {
    return (
        <Popover className="absolute z-10 w-full bg-main opacity-80 text-secondary">
            <div className="max-w-7xl">
                <div className="flex justify-between items-center  border-third-100 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            {/* <span className="sr-only">Workflow</span> */}
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
                        <Link
                            to="/"
                            className="whitespace-nowrap text-base font-medium text-third-500 hover:text-third-900 bg-primary rounded-full px-6 py-2 flex-initial"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects/"
                            className="whitespace-nowrap text-base font-medium text-third-500 hover:text-third-900 flex-initial"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/about/"
                            className="whitespace-nowrap text-base font-medium text-third-500 hover:text-third-900 flex-initial"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services/"
                            className="whitespace-nowrap text-base font-medium text-third-500 hover:text-third-900 flex-initial"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact/"
                            className="whitespace-nowrap text-base font-medium text-third-500 hover:text-third-900 border-primary border-solid border-2 rounded-full px-6 py-2 flex-initial"
                        >
                            Contact Us
                        </Link>
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
                    <div className="rounded-lg shadow-lg ring-1 ring-main ring-opacity-5 bg-secondary">
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
                                        <Link
                                            key={item.name}
                                            to={item.name}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-third-50 text-main"
                                        >
                                            <item.icon
                                                className="flex-shrink-0 h-6 w-6 text-primary-600"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3 text-base font-medium text-third-900">
                        {item.name}
                      </span>
                                        </Link>
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
