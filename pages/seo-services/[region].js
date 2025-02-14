// pages/seo-services/[region].js
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import gsap from 'gsap';
import Modal from 'react-modal';
import AccordionItem from '../../components/AccordionItem';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from "next/link";
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};



const RegionSEOServicePage = ({ region }) => {
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
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
  const toggle = (index) => {
    if (open == index) {
      return setOpen(null)
    }
    setOpen(index)
  }
  useEffect(() => {
    // Simple GSAP animation
    gsap.from(contentRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.5 });
  }, []);
  const steps = [
    {
      title: 'Keyword Research',
      icon: '🔍',
      description: 'Identify relevant keywords for your website or content.'
    },
    {
      title: 'Competitor Analysis',
      icon: '📊',
      description: 'Analyze competitors\' strategies and performance to gain insights.'
    },
    {
      title: 'On-Page Optimization',
      icon: '🔧',
      description: 'Optimize your website\'s content and structure for search engines.'
    },
    {
      title: 'Content Creation',
      icon: '✏️',
      description: 'Create high-quality, relevant content that resonates with your audience.'
    },
    {
      title: 'Mobile Optimization',
      icon: '📱',
      description: 'Ensure your website is optimized for mobile devices for better user experience.'
    },
    {
      title: 'Site Speed Optimization',
      icon: '⏱️',
      description: 'Improve website loading speed for better user experience and search ranking.'
    },
    {
      title: 'Link Building',
      icon: '🔗',
      description: 'Acquire high-quality backlinks from reputable websites to improve authority.'
    },
    {
      title: 'Social Media Integration',
      icon: '📲',
      description: 'Integrate social media platforms to amplify your content reach and engagement.'
    },
    {
      title: 'Analytics and Monitoring',
      icon: '📈',
      description: 'Monitor website performance and user behavior using analytics tools.'
    },
    {
      title: 'Continuous Improvement',
      icon: '🔄',
      description: 'Regularly review and refine your SEO strategy for ongoing success.'
    }
  ];
  const AccordionData = [
    {
      title: 'Understand Your Audience',
      desc: 'By knowing who your audience is, you can create content that resonates with them, increasingengagement and sharing'
    },
    {
      title: 'Choose the Right Keywords',
      desc: "Targeting the keywords your audience is searching for can help your content rank higher in search engine results pages (SERPs)."
    },
    {
      title: 'Create High-Quality Content',
      desc: '  Content that provides value to your audience, whether through information, entertainment, or utility, is more likely to be shared and linked to by other sites.'
    },
    {
      title: 'Optimize for Mobile',
      desc: 'With the majority of internet traffic coming from mobile devices, ensuring your site is mobile-friendly is essential for SEO.'
    },
    {
      title: 'Improve Page Speed',
      desc: 'Faster-loading pages provide a better user experience and are more likely to rank higher in search results.'
    },
    {
      title: 'Use Descriptive URLs',
      desc: ' Clear, descriptive URLs make it easier for both users and search engines to understand the content of a page.'
    },
    {
      title: 'Add Internal Links',
      desc: ' Linking to other relevant pages on your site helps search engines discover and index your content.'
    },
    {
      title: 'Earn Backlinks',
      desc: ' Getting other sites to link to your content is a signal of its quality and authority, which can improve your search rankings.'
    },
    {
      title: 'Monitor Performance',
      desc: "Regularly tracking your site's performance in search results and user engagement metrics can help you identify areas for improvement."
    },
    {
      title: 'Stay Informed',
      desc: '    SEO is an evolving field, so staying up to date with the latest best practices and algorithm changes is crucial.'
    }

  ]
  return (
    <Layout>

      <div ref={contentRef}>
        <section className="w-full py-48 md:py-24 lg:py-24">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4">
        <div className="flex-1 sm:pl-4 md:pl-24 lg:pl-24 sm:pt-4 md:pt-24 lg:pt-24">
        <h1 className="text-black-100 text-3xl font-medium tracking-tighter sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {`Discover the Best SEO Services in ${region ? capitalizeFirstLetter(region) : India}`}
                </h1>
                <h2 className='text-black-100 text-xl  tracking-tighter leading-normal mt-4 mb-8'>
                  Data-Driven Insights for Modern SEO Excellence <br/>
                  Fuel Your Online Success with Our All-in-One SEO Solutions
                </h2>
                <Link href="/contact" passHref>
                  <span className="py-3  lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg cursor-pointer bg-blue-300 hover:shadow-blue transition-all outline-none">
                 Reach Out Now
                  </span>
                </Link>
      </div>
      <div className="flex-1 sm:p-4 md:pt-18 lg:pt-18">
      <img
          src="https://image.amaxagency.com/images/Asset 1.webp"
          alt="SEO Services"
          className="w-full rounded-md h-104 w-104"
        />
      </div>
          </div>
          {/* <div className="container px-4 md:px-6 ">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-white-500 text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
                  {`Discover the Best SEO Services in ${region ? capitalizeFirstLetter(region) : India}`}
                </h1>
                <h2 className='text-white-500 text-2xl  tracking-tighter leading-normal mb-4'>
                  Data-Driven Insights for Modern SEO Excellence
                </h2>
                <h2 className='text-white-500 text-2xl  tracking-tighter leading-normal mb-4'>
                  Fuel Your Online Success with Our All-in-One SEO Solutions
                </h2>

              </div>

            </div>

          </div> */}

        </section>
        <section className='w-full py-6'>
          <h2 className="py-6 md:py-6 lg:py-12 px-8 text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">10 Steps to SEO Success.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8">
            {steps.map((step, index) => (
              <div key={index} className="step-card bg-gray-100 rounded-lg p-6">
                <span className="step-icon text-4xl">{step.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className='px-8 w-full'>
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

        </div> */}

        </section>
        <section>
  <div class="flex flex-col justify-center items-center w-full mt-12">
    <div class="w-full flex justify-center mb-4 md:mb-0">
      <div class="text-center">
      <h2 class="font-medium text-4xl">Every passing second witnesses over 60,000 searches taking place.</h2>
<p class="font-normal text-xl mt-8">
  In 2024, SEO isn't just about securing top rankings for trendy keywords; it's about ensuring visibility precisely when it counts. Our adept team of SEO specialists meticulously investigates optimal keywords tailored to your business, guaranteeing targeted traffic that translates into tangible results for your business.
</p>

      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center w-full mt-4">
  <div class="w-full flex flex-col progress-bar-container
 items-center mb-4 md:mb-0">
    <div class=" text-center mb-4">
      <div class="custom-progress-bar w-24 md:w-48 mx-8 md:mx-14">
        <CircularProgressbar value={93} text={`${93}%`} />
      </div>
      <p class="progress-bar-text text-center mt-2">The starting point for most online experiences is a search engine</p>
    </div>
    
    <div class="text-center mb-4">
      <div class="custom-progress-bar w-24 md:w-48 mx-8 md:mx-14">
        <CircularProgressbar value={75} text={`${75}%`} />
      </div>
      <p class="progress-bar-text text-center mt-2">The majority of individuals do not navigate beyond the initial page of search results</p>
    </div>
    
    <div class="text-center mb-4">
      <div class="custom-progress-bar w-24 md:w-48 mx-8 md:mx-14">
        <CircularProgressbar value={61} text={`${61}%`} />
      </div>
      <p class="progress-bar-text text-center mt-2">Users typically conduct research on a product before deciding to buy it</p>
    </div>
  </div>
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
        <section className="w-full py-6 md:py-12 lg:py-16 border-t back-section">
          <div className="container flex flex-col gap-4 px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tighter">Why SEO Still Matters: The Power of Online Visibility</h2>
              <p className="max-w-full md:max-w-2xl text-sm md:text-base lg:text-lg xl:text-xl text-blue-300">
                Most internet users begin their session by searching for something—that something is a need. People use the internet to fulfill their need for information, whether it’s settling a bet on who the 14th president of India was (A. P. J. Abdul Kalam, by the way) or finding a local restaurant, perfect piece of clothing, or the ideal contractor.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tighter">What Does SEO Mean?</h2>
              <p className="max-w-full md:max-w-2xl text-sm md:text-base lg:text-lg xl:text-xl text-blue-300">
                SEO is all about making sure customers find your business online. We use smart strategies to get more people visiting your website through search engines. At Amax, we're the key to unlocking your online success. Our team harnesses the latest in SEO, rooted in top-notch digital marketing techniques. We're here to amplify your website's organic traffic and elevate your search engine rankings for carefully chosen keywords and long-tail phrases that drive potential customers to your site. When it comes to online marketing, SEO is the cornerstone. However, finding the right SEO partner can be a challenge. That's where our SEO experts come in. We make it easy for you by crafting a tailored SEO strategy that aligns perfectly with your objectives and budget. Discover why we're known as the best SEO services provider in India. We specialize in local SEO services for small businesses like yours. No need to search endlessly for 'local SEO services near me.' We're right here, offering on-page SEO services and much more. Choose Amax for affordable, effective SEO services that take your online presence to the next level.
              </p>
            </div>
          </div>
        </section>






      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Define the regions for which pages should be generated
  const regions = ['India', 'Mumbai', 'Delhi-NCR', 'Bangalore', 'Kolkata', "Pune", "Chennai"];

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


