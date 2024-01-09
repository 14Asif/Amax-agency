// pages/seo-services/[region].js
import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
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
    <div ref={contentRef} className="mt-12 text-center">
        <Image
          src="/assets/SEO-Image.jpeg"
          alt={`SEO Services in ${region}`}
          width={800}
          height={400}
          className="rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold mb-4">{`SEO Services in ${capitalizeFirstLetter(region)}`}</h2>
        <p>
          Customize the content for SEO services in the {capitalizeFirstLetter(region)} region here. You can include
          information about your services, client testimonials, etc.
        </p>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Define the regions for which pages should be generated
  const regions = ['Mumbai', 'Delhi-NCR', 'Bangalore', 'Kolkata',"Pune","Chennai"];

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
