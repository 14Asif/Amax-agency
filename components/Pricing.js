import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
import PDFLink from "./PDFLink";
const Pricing = ({
  imageslider = [
    {
      src: "/assets/lionel.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "lionel",
    },
    {
      src: "/assets/magical.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "magical",
    },
    {
      src: "/assets/vyom.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "Vyom",
    },

    {
      src: "/assets/totebags.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "totebags",
    },
    {
      src: "/assets/brewsoul.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "brewsoul",
    },
    {
      src: "/assets/coolkids.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "coolkids",
    },
    {
      src: "/assets/herbaltatva.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "herbaltatva",
    },
    {
      src: "/assets/spykar1.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "spykar",
    },
    {
      src: "/assets/sneaker.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "sneaker",
    },
    {
      src: "/assets/sunflower.webp",
      className: "h-30 w-auto mt-2 lg:mt-0",
      alt: "sunflower",
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
    autoplay: true,
    // slidesToScroll: 2,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          autoplay: true,
          initialSlide: 2,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          // slidesToScroll: 1,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full pb-14"
      id="pricing"
    >
   
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 flex flex-col sm:flex-row w-full text-center justify-around my-8 mx-auto">
  <div className="flex flex-col">
    <h2 className="text-blue-300 text-left font-bold text-2xl pt-8 sm:text-4xl  text-center">
    Partner with the Top Digital Marketing Agency in India
    </h2>
    <h3 className="text-blue-300 text-left font-bold text-1xl pt-8 sm:text-3xl pb-6 text-center">Discover Unmatched Digital Growth with Amax</h3>
    <p className="text-blue-300 text-left text-center">
    Amax, where your vision meets our innovation. As the Top Digital Marketing Agency in India, we understand the digital pulse like no other, ensuring your brand resonates with its audience through strategic precision and creative flair.

    </p>
  </div>
</div>
<div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 flex flex-col sm:flex-row w-full text-center justify-around my-8 mx-auto">
<div className="flex flex-col sm:w-1/2">
<img
    
          src="https://image.amaxagency.com/images/seo-services.jpeg"
          alt="Web Development Services"
          className="rounded-md"
          loading="lazy"
     width={500}
     height={200}
        />
  </div>
<div className="flex flex-col sm:w-1/2">
    <h2 className="text-blue-300 text-left font-bold text-md pt-12 sm:text-md pb-6 sm:pr-8">
    SEO: Amax best SEO services in India. Our adept SEO strategies are designed not just to elevate your rankings but to build a robust online foundation that captures and converts organic traffic into loyal clientele.
</h2>
<h2 className="text-blue-300 text-left font-bold text-md pt-2 sm:text-md pb-6 sm:pr-8">
   Web Development: creative journey with our web development services. At Amax, we don't just build websites; we craft digital experiences. Ensuring every click leads to engagement and every engagement builds your brand

   </h2>
<h2 className="text-blue-300 text-left font-bold text-md pt-2 sm:text-md pb-6 sm:pr-8">
Graphic Design: visual storytelling with our graphic design services. Our designs aren't just aesthetically pleasing; they're strategic masterpieces that communicate your unique value proposition and forge an indelible brand identity.

   </h2>

  </div>
</div>

      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300">
        Our Works
      </h2>
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center my-8">
      
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
                    {imageslider?
                    (<><Image
                        src={imageslider.src}
                        height={450}
                        width={450}
                        alt={imageslider.alt}
                        placeholder="blur"
                        blurDataURL="/assets/spykar1.webp"
                      /></>):  <div className="w-40 h-40 animate-pulse bg-gray-300 rounded-md"></div>
                    }  
                    
                    </div>
                 
                  </div>
                
                </div>
              </div>
            ))}
          </Slider>
          <span className="lg:ml-6  py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none">
            {" "}
            <PDFLink />
          </span>
        </div>
        <div className="flex flex-col w-full my-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-32 text-blue-300">
            Our Clients
          </h2>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
             
              <Image
                src="/assets/dotstech.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                height={120}
                width={120}
                alt="dotstech"
              />
              <Image
                src="/assets/spykar.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                height={120}
                width={120}
                alt="spykar"
              />
              <Image
                src="/assets/philips.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                height={120}
                width={120}
                alt="philips"
              />
              <Image
                src="/assets/cloudra-ai.webp"
                className="h-28 w-auto mt-2 lg:mt-0"
                height={120}
                width={120}
                alt="cloudra"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-8" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 text-blue-300 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12 text-blue-300">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-blue-300 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Got and Idea? Let's Talk !
                  </h5>
                  <p className="text-blue-300">
                    Please provide the following details, and one of our
                    executives will respond to you promptly.
                  </p>
                </div>
                <Link href="/contact" passHref>
                  <span className=" py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg cursor-pointer bg-blue-300 hover:shadow-blue transition-all outline-none">
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
