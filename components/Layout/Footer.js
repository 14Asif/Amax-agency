import React from "react";

import Facebook from "../../public/assets/Icon/facebook.svg";

import Instagram from "../../public/assets/Icon/instagram.svg";
import LinkedIn from "../../public/assets/Icon/Linkedin.svg";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-4 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12">
        <div className="row-span-2 sm:col-span-12 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="text-black-500 mt-4 mb-6">
            Elevate your presence with our <strong>Design Solutions</strong>.
            Grow your brand with our creative design solutions.We have more to
            offer. Let’s connect :)
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.facebook.com/people/Amax-Agency/100093255912768/?mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.linkedin.com/company/94864061/"
                target="_blank"
              >
                {" "}
                <LinkedIn className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a
                href="https://www.instagram.com/amax_agency/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
              >
                {" "}
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
       
          <p className="text-black-500"><a href="tel:8169536865"> +91-8169536865</a></p>
           <p className="text-black-500"><a href="mailto:support@amaxagency.com">support@amaxagency.com</a></p>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - AMAX Agency
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-4 sm:col-start-7 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            <span className="text-black-600 mb-4 font-medium text-lg cursor-pointer">
              Quick Links
            </span>
            <ul className="text-black-500">
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all"></li>

              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all"></li>
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
                Privacy Policy{" "}
              </li>
              <li className="my-2 hover:text-blue-100 cursor-pointer transition-all">
                Terms of Service{" "}
              </li>
            </ul>
          </p>
        </div>
        <div className="row-span-2 sm:col-span-4 sm:col-start-10 sm:col-end-12 flex flex-col">
          <span className="text-black-600 mb-4 font-medium text-lg cursor-pointer">
            Contact Us
          </span>

          <div className="map-container">
            <div className="address">
              <h2>Address:</h2>
              <p>
                Oberai Commerz-II,20th floor, 1 Mohan Gokhale Rd Colony No 2,
                Aarey Colony, Mumbai, Maharashtra 400063
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5734203551137!2d72.857659873657!3d19.170141249013344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a854988e67%3A0x66f59a5e3c2da936!2sWeWork%20Commerz%20II!5e0!3m2!1sen!2sin!4v1686042187009!5m2!1sen!2sin"
                width="150"
                height="150"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
