import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "UI/UX",
  "Graphic Design",
  "Website Development",
  "Website Maintainence",
  "Mobile Application Development (Android and Ios)",
  "Social Media Campaigns",
  "Search Engine Optimaztion",
]

const Service = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="services">

  
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"   
    >
       <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">We Have The Services That
Fuel Your Growth</h2>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src="/assets/services.webp"
              alt="Services Picture"
              layout="responsive"
              quality={100}
              height={600}
              width={950}
              priority
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h5 className="text-xl lg:text-2xl leading-relaxed text-black-600">
          Our design agency offers a comprehensive range of services to meet your creative needs.
          </h5>
          <p className="my-2 text-black-500">
          We specialize in delivering innovative and visually stunning solutions that effectively communicate your brand message.
          Our Services
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
    </div>
  );
};

export default Service;
