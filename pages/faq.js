import { NextSeo } from 'next-seo';
import React from 'react';
import Faq from '../components/Faq';
import Link from "next/link";
import LogoVPN from "../public/assets/AX-02.svg";
import Footer from "../components/Layout/Footer";
import FaqData from '../components/faqData';
function faq() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is professional website design important?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Professional website design is crucial for several reasons. It helps create a positive first impression, establishes credibility, enhances user experience, improves search engine optimization (SEO), and increases conversion rates. A well-designed website can significantly impact your online presence and business success.",
            },
          },
          {
            "@type": "Question",
            name: ">What services do you offer for website design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: " At Amax Agency, we provide the following for Website Design\nCustom website design and development\nResponsive design for mobile devices\nUser interface (UI) and user experience (UX) design\nE-commerce website design\nContent management system (CMS) integration\nWebsite maintenance and updates\nSearch engine optimization (SEO) considerations",
            },
          },
          {
            "@type": "Question",
            name: "What services do you offer for graphic design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: " At Amax Agency, we provide the following for graphic design\nLogo design\nBranding and visual identity design\nPrint design (brochures, flyers, business cards, etc.)\nPackaging design\nSocial media graphics\nInfographics and data visualization\nIllustrations and icons\nBanner and billboard design",
            },
          },
          {
            "@type": "Question",
            name: " Do Amax agency provide website development services or only design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Amax Agency offers both website design and development services. Our team of skilled developers can bring your design to life by coding it into a fully functional website. We work with various content management systems and can develop custom solutions based on your specific requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can I provide my own images and content for the design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: " Definitely! you can provide your own images and content for the design. At Amax Agency,we can incorporate your existing branding materials, images, and text into the design. However, if you need assistance with content creation or require stock images, we can provide recommendations and additional services.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer revisions after the design is complete?",
            acceptedAnswer: {
              "@type": "Answer",
              text: " Absolutely! Amax Agency offer a certain number of revisions based on the package or project agreement. We understand that revisions may be necessary to achieve the desired outcome. However, major design changes or additional work outside the original scope may incur extra charges.\n          ",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer technical support?",
            acceptedAnswer: { "@type": "Answer", text: "Yes" },
          },
        ],
      };
    
  return (
    <>
     {/* <FaqData data={faqData}/> */}
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
