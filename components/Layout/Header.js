import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import LinkedIn from "../../public/assets/Icon/Linkedin.svg";
import SeoHead from "../SeoHead";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [scrollYPos, setScrollYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <>
          <SeoHead />
     <header
        className={`fixed top-0 w-full z-30 transition-all bg-opacity-${
          scrollYPos > 20 ? "100" : "0"
        } bg-white`}
      >


<nav className="w-full  border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow">
        <div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
          <div>
            <div className="flex items-center justify-between  md:py-0 md:block">
        
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
      
             
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none bg-blue-300 focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)} aria-label="Navigation Drawer"
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="block py-2 pl-3 pr-4 text-gray-900 md:text-lg rounded text-blue-300 hover:bg-white-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link href="/" passHref><a>Home</a></Link>  
        </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 md:text-lg rounded text-blue-300 hover:bg-white-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link href="/services" passHref><a>Services</a></Link>  
        </li>
        <li className="block py-2 pl-3 pr-4 text-gray-900 rounded md:text-lg   text-blue-300 hover:bg-white-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700   md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link href="/contact" passHref><a>Contact</a></Link>  
        </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
      </header>

    </>
  );
};

export default Header;

