
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

import { NextSeo } from "next-seo";
import BreadcrumbData from "../components/BreadcrumbData";
import OrganizationData from "../components/OrganizationData";

const breadcrumbData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.amaxagency.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: "https://www.amaxagency.com/contact",
    }
  ],
};
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amax Agency",
  url: "https://www.amaxagency.com/",
  logo: "https://www.amaxagency.com/assets/AX-02.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 8169536865",
    contactType: "customer service",
    areaServed: "India",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.instagram.com/amax_agency/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    "https://www.linkedin.com/company/94864061/",
    "https://www.facebook.com/people/Amax-Agency/100093255912768/?mibextid=ZbWKwL",
  ],
};

export default function Home() {
  return (
    <>
          <BreadcrumbData data={breadcrumbData}/>
      <OrganizationData data={organizationData} />
        <NextSeo
        title="Professional Website Design and Development Services | AMAX Agency"
        description=  "AMAX Agency offers professional website design and development services tailored for SEO success. Our experienced team creates visually stunning, user-friendly websites optimized for search engines. Boost your online visibility, engage visitors, and convert leads into customers with our cutting-edge web solutions. Partner with AMAX Agency to elevate your brand's online presence. Contact us today for exceptional design, seamless functionality, and maximum SEO performance."
        keywords="Professional website design and development services Tailored SEO strategies for online success Experienced online marketing professionals Expertise in digital marketing and internet marketing strategies Proven track record in online advertising, SEO, and SEM Social media marketing specialists driving engagement and growth Email marketing experts for effective customer communication Content marketing strategists creating compelling and SEO-friendly content Results-driven online marketing approach with advanced analytics Cutting-edge online marketing techniques for optimal performance Trusted industry leaders in online marketing solutions Dedicated to driving online success through comprehensive strategies Constantly adapting to online marketing trends and consumer behavior"
      />

        <Layout>
        <Hero />
       

        <Pricing />
      </Layout>
    </>
  );
}
