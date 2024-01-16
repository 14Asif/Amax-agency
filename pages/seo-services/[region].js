// pages/seo-services/[region].js
import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import gsap from 'gsap';
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
const RegionSEOServicePage = ({ region }) => {
    const contentRef = useRef(null);

    useEffect(() => {
      // Simple GSAP animation
      gsap.from(contentRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    }, []);
  return (
    <Layout>
    <div ref={contentRef} className="mt-24 text-center">
        <h1 className="text-3xl font-bold mb-4">{`Discover the Best SEO Services in ${region?capitalizeFirstLetter(region):India}`}</h1>
        <h2 className='text-xl leading-normal mb-4'>
        Data-Driven Insights for Modern SEO Excellence
</h2>

<h2 className='text-xl leading-normal mb-4' >
Fuel Your Online Success with Our All-in-One SEO Solutions
        </h2>
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

export default RegionSEOServicePage;
