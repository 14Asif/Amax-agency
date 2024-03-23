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
<section className="w-full py-2 bg-black-100">
  <div className="container flex flex-col items-center justify-center px-4 text-center md:flex-row md:items-center md:justify-between md:px-6">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
        <a
          href="https://www.facebook.com/people/Amax-Agency/100093255912768/?mibextid=ZbWKwL"
          target="_blank"
          aria-label="Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </div>
      <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
        <a
          href="https://www.linkedin.com/company/94864061/"
          target="_blank"
          aria-label="Linkedin"
        >
          <LinkedIn className="h-4 w-4" />
        </a>
      </div>
      <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
        <a
          href="https://www.instagram.com/amax_agency/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
    <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4">
      <div className="flex items-center gap-1 mb-2 md:mb-0">
        <PhoneIcon className="h-4 w-4 opacity-50  text-white-500" />
        <span className="font-semibold text-white-500"><a href="tel:8169536865" aria-label="Contact us at 816-953-6865">816-953-6865</a></span>
      </div>
      <div className="flex items-center gap-1">
        <MailIcon className="h-4 w-4 opacity-50  text-white-500" />
        <span className="font-semibold text-white-500"><a href="mailto:support@amaxagency.com" aria-label="Contact our support team at support@amaxagency.com">support@amaxagency.com</a></span>
      </div>
    </div>
  </div>
</section>


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


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function NavigationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
