import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div class="flex flex-wrap justify-center">

  <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
    <div class="border rounded-lg shadow-lg testhover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Graphic Design</h3>
        <p class="text-gray-600 mb-4">Visual Identity/Typography and layout Designs</p>
        <p class="text-2xl font-bold mb-4">$499<span class="text-base font-medium">/month</span></p>
        <ul class="text-sm mb-4">
          <li>Branding Support</li>
          <li>Re-Branding Existing Designs</li> 
          <li> Design Assets </li>
          <li> Design content for Website </li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Select Plan
        </button>
      </div>
    </div>
  </div>

  <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
    <div class="border rounded-lg shadow-lg testhover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Social Media Campaign & Management</h3>
        <p class="text-gray-600 mb-4"> Instagram, Facebook & Youtube Management</p>
        <p class="text-2xl font-bold mb-4">$599<span class="text-base font-medium">/month</span></p>
        <ul class="text-sm mb-4">
          <li> 15 Social Media Creatives</li>
          <li> 8 Animated Story </li>
          <li> Ad Campaigns </li>
          <li> Social Media Ad Campaign</li>
          <li>24/7 customer support</li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Select Plan
        </button>
      </div>
    </div>
  </div>


  <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4">
    <div class="border rounded-lg shadow-lg testhover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Website Development</h3>
        <p class="text-gray-600 mb-4">Perfect Website Development</p>
        <p class="text-2xl font-bold mb-4">$699<span class="text-base font-medium">/month</span></p>
        <ul class="text-sm mb-4">
          <li>Responsive Website Development</li>
          <li>Website Audit</li>
          <li>Mobile and Speed Optimaztion</li>
          <li>SEO optimization</li>
          <li>24/7 customer support</li>
        </ul>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Select Plan
        </button>
      </div>
    </div>
  </div>
  </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/clevertone.png"
                className="h-24 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/beleton.png"
                className="h-24 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/prroperties.png"
                className="h-24 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/dotstech.png"
                className="h-24 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/philips.png"
                className="h-24 w-auto mt-2 lg:mt-0"
                alt=""
              />
               <img
                src="/assets/clodura.ai.png"
                className="h-24 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <Link href="/contact" passHref><span className=" py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-100 hover:shadow-blue transition-all outline-none" >Get Started</span></Link>
       
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
