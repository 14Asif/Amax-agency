import React, { useState } from "react";
import Link from "next/link";

import LogoVPN from "../public/assets/AX-02.svg";
import Footer from "../components/Layout/Footer";import ButtonOutline from "../components/misc/ButtonOutline.";
import { NextSeo } from "next-seo";
import Header from "../components/Layout/Header";
function contact() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you for Contacting Us");
        const newFormData = {
          subject: "",
          email: "",
          message: "",
        };
        setFormData(newFormData);
      }
      console.log(response);
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <NextSeo
        title="Professional Website Design & Development Services | AMAX Agency"
        description=    "AMAX Agency provides exceptional website design and development services, customized for optimal SEO performance. Our team creates visually captivating and user-friendly websites, with a strong emphasis on Graphic and UI/UX design. Explore our expertise now."
        keywords="Website design, Website development, SEO optimization, Customized websites, Graphic design, UI/UX design, User-friendly websites, Visually captivating websites, Web design services, Web development services"

      />
   <Header />
   <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 mt-12 text-center backImage-contact">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed backShade">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl text-white-500 font-semibold">Connect With US</h2>
              <h4 className="mb-6 text-xl text-white-500 font-semibold">
                Define your brand goals, leverage our expertise in Web,
                Advertising, Technology.
              </h4>
            </div>
          </div>
        </div>
      </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-12 lg:py-12 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-300 dark:text-white">
            ENQUIRY FORM
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-blue-300 dark:text-gray-400 sm:text-xl">
            Share your hurdles for growth with us, and we’ll produce a strategy to solve them.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-base text-blue-300 font-medium text-gray-900 dark:text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block p-3 w-full text-base text-blue-300 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@abc.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2  font-medium text-base text-blue-300 dark:text-gray-300">
                 Contact Number
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block p-3 w-full text-base text-blue-300 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2  font-medium text-base text-blue-300 dark:text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-base text-blue-300 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className=" py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
        <Footer />
 
    </>
  );
}

export default contact;
