import React from "react";
import Link from "next/link";

import LogoVPN from "../public/assets/AX-02.svg";
import Footer from "../components/Layout/Footer";
import { NextSeo } from "next-seo";
function termsandcondition() {
  return (
    <>
     
      <NextSeo
        title="Professional Website Design and Development Services | AMAX Agency"
        description=  "AMAX Agency offers professional website design and development services tailored for SEO success. Our experienced team creates visually stunning, user-friendly websites optimized for search engines. Boost your online visibility, engage visitors, and convert leads into customers with our cutting-edge web solutions. Partner with AMAX Agency to elevate your brand's online presence. Contact us today for exceptional design, seamless functionality, and maximum SEO performance."
        keywords="Professional website design and development services Tailored SEO strategies for online success Experienced online marketing professionals Expertise in digital marketing and internet marketing strategies Proven track record in online advertising, SEO, and SEM Social media marketing specialists driving engagement and growth Email marketing experts for effective customer communication Content marketing strategists creating compelling and SEO-friendly content Results-driven online marketing approach with advanced analytics Cutting-edge online marketing techniques for optimal performance Trusted industry leaders in online marketing solutions Dedicated to driving online success through comprehensive strategies Constantly adapting to online marketing trends and consumer behavior"
      />
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col nav-code">
        <div className="col-start-1 col-end-2 flex items-center">
          <Link href="/" passHref>
            <LogoVPN className="h-32 w-auto cursor-pointer " />
          </Link>
        </div>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center"></div>
      </nav>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Amax Agency! These terms and conditions outline the rules
          and regulations for the use of our website. By accessing and using our
          website, you accept these terms and conditions in full. If you
          disagree with any part of these terms and conditions, please do not
          use our website.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          1. Intellectual Property Rights
        </h2>
        <p className="mb-4">
          Unless otherwise stated, we or our licensors own the intellectual
          property rights in the website and material on the website. All
          intellectual property rights are reserved. You may view, download, and
          print pages from the website for your own personal use, subject to the
          restrictions set out below and elsewhere in these terms and
          conditions. You must not:
          <ul>
            <li>
              Republish material from this website without our prior written
              consent.
            </li>
            <li>Sell, rent, or sub-license material from the website.</li>
            <li>
              Reproduce, duplicate, copy, or otherwise exploit material on our
              website for a commercial purpose.
            </li>
            <li>Edit or otherwise modify any material on the website.</li>
          </ul>
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          2. Limitations of Liability
        </h2>

        <p>
          The information on our website is provided on an "as is" basis. We
          make no warranties, expressed or implied, and hereby disclaim and
          negate all other warranties, including without limitation, implied
          warranties or conditions of merchantability, fitness for a particular
          purpose, or non-infringement of intellectual property or other
          violation of rights.
        </p>

        <p>
          In no event shall Amax Agency or its suppliers be liable for any
          damages arising out of the use or inability to use the materials on
          our website, even if Amax Agency or a authorized representative has
          been notified orally or in writing of the possibility of such damage.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">
          {" "}
          3. External Links
        </h2>

        <p>
          We take appropriate security measures to protect your personal
          Our website may contain links to external websites that are not operated by us. We have no control over the content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
        4. Governing Law
        </h2>

        <p>
        These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">
        5. Changes to the Terms and Conditions
        </h2>

        <p>
        We reserve the right to update or modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review this page periodically for any updates.

If you have any questions or concerns about our terms and conditions, please contact us using the information provided on our website.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">6. External Links</h2>

        <p>
          Our website may contain links to external websites that are not
          operated by us. We are not responsible for the privacy practices or
          content of these third-party websites. We encourage you to review
          their privacy policies when visiting such sites.
        </p>

     

        <h2 className="text-xl font-bold mt-8 mb-4">
          Last Updated:{new Date().getFullYear()}{" "}
        </h2>

        <h2 className="text-xl font-bold mt-8 mb-4">
        Note: This is a general template for terms and conditions. It is important to consult with legal professionals or adapt the content to align with the specific requirements and regulations applicable to your region and business.
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default termsandcondition;
