import React from "react";
import { Disclosure } from "@headlessui/react";
import FaqData from "./faqData";
function Faq() {
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
    <FaqData data={faqData}/>
    <div className="w-full px-1 pt-8">
      <h1 className="text-center text-4xl font-semibold pb-8">FAQ's</h1>
      <div className="w-full max-w-4xl p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why is professional website design important?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                Professional website design is crucial for several reasons. It
                helps create a positive first impression, establishes
                credibility, enhances user experience, improves search engine
                optimization (SEO), and increases conversion rates. A
                well-designed website can significantly impact your online
                presence and business success.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What services do you offer for website design?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                At Amax Agency, we provide the following for Website Design
                <ul>
                  <li>Custom website design and development &#127912;</li>
                  <li>Responsive design for mobile devices &#128241;</li>
                  <li>
                    User interface (UI) and user experience (UX) design
                    &#128187;
                  </li>
                  <li>E-commerce website design &#128184;</li>
                  <li>Content management system (CMS) integration &#128221;</li>
                  <li>Website maintenance and updates &#128295;</li>
                  <li>
                    Search engine optimization (SEO) considerations &#128269;
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What services do you offer for graphic design?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                At Amax Agency, we provide the following for graphic design
                <ul>
                  <li>Logo design &#128515;</li>
                  <li>Branding and visual identity design &#127752;</li>
                  <li>
                    Print design (brochures, flyers, business cards, etc.)
                    &#128196;
                  </li>
                  <li>Packaging design &#127869;</li>
                  <li>Social media graphics &#128242;</li>
                  <li>Infographics and data visualization &#128202;</li>
                  <li>Illustrations and icons &#128172;</li>
                  <li>Banner and billboard design &#127915;</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Do Amax agency provide website development services or only
                  design?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                Amax Agency offers both website design and development services.
                Our team of skilled developers can bring your design to life by
                coding it into a fully functional website. We work with various
                content management systems and can develop custom solutions
                based on your specific requirements.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Can I provide my own images and content for the design?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                Definitely! you can provide your own images and content for the
                design. At Amax Agency,we can incorporate your existing branding
                materials, images, and text into the design. However, if you
                need assistance with content creation or require stock images,
                we can provide recommendations and additional services.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Do you offer revisions after the design is complete?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                Absolutely! Amax Agency offer a certain number of revisions
                based on the package or project agreement. We understand that
                revisions may be necessary to achieve the desired outcome.
                However, major design changes or additional work outside the
                original scope may incur extra charges.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-black-500 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-blue-100`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-blue-100">
                Yes
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    </>
  );
}

export default Faq;
