import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import LinkedIn from "../../public/assets/Icon/Linkedin.svg";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-500 pt-44">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-4 lg:px-16 grid grid-rows-3 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12">
        <div className="row-span-2 sm:col-span-6 col-start-1 col-end-3 sm:col-end-5 flex flex-col items-start ">
        <Link href="/" passHref >
    <a href="#" className="flex items-center">
     
      <Image 
      src="/assets/Amax-new-logo.svg"
      className="h-8"
      alt="Amax Agency"
      height={60}
      width={100}
      />
        
            </a>
            </Link>
          <p className="text-blue-300 mt-4 mb-6">
            Elevate your presence with our <strong>Design Solutions</strong>.
            Grow your brand with our creative design solutions.We have more to
            offer. Let’s connect :)
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.facebook.com/people/Amax-Agency/100093255912768/?mibextid=ZbWKwL"
                target="_blank"
                aria-label="Facebook"
              >
                {" "}
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.linkedin.com/company/94864061/"
                target="_blank"
                aria-label="Linkedin"
              >
                {" "}
                <LinkedIn className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.instagram.com/amax_agency/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                aria-label="Instragram"
              >
                {" "}
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
       
          <p className="text-blue-300"><a href="tel:8169536865" aria-label="number" rel="Index"> +91-8169536865</a></p>
           <p className="text-blue-300"><a href="mailto:support@amaxagency.com" rel="Index" aria-label="email">support@amaxagency.com</a></p>
          <p className="text-blue-300">
            ©{new Date().getFullYear()} - AMAX Agency
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-4 sm:col-start-7 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            <span className="text-blue-300 mb-4 font-medium text-lg cursor-pointer">
              Quick Links
            </span>
            <ul className="text-blue-300">
            <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              <Link href="/">
              <a className="text-base"> Home{" "}</a>
            </Link>
              </li>
              {/* <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              <Link href="/">
              <a> Our Works{" "}</a>
            </Link>
              </li> */}
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              <Link href="/privacy">
              <a className="text-base"> Privacy Policy{" "}</a>
            </Link>
              </li>

              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              <Link href="/termsandcondition">
              <a className="text-base"> Terms of Service{" "}</a>
            </Link>
              </li>
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
              <Link href="/faq">
              <a className="text-base">FAQ's{" "}</a>
            </Link> 
              </li>
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
                
              </li>
            </ul>
          </p>
        </div>
        <div className="row-span-2 sm:col-span-4 sm:col-start-10 sm:col-end-12 flex flex-col">
          <span className="text-blue-300 mb-4 font-medium text-lg cursor-pointer">
            Contact Us
          </span>

          <div className="map-container">
            <div className="address">
              <h2 className="text-blue-300 ">Address:</h2>
              <p className="text-blue-300 ">
                Oberai Commerz-II,20th floor, 1 Mohan Gokhale Rd Colony No 2,
                Aarey Colony, Mumbai, Maharashtra 400063
              </p>
            </div>
            <div>
     
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
