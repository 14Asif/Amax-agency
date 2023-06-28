import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  " UI/UX Design",
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
          {/* <h5 className="text-xl lg:text-2xl leading-relaxed text-black-600">
          Our design agency offers a comprehensive range of services to meet your creative needs.
          </h5> */}
          <p className="my-2 text-black-500">
          Unlocking Creativity, Delivering Excellence: Our design agency offers a comprehensive range of services to meet all your creative needs. Specializing in innovative and visually stunning solutions, we effectively communicate your brand message. Explore our service.
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
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
   <div class="flex flex-wrap justify-center">
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
             
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Service;
