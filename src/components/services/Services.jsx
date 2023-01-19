import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Services = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-onSurface">
            <div
                className="flex justify-center items-center flex-col px-4 md:px-6 xl:px-20 py-9 md:py-12 xl:py-10 mb-4">
                <section>
                    <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase">
                        Services
                    </h1>
                </section>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-8/12 ">
                    <img
                        className="w-full h-full"
                        src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                        alt="A group of People"
                    />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                        What we do
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        Our services in design process are always flexible to reach clients
                        budgets. This includes layout planning, moodboard visualizing, 3D
                        visualizing, technical detailing, Colour and Material selecting,
                        Furniture Selecting and finally Accessorizing.
                    </p>
                    <section className="flex mt-8">
                        <button
                            className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
                            <Link to="/services" className="flex flex-row flex-nowrap items-center">
                                Explore <BsArrowRight className="ml-2" />
                            </Link>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Services;
