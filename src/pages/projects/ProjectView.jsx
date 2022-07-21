import React from "react";
import image1 from "../../assets/Project/01.jpg";
import image2 from "../../assets/Project/02.jpg";
import image3 from "../../assets/Project/03.jpg";
import image4 from "../../assets/Project/04.jpg";

export default function Index() {
  return (
    <div className="py-9 md:py-12 xl:py-32 px-12">
      <section>
        <h3 className="leading-5 md:leading-6 xl:leading-9 text-secondary-800 text-xl md:text-2xl xl:text-4xl font-semibold text-left uppercase text-secondary">
          Horizon campus, lake pathway
        </h3>
        <p className="text-secondary-600 text-base text-left my-12 text-secondary">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </section>
      <div>
        <img className="md:block w-full " alt="" src={image1}></img>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4 mt-4">
        <div className="relative group opacity-50">
          <img className="md:block w-full" alt="" src={image1}></img>
        </div>
        <div className="relative group">
          <img className="md:block w-full" alt="" src={image2}></img>
        </div>
        <div className="relative group">
          <img className="md:block w-full" alt="" src={image3}></img>
        </div>
        <div className="relative group">
          <img className="md:block w-full" alt="" src={image4}></img>
        </div>
      </div>
    </div>
  );
}
