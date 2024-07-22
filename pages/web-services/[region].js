// pages/seo-services/[region].js
import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import Link from "next/link";
import gsap from 'gsap';
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
const RegionWebServicePage = ({ region }) => {
    const contentRef = useRef(null);

    useEffect(() => {
      // Simple GSAP animation
      gsap.from(contentRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    }, []);
  return (
    <Layout>
   <div ref={contentRef}>
   <section className="w-full py-48 md:py-24 lg:py-24">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4">
        <div className="flex-1 sm:pl-4 md:pl-24 lg:pl-24 sm:pt-4 md:pt-24 lg:pt-24">
        <h1 className="text-black-100 text-3xl font-medium tracking-tighter sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {`Discover the Best Web Services in ${region ? capitalizeFirstLetter(region) : India}`}
                </h1>
                <h2 className='text-black-100 text-xl  tracking-tighter leading-normal mt-4 mb-8'>
                Designing Tomorrow's Digital Landscape
 <br/>
 Empower Your Brand with Creative Web Solutions
                </h2>
                <Link href="/contact" passHref>
                  <span className="py-3  lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg cursor-pointer bg-blue-300 hover:shadow-blue transition-all outline-none">
                 Reach Out Now
                  </span>
                </Link>
      </div>
      <div className="flex-1 sm:p-4 md:pt-18 lg:pt-18">
      <img
          src="https://image.amaxagency.com/images/web development.webp"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        />
      </div>
          </div>
      

        </section>
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-center md:space-y-6 lg:text-left lg:flex-row lg:space-x-6 xl:space-x-10 xl:text-left">
          <div className="space-y-2 lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/line-none">
              Transform Your Ideas Into Reality
            with Our Web Development Services
            </h1>
            <p className="text-blue-300 ">Where Every Click Counts!</p>
            <p className="text-xl text-blue-300 md:text-2xl ">
              Bringing your digital vision to life with tailored web solutions
            </p>
          </div>
          <div className="space-y-4 max-w-prose lg:space-y-3 xl:space-y-4 [&>p]:first-child">
            <p>
              Today's web development services extend beyond just sleek designs; it's about crafting sites that resonate
              with your audience, ensuring smooth user experiences, optimized for search engines, and packed with
              functionalities that meet today's digital demands.
            </p>
            <p>
              Whether you're looking for eye-catching frontend to powerful backend and complete full stack development -
              we've got every angle covered, or a straightforward WordPress site to establish your online presence or a
              complex e-commerce platform, our team is here to turn your ideas into reality.
            </p>
            <p>
              Alongside, our dedicated web maintenance and support ensure your site remains up-to-date and optimized for
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Web Development Services</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Crafting digital experiences with you at the forefront. Today's web development services extend beyond just sleek designs; it's about crafting sites that resonate with your audience, ensuring smooth user experiences, optimized for search engines, and packed with functionalities that meet today's digital demands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend, Backend, and Full Stack Development */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frontend, Backend, and Full Stack Development</h3>
            <p className="text-gray-700 mb-4">
              Frontend Development brings your website's design to life, creating the visual and interactive elements that users engage with. Backend Development is the powerhouse behind your website, managing the server, applications, and databases. Full Stack Development combines the best of both worlds, covering both frontend and backend tasks.
            </p>
            <ul className="list-disc ml-6">
              <li>Responsive and Interactive Designs</li>
              <li>Secure and Efficient Data Handling</li>
              <li>Comprehensive Web Solutions</li>
              <li>Versatility Across Technologies</li>
            </ul>
          </div>
          {/* WordPress & CMS Development */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">WordPress & CMS Development</h3>
            <p className="text-gray-700 mb-4">
              WordPress & CMS Development offers a straightforward and adaptable platform, powering a vast portion of the web. This platform delivers an accessible content management system (CMS), enabling swift and simple modifications whenever needed.
            </p>
            <ul className="list-disc ml-6">
              <li>Simple to Modify: Intuitive editing on the go.</li>
              <li>Optimized for Search Engines: Designed for visibility.</li>
              <li>Tailor-Made: Extensive customization options available.</li>
              <li>Leading CMS Choice: Preferred by a majority for web development.</li>
            </ul>
          </div>
          {/* Web Maintenance and support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Web Maintenance and Support</h3>
            <p className="text-gray-700 mb-4">
              Web Maintenance and Support ensure your website remains current, secure, and fully functional. This service is crucial for keeping your site up-to-date with the latest technology standards, providing a seamless user experience, and maintaining high search engine rankings.
            </p>
            <ul className="list-disc ml-6">
              <li>Hassle-Free Updates: Keep your site fresh with easy content updates.</li>
              <li>Optimized Performance: Fast, secure, and SEO-friendly to meet modern web standards.</li>
              <li>Custom Support: Tailored solutions to fit your specific web maintenance needs.</li>
              <li>Reliability: Trusted by businesses to maintain a strong online presence.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section> 
    <div class="slider">
      <div class="slide-track">
        <div class="slide">    <img
          src="https://image.amaxagency.com/images/html.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
         <div class="slide">    <img
          src="https://image.amaxagency.com/images/css-3.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/js.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/mysql.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/php.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/react.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/wordpress.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/xd.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
          <div class="slide">    <img
          src="https://image.amaxagency.com/images/xd.png"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        /></div>
      
    
      </div>
    </div>
    </section>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Define the regions for which pages should be generated
  const regions = ['India','Mumbai', 'Delhi-NCR', 'Bangalore', 'Kolkata',"Pune","Chennai"];

  // Map the regions to the paths
  const paths = regions.map((region) => ({
    params: { region: region.toLowerCase() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { region } = params;

  // You can fetch additional data for the region if needed

  return {
    props: {
      region,
    },
  };
}

export default RegionWebServicePage;
