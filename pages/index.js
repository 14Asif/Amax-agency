
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
      title="Professional Website Design & Development Services | AMAX Agency"
      description=    "AMAX Agency provides exceptional website design and development services, customized for optimal SEO performance. Our team creates visually captivating and user-friendly websites, with a strong emphasis on Graphic and UI/UX design. Explore our expertise now."
      keywords="Website design, Website development, SEO optimization, Customized websites, Graphic design, UI/UX design, User-friendly websites, Visually captivating websites, Web design services, Web development services"
 />

        <Layout>
        <Hero />
       

        <Pricing />
      </Layout>
    </>
  );
}
