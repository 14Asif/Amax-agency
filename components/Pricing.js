import React, { useMemo,useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
import PDFLink from "./PDFLink";

const Pricing = ({
  imageslider=[
    {
      src:"/assets/fresh-kicks.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"fresh-kicks"
    },
    {
      src:"/assets/lionel.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"lionel"
    },
    {
      src:"/assets/magical.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"magical"
    },
    // {
    //   src:"/assets/spykar-1.webp",
    //   className:"h-30 w-auto mt-2 lg:mt-0",
    //   alt:"skykar"
    // },
  
    {
      src:"/assets/totebags.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"totebags"
    },
    {
      src:"/assets/brewsoul.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"brewsoul"
    },
    {
      src:"/assets/coolkids.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"coolkids"
    },
    {
      src:"/assets/herbaltatva.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"herbaltatva"
    },
    {
      src:"/assets/spykar-2.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"spykar"
    },
    {
      src:"/assets/sneaker.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"sneaker"
    },
    {
      src:"/assets/sunflower.webp",
      className:"h-30 w-auto mt-2 lg:mt-0",
      alt:"sunflower"
    }
  ]
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
    slidesToShow: 4,
    autoplay:true,
    // slidesToScroll: 2,
    autoplaySpeed:1000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 2,
          autoplay:true,
          initialSlide: 2,
          autoplaySpeed:1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          autoplay:true,
          // slidesToScroll: 1,
          autoplaySpeed:1000,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold ">Our Works</h1>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center my-8">
        {/* <div class="flex flex-wrap justify-center">
          <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
            <div class="border rounded-lg shadow-lg testhover">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Graphic Design</h3>
                <p class="text-gray-600 mb-4">
                  Visual Identity/Typography and layout Designs
                </p>
                <p class="text-2xl font-bold mb-4">
                  $499<span class="text-base font-medium">/month</span>
                </p>
                <ul class="text-sm mb-4">
                  <li>Branding Support</li>
                  <li>Re-Branding Existing Designs</li>
                  <li> Design Assets </li>
                  <li> Design content for Website </li>
                </ul>
              <Link href="/contact" passHref><span className="bg-blue-100 hover:bg-blue-600 cursor-pointer text-white-500 font-semibold py-2 px-4 rounded">
                  Select Plan
                </span></Link>
              </div>
            </div>
          </div>
          <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
            <div class="border rounded-lg shadow-lg testhover">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">
                  Social Media Campaign & Management
                </h3>
                <p class="text-gray-600 mb-4">
                  {" "}
                  Instagram, Facebook & Youtube Management
                </p>
                <p class="text-2xl font-bold mb-4">
                  $599<span class="text-base font-medium">/month</span>
                </p>
                <ul class="text-sm mb-4">
                  <li> 15 Social Media Creatives</li>
                  <li> 8 Animated Story </li>
                  <li> Ad Campaigns </li>
                  <li> Social Media Ad Campaign</li>
                  <li>24/7 customer support</li>
                </ul>
                <Link href="/contact" passHref><span className="bg-blue-100 hover:bg-blue-600 cursor-pointer text-white-500 font-semibold py-2 px-4 rounded">
                  Select Plan
                </span></Link>
              </div>
            </div>
          </div>

          <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
            <div class="border rounded-lg shadow-lg testhover">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Website Development</h3>
                <p class="text-gray-600 mb-4">Perfect Website Development</p>
                <p class="text-2xl font-bold mb-4">
                  $699<span class="text-base font-medium">/month</span>
                </p>
                <ul class="text-sm mb-4">
                  <li>Responsive Website Development</li>
                  <li>Website Audit</li>
                  <li>Mobile and Speed Optimaztion</li>
                  <li>SEO optimization</li>
                  <li>24/7 customer support</li>
                </ul>
                <Link href="/contact" passHref><span className="bg-blue-100 hover:bg-blue-600 cursor-pointer text-white-500 font-semibold py-2 px-4 rounded">
                  Select Plan
                </span></Link>
              </div>
            </div>
          </div>
        </div> */}
        <div>
        <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {imageslider.map((imageslider, index) => (
          <div className="px-3 my-8 flex items-stretch" key={index}>
            <div className=" hover:border-sky-500 transition-all p-4 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={imageslider.src}
                    height={200}
                    width={200}
                    alt={imageslider.alt}
                  />
                  {/* <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city}
                    </p>
                  </div> */}
                </div>
                {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div> */}
              </div>
              {/* <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p> */}
            </div>
          </div>
        ))}
      </Slider>
      <span className="lg:ml-6  py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-blue-100 hover:shadow-blue transition-all outline-none" >  <PDFLink /></span>
        </div>
        <div className="flex flex-col w-full my-24">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-32">Our Clients</h1>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/clevertone.webp"
                className="h-28 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/beleton.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/prroperties.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/dotstech.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
               <img
                src="/assets/spykar.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/philips.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/cloudra-ai.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-8" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Got and Idea? Let's Talk !
                  </h5>
                  <p>Please provide the following details, and one of our executives will respond to you promptly.</p>
                </div>
                <Link href="/contact" passHref>
                  <span className=" py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg cursor-pointer bg-blue-100 hover:shadow-blue transition-all outline-none">
                    Get Started
                  </span>
                </Link>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
