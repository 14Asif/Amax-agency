import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Image from "next/image";
import Link from "next/link";

function services() {
  return (
    <>
      {/* <h1>Service Page</h1> */}
      <Header />
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 mt-24 text-center backImage">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed backShade">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl text-white-500 font-semibold">Our Services</h2>
              <h4 className="mb-6 text-xl text-white-500 font-semibold">
                Define your brand goals, leverage our expertise in Web,
                Advertising, Technology.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl text-blue-300 font-extrabold m-8">
        {" "}
        Unlocking Creativity, Delivering Excellence
      </h2>
      <div className="flex flex-row flex-wrap max-w-screen-xl mx-auto">
        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
          <img
            className="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/ui ux.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">UI/UX</h3>
            <p className="m-4 text-blue-300 ">
              We create user-friendly and visually stunning interfaces that make
              your website or app easy to use and navigate.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/graphic design.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">Graphic Design</h3>
            <p className="m-4 text-blue-300 ">
              We create high-quality graphics that communicate your brand
              message in a clear and effective way.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/website-development.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">Website Development</h3>
            <p className="m-4 text-blue-300 ">
              We build websites that are both beautiful and functional, and that
              meet your specific needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/social-media.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">Social Media Campaigns</h3>
            <p className="m-4 text-blue-300 ">
              We create and manage social media campaigns that help you reach
              your target audience and grow your business.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-5">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/seo.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">
              Search Engine Optimization
            </h3>
            <p className="m-4 text-blue-300 ">
              We optimize your website for search engines so that you can be
              found by more potential customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-blue-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-pointer  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-6">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src="./assets/mobile app deve.webp"
            alt=""
          />
          <div className="block">
            <h3 className="text-2xl text-blue-300 font-bold m-4">
              Mobile Application Development
            </h3>
            <p className="m-4 text-blue-300 ">
              We develop mobile apps for Android and iOS that are engaging and
              user-friendly.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around  flex-wrap max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div>
          <h2 className="font-bold text-2xl text-center m-8 text-blue-300">
            We are here to help you unlock your creativity and deliver
            excellence.
          </h2>
        </div>

        <div className="">
          <p className="my-2 text-lg text-blue-300">
            Here are some additional benefits of working with our marketing
            agency:
          </p>
          <ul className="list-disc">
            <li className="text-base underline text-blue-300">
              We are a team of experienced and talented designers.
            </li>
            <li className="text-base underline text-blue-300">
              We are passionate about our work and we are committed to
              delivering excellence.
            </li>
            <li className="text-base underline text-blue-300">
              We are always up-to-date on the latest trends in design.
            </li>
            <li className="text-base underline text-blue-300">
              We are affordable and we offer a variety of payment options.
            </li>
            <li className="text-base underline text-blue-300">
              We believe that every business deserves great design.
            </li>
          </ul>
        </div>
        <div className="">
          <Image
            src="/assets/services-side.webp"
            width="250"
            height="210"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
        <div className="shadow hover:shadow-lg rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
          <div>
          <p className="my-5 text-blue-300">
            Contact us today to see how we can help you unlock your creativity
            and deliver excellence.
          </p>
          </div>
          <div className="my-5">
          <Link href="/contact" passHref>
            <span className="py-3 lg:py-4 px-12 lg:px-8 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none cursor-pointer">
              Learn More
            </span>
          </Link>
          </div>
          </div>
    
      </div>
      <Footer />
    </>
  );
}

export default services;
