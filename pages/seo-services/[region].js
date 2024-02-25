// pages/seo-services/[region].js
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import gsap from 'gsap';
import Modal from 'react-modal';
import AccordionItem from '../../components/AccordionItem';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };


  
const RegionSEOServicePage = ({ region }) => {
    const contentRef = useRef(null);
const [open,setOpen]=useState(false);
const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit your form data, for example:
    console.log('Form submitted:', formData);
    // Close the modal
    setIsOpen(false);
  };
const toggle=(index)=>{
  if(open == index){
    return setOpen(null)
  }
  setOpen(index)
}
    useEffect(() => {
      // Simple GSAP animation
      gsap.from(contentRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.5 });
    }, []);

    const AccordionData=[
      {
        title:'Understand Your Audience',
        desc:'By knowing who your audience is, you can create content that resonates with them, increasingengagement and sharing'
      },
      {
        title:'Choose the Right Keywords',
        desc:"Targeting the keywords your audience is searching for can help your content rank higher in search engine results pages (SERPs)."
      },
      {
        title:'Create High-Quality Content',
        desc:'  Content that provides value to your audience, whether through information, entertainment, or utility, is more likely to be shared and linked to by other sites.'
      },
      {
        title:'Optimize for Mobile',
        desc:'With the majority of internet traffic coming from mobile devices, ensuring your site is mobile-friendly is essential for SEO.'
      },
      {
        title:'Improve Page Speed',
        desc:'Faster-loading pages provide a better user experience and are more likely to rank higher in search results.'
      },
      {
        title:'Use Descriptive URLs',
        desc:' Clear, descriptive URLs make it easier for both users and search engines to understand the content of a page.'
      },
      {
        title:'Add Internal Links',
        desc:' Linking to other relevant pages on your site helps search engines discover and index your content.'
      },
      {
        title:'Earn Backlinks',
        desc:' Getting other sites to link to your content is a signal of its quality and authority, which can improve your search rankings.'
      },
      {
        title:'Monitor Performance',
        desc:"Regularly tracking your site's performance in search results and user engagement metrics can help you identify areas for improvement."
      },
      {
        title:'Stay Informed',
        desc:'    SEO is an evolving field, so staying up to date with the latest best practices and algorithm changes is crucial.'
      }
  
    ]
  return (
    <Layout>
   
<div ref={contentRef}>
        <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
            {`Discover the Best SEO Services in ${region?capitalizeFirstLetter(region):India}`}
            </h1>
            <h2 className='text-2xl font-bold tracking-tighter leading-normal mb-4'>
        Data-Driven Insights for Modern SEO Excellence
</h2>
<h2 className='text-2xl font-bold tracking-tighter leading-normal mb-4'>
Fuel Your Online Success with Our All-in-One SEO Solutions
</h2>

          </div>
         
        </div>

      </div>
   
    </section>
    <section className="w-full py-6 md:py-12 lg:py-16 border-t back-section">
      <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 lg:gap-16 xl:gap-20">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why SEO Still Matters: The power of online visibility</h2>
          <p className="mx-auto max-w-4xl text-blue-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Most internet users begin their session by searching for something—that something is a need. People use the internet to fulfil their need for information, whether it’s settling a bet on who the 14th president of India was (A. P. J. Abdul Kalam, by the way) or finding a local restaurant, perfect piece of clothing, or the ideal contractor
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Does SEO Mean?</h2>
          <p className="mx-auto max-w-4xl text-blue-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          SEO is all about making sure customers find your business online. We use smart strategies to get more people visiting your website through search engines.

Amax, we're the key to unlocking your online success. Our team harnesses the latest in SEO, rooted in top-notch digital marketing techniques. We're here to amplify your website's organic traffic and elevate your search engine rankings for carefully chosen keywords and long-tail phrases that drive potential customers to your site.
When it comes to online marketing, SEO is the cornerstone. However, finding the right SEO partner can be a challenge. That's where our SEO experts come in. We make it easy for you by crafting a tailored SEO strategy that aligns perfectly with your objectives and budget.
Discover why we're known as the best SEO services provider in India. We specialize in local SEO services for small businesses like yours. No need to search endlessly for 'local SEO services near me.' We're right here, offering on-page SEO services and much more. Choose Amax for affordable, effective SEO services that take your online presence to the next level.

          </p>
        </div>
     
      </div>
    </section>
  
        <section className='w-full py-6 md:py-12 lg:py-16'>
        <h2 className="py-6 md:py-12 lg:py-16 px-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">10 Steps to SEO Success.</h2>
        <div className='px-8 w-full'>
          {
            AccordionData.map((data,index)=>{
              return <AccordionItem 
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={()=> toggle(index)}
              />;
            })
          }

        </div>

          </section>
          <section className='w-full py-6 md:py-12 lg:py-16'>
          <div>
      <img src="https://image.amaxagency.com/images/website-performance.png" useMap="#image-map" alt="Website Performance" />
   
      <map name="image-map">
    <area target="_blank" alt="contact page" title="contact page" href="https://www.amaxagency.com/contact" coords="1918,190,1523,95" shape="rect" />
</map>
    </div>
            </section>
            <section className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-2 px-4 md:px-6 md:flex-row">
        <div className="space-y-2 text-center md:max-w-sm md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Don't let your competition win the race...
            <wbr />
            Track Your Website's SEO
          </h2>
          <p className="text-blue-300">
            Get actionable insights to improve your SEO. Start with a free audit.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[300px]:flex-row md:gap-0 md:ml-4 lg:ml-6">
        <button
              type="submit"
              className=" py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none"
              onClick={() => setIsOpen(true)}
           >Free website audit</button>
            <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
        className="modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className="bg-white p-8 rounded shadow-md max-w-sm mx-auto">
          <h2 className="text-2xl font-bold mb-4">Website Audit form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Website URL:</label>
              <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <button type="submit" className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue transition-all outline-none">
              Submit
            </button>
          </form>
        </div>
      </Modal>
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

export default RegionSEOServicePage;


