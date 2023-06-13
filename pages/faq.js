import { NextSeo } from 'next-seo';
import React from 'react';
import Faq from '../components/Faq';

import Link from "next/link";

import LogoVPN from "../public/assets/AX-02.svg";
import Footer from "../components/Layout/Footer";
function faq() {
  return (
    <>
         <NextSeo
        title="Professional Website Design and Development Services | AMAX Agency"
        description=  "AMAX Agency offers professional website design and development services tailored for SEO success. Our experienced team creates visually stunning, user-friendly websites optimized for search engines. Boost your online visibility, engage visitors, and convert leads into customers with our cutting-edge web solutions. Partner with AMAX Agency to elevate your brand's online presence. Contact us today for exceptional design, seamless functionality, and maximum SEO performance."
        keywords="Professional website design and development services Tailored SEO strategies for online success Experienced online marketing professionals Expertise in digital marketing and internet marketing strategies Proven track record in online advertising, SEO, and SEM Social media marketing specialists driving engagement and growth Email marketing experts for effective customer communication Content marketing strategists creating compelling and SEO-friendly content Results-driven online marketing approach with advanced analytics Cutting-edge online marketing techniques for optimal performance Trusted industry leaders in online marketing solutions Dedicated to driving online success through comprehensive strategies Constantly adapting to online marketing trends and consumer behavior"
      />
 <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col nav-code">
      <div className="col-start-1 col-end-2 flex items-center">
          <Link href="/" passHref><LogoVPN className="h-32 w-auto cursor-pointer " /></Link>
         
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
           
          </div>
          </nav>
       
            <Faq />
       
            <Footer />
    </>
  );
}

export default faq;
