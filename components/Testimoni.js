import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Alair Mecwan",
      image: "/assets/client-1.webp",
      city: "Texas",
      rating: "4.9",
      testimoni:
        "I hired your designing agency for my website and social media needs, and I must say I'm impressed! The website design is modern and visually appealing, and the user experience is fantastic. The social media graphics and posts are creative and engaging. Your team did a great job in understanding my brand and translating it into the designs. Highly recommended!",
    },
    {
      name: "Swetha Vaswani",
      image: "/assets/people-2.webp",
      city: "Mumbai",
      rating: "4.5",
      testimoni:
        "AMAX Agency is a dream to work with! We had the pleasure of collaborating with them on a complete rebranding project, and they exceeded our expectations in every way. Their designers are incredibly talented and possess a remarkable ability to transform abstract concepts into visually stunning designs.",
    },
    {
      name: "Zuhair Ahmed",
      image: "/assets/people-3.webp",
      city: "Delhi",
      rating: "4.5",
      testimoni:
        "I cannot express my gratitude enough for AMAX Agency's incredible design services. As a small business owner, I was looking for a design agency that could help me create a cohesive and visually appealing brand identity.",
    },
    {
      name: "Raghav Bakshi",
      image: "/assets/client-2.webp",
      city: "Kolkata",
      country: "India",
      rating: "4.7",
      testimoni:
        "AMAX Agency is a true gem in the world of design! We approached them with a complex project that required innovative thinking and out-of-the-box solutions.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-sky-500 transition-all rounded-lg p-8 flex flex-col testhover">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Amax Agency Review"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-100 border hover:bg-blue-100 hover:text-white-500 transition-all text-blue-100 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-100 border hover:bg-blue-100 hover:text-white-500 transition-all text-blue-100 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
