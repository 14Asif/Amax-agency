import React, { useState } from "react";
import Link from "next/link";
import LogoVPN from "../public/assets/AX-02.svg";
import Footer from "../components/Layout/Footer";import ButtonOutline from "../components/misc/ButtonOutline.";
import { NextSeo } from "next-seo";
function privacy() {
 

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
          <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Privacy and Policy</h1>
          <p className="mb-4">
            At Amax Agency, we are committed to protecting the privacy and
            confidentiality of our website visitors and clients. This Privacy
            and Policy page outlines how we collect, use, and safeguard your
            personal information. By accessing and using our website, you
            consent to the terms described below.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">
            1. Collection of Personal Information
          </h2>
          <p className="mb-4">
            We may collect personal information from you when you voluntarily
            provide it while interacting with our website, such as when you fill
            out a contact form, subscribe to our newsletter, or engage in any
            other activities on our site. The information we collect may include
            your name, email address, phone number, and other relevant details.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">
            2. Use of Personal Information
          </h2>

          <p>
            We use the personal information you provide to us for the following
            purposes:
          </p>

          <p>
            To respond to your inquiries and provide the services you request.
            To send you relevant information about our services, updates, and
            promotions, with your consent. To improve our website and tailor the
            content to better serve your needs. To conduct market research and
            analyze website traffic and usage patterns.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">
            {" "}
            3. Security of Personal Information
          </h2>

          <p>
            We take appropriate security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. We use industry-standard security techniques, including
            secure sockets layer (SSL) encryption, to safeguard your data.
            However, please be aware that no method of transmission over the
            internet or electronic storage is completely secure.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">
            4. Sharing of Personal Information
          </h2>

          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted service
            providers who assist us in delivering our services or conducting our
            business operations, such as website hosting, email marketing, or
            analytics. These third-party service providers are obligated to keep
            your information confidential and use it solely for the purposes we
            specify.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">
            5. Cookies and Tracking Technologies
          </h2>

          <p>
            We may use cookies and similar tracking technologies to enhance your
            browsing experience and gather information about how you use our
            website. Cookies are small text files that are stored on your
            device. They enable us to recognize your preferences, track usage
            patterns, and improve our website's functionality. You can choose to
            disable cookies through your browser settings, although this may
            limit certain features of our website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. External Links</h2>

          <p>
            Our website may contain links to external websites that are not
            operated by us. We are not responsible for the privacy practices or
            content of these third-party websites. We encourage you to review
            their privacy policies when visiting such sites.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">
            7. Changes to the Privacy Policy
          </h2>

          <p>
            We reserve the right to update or modify this Privacy and Policy
            page at any time. Any changes will be effective immediately upon
            posting on our website. It is your responsibility to review this
            page periodically for any updates.
          </p>

          <p>
            If you have any questions or concerns about our privacy practices,
            please contact us using the information provided on our website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">
            Last Updated:{new Date().getFullYear()}{" "}
          </h2>

          <h2 className="text-xl font-bold mt-8 mb-4">
            Note: This is a general template for a privacy policy. It is
            important to consult with legal professionals or adapt the content
            to align with the specific requirements and regulations applicable
            to your region and business.
          </h2>
        </div>
        <Footer />
 
    </>
  );
}

export default privacy;
