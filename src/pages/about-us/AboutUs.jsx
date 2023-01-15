import React from "react";
import cover_img from "../../assets/Categories/03.jpg";

export default function AboutUs() {
  return (
      <div>
        <div className="dark:bg-gray-900">
          <div className="container mx-0 py-0">
            <div className="relative mx-0 w-screen">
              <img
                  src={cover_img}
                  alt="A work table with house plants"
                  className="w-full h-full hidden lg:block"
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

            <div className="absolute z-10 top-8 sm:top-20 lg:top-32 left-0 mx-0 sm:mx-0 mt-20 sm:mt-12 sm:py-4 py-4 px-4 md:py-8 lg:py-8 xl:py-8 sm:pl-14 flex flex-col sm:justify-start items-start bg-title_bg  opacity-75 text-secondary">
              <h1 className="text-base sm:text-base lg:text-3xl font-semibold text-gray-800 sm:w-9/12 uppercase underline underline-offset-4">
                About Us
              </h1>
              <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-9/12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div class="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
            <div class="relative md:col-span-1 group lg:w-[32%] bg-secondary text-surface rounded">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-onSurface shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div class="relative">
                <div className="bg-title_bg w-full p-6">
                  <h3 class="text-3xl text-gray-700 text-center uppercase underline underline-offset-4 text-secondary font-semibold">
                    Our Skills
                  </h3>
                </div>
                <div className="px-6 py-12  space-y-6">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </span>
                </div>
              </div>
            </div>

            <div class="relative row-start-1 group md:col-span-2 lg:w-[36%] bg-secondary text-surface rounded">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-onSurface shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div class="relative">
                <div className="bg-primary w-full p-6">
                  <h3 class="text-3xl text-gray-700 text-center uppercase underline underline-offset-4 text-secondary font-semibold">
                    Design philosophy
                  </h3>
                </div>
                <div className="px-6 py-12  space-y-6">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </span>
                </div>
              </div>
            </div>

            <div class="relative md:col-span-1 group lg:w-[32%] bg-secondary text-surface rounded">
              <div
                aria-hidden="true"
                class="absolute top-0 w-full h-full rounded-2xl bg-onSurface shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div class="relative">
                <div className="bg-title_bg w-full p-6">
                  <h3 class="text-3xl text-gray-700 text-center uppercase underline underline-offset-4 text-secondary font-semibold">
                    The team
                  </h3>
                </div>
                <div className="px-6 py-12  space-y-6">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
