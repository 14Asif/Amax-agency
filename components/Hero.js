import React, { useMemo } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
import Whatsapp from "../public/assets/whatsapp.svg";

import TagText from "../components/TagText";
import Marquee from "react-fast-marquee";
const Hero = ({
  listUser = [
    {
      name: "Clients",
      number: "100",
      icon: "/assets/Icon/clients.svg",
    },
    {
      name: "Locations",
      number: "7",
      icon: "/assets/Icon/location.svg",
    },
    {
      name: "Projects",
      number: "200",
      icon: "/assets/Icon/project.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="max-w-screen-xl flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-300 leading-normal">
            We are an independent digital marketing agency
            </h1>
            <p className="text-blue-300 mt-4 mb-6">
            Specializing in full-funnel creative and performance-driven digital marketing
            </p>
            <Link href="/contact" passHref>
              <span className=" py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none cursor-pointer">
                Get Started
              </span>
            </Link>
          </div>
          <div className="flex w-full">
            <motion.div className="w-full h-full" variants={scrollAnimation}>
              <Image
                src="/assets/Firstfold.webp"
                alt="Amax Agency Design"
                quality={100}
                width={600}
                height={400}
                layout="responsive"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
        <Marquee className="mb-8 max-sm:text-xl ">
          <TagText />
        </Marquee>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-gray-500 w-12 h-12 mr-6 rounded-full">
                  <img
                    src={listUsers.icon}
                    className="h-6 w-6"
                    s
                    alt="services-icons"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-blue-300 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-blue-300">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
        <a
          href="https://wa.me/8169536865"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <Whatsapp />
        </a>
      </div>
    </div>
  );
};

export default Hero;
