import image1 from '../../assets/categories/01.jpg';
import image2 from '../../assets/categories/02.jpg';
import image3 from '../../assets/categories/03.jpg';
import image4 from '../../assets/categories/04.jpg';
import image5 from '../../assets/categories/05.jpg';
import cover_img from '../../assets/services/services-new.jpg';

const ServicesPage = () => {
    return (
        <div>
            <div>
                <div className="container py-0 mx-auto my-0">
                    <div className="relative mx-0 w-full">
                        <img
                            src={cover_img}
                            alt="A work table with house plants"
                            className="w-full h-[500px] hidden lg:block object-cover"
                        />
                        <img
                            src={cover_img}
                            alt="A work table with house plants"
                            className="hidden sm:block lg:hidden w-full h-full"
                        />
                        <img
                            src={cover_img}
                            alt="A work table with house plants"
                            className="sm:hidden w-full h-full"
                        />

                        <div
                            className="absolute z-10 top-4 sm:top-20 lg:top-32 left-0 mx-0 sm:mx-0 mt-20 sm:mt-12 sm:py-4 py-4 px-4 md:py-8 lg:py-8 xl:py-8 sm:pl-14 flex flex-col sm:justify-start items-start bg-title_bg opacity-75 text-secondary w-48 sm:w-96">
                            <h1 className="text-base sm:text-base lg:text-3xl font-semibold text-gray-800 sm:w-9/12 uppercase underline underline-offset-4">
                                Services
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-10 py-10">
                <section>
                    <h1 className="leading-5 md:leading-6 xl:leading-9 text-secondary-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase text-onSurface">
                        What we do
                    </h1>
                    <p className="text-secondary-600 text-base text-center mt-4 text-onSurface">
                        We deliver your desire. Trusted for many years.
                    </p>
                </section>
                <div className="flex justify-center items-center pt-8">
                    <div className="2xl:mx-auto 2xl:container py-0 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                        <div className="flex flex-col jusitfy-center items-center space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img
                                        className="object-center object-cover h-full w-full"
                                        src={image1}
                                        alt="living Room"
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-gray_text group-hover:bg-opacity-50">
                                        <p className="font-semibold text-2xl leading-6 text-secondary">
                                            Designing
                                        </p>
                                    </div>
                                    {/* <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                     <p className="font-light text-xl leading-6 text-secondary">
                                     This is not a true content. A text used to describe the
                                     picture.
                                     </p>
                                     </div> */}
                                    <div
                                        className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-onSurface bg-opacity-50" />
                                </div>
                                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                    <div className="relative group flex justify-center items-center h-full w-full">
                                        <img
                                            className="object-center object-cover h-full w-full"
                                            src={image2}
                                            alt="appartment"
                                        />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-gray_text group-hover:bg-opacity-50">
                                            <p className="font-semibold text-2xl leading-6 text-secondary">
                                                3D Visualizing
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                         <p className="font-light text-xl leading-6 text-secondary">
                                         This is not a true content. A text used to describe the
                                         picture.
                                         </p>
                                         </div> */}
                                        <div
                                            className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-onSurface bg-opacity-50" />
                                    </div>
                                    <div className="relative group flex justify-center items-center h-full w-full">
                                        <img
                                            className="object-center object-cover h-full w-full"
                                            src={image3}
                                            alt="Office Interior"
                                        />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-gray_text group-hover:bg-opacity-50">
                                            <p className="font-semibold text-2xl leading-6 text-secondary">
                                                Moodboards
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                         <p className="font-light text-xl leading-6 text-secondary">
                                         This is not a true content. A text used to describe the
                                         picture.
                                         </p>
                                         </div> */}
                                        <div
                                            className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-onSurface bg-opacity-50" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                    <div className="relative group flex justify-center items-center h-full w-full">
                                        <img
                                            className="object-center object-cover h-full w-full"
                                            src={image4}
                                            alt="appartment"
                                        />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-gray_text group-hover:bg-opacity-50">
                                            <p className="font-semibold text-2xl leading-6 text-secondary">
                                                Fabricator Guiding
                                            </p>
                                        </div>
                                        {/* <div className="flex flex-col top-20 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                         <p className="font-light text-xl leading-6 text-secondary">
                                         This is not a true content. A text used to describe the
                                         picture.
                                         </p>
                                         </div> */}
                                        <div
                                            className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-onSurface bg-opacity-50" />
                                    </div>
                                    <div className="relative group flex justify-center items-center h-full w-full">
                                        <img
                                            className="object-center object-cover h-full w-full"
                                            src={image5}
                                            alt="Office Interior"
                                        />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full flex justify-start items-start opacity-100 p-8 group-hover:bg-gray_text group-hover:bg-opacity-50">
                                            <p className="font-semibold text-2xl leading-6 text-secondary">
                                                Accessorizing
                                            </p>
                                        </div>
                                        <div
                                            className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-onSurface bg-opacity-50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;
