import React from "react";

import Facebook from "../../public/assets/Icon/facebook.svg";

import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
import PDFLink from "../PDFLink";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-6 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
       
          <p className="text-black-500 mt-4 mb-6">
               Elevate your presence with our <strong>Design Solutions</strong>.
              Grow your brand with our creative design solutions.
              </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div> */}
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - AMAX Agency</p>
        </div>
        <div className=" row-span-2 sm:col-span-4 sm:col-start-7 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg"> <PDFLink /></p>
          
          <ul className="text-black-500 ">
         
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              Pricing{" "}
            </li>
         
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              Projects{" "}
            </li>
          
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-4 sm:col-start-10 sm:col-end-12 flex flex-col">
        <Link href="/contact" passHref ><span className="text-black-600 mb-4 font-medium text-lg cursor-pointer">Contact Us</span></Link> 
          {/* <ul className="text-black-500">
           
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              FAQ{" "}
            </li>
          
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul> */}
        <div className="map-container">
        <div className="address">
          <h2>Address:</h2>
          <p>20th floor, 1 Mohan Gokhale Rd Colony No 2, Aarey Colony, Mumbai, Maharashtra 400063</p>
        </div>
      
      </div>
        </div>
     
      </div>
    </div>
  );
};

export default Footer;
