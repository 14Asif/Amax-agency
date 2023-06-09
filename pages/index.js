
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Service from "../components/Service";
import { NextSeo } from "next-seo";
import BreadcrumbData from "@/components/Breadcrumdata";
import OrganizationData from "@/components/OrganizationData";
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
        title="AMAX Agency | Professional Website Design and Development Services"
        description=  "AMAX Agency offers top-notch website design and development services tailored for SEO success. Our expert team creates visually stunning and user-friendly websites optimized for search engines. Boost your online visibility, engage visitors, and convert leads into customers with our cutting-edge web solutions. Partner with AMAX Agency to elevate your brand's online presence. Contact us today for exceptional design, seamless functionality, and maximum SEO performance."
        keywords="Experienced online marketing professionals,Expertise in digital marketing,
        Knowledgeable online marketing team,
          Specialized in internet marketing strategies,
          Proven track record in online advertising,
          Extensive experience in SEO and SEM,
          Social media marketing specialists,
          Email marketing experts,
          Content marketing strategists,
          Results-driven online marketing approach,
          Advanced analytics and data-driven insights,
          Cutting-edge online marketing techniques,
          Dedicated to driving online success,
          Comprehensive understanding of online consumer behavior,
          Online marketing industry leaders,
          Passionate about delivering online marketing excellence,
          Customer-focused online marketing solutions,
          Constantly adapting to online marketing trends,
          Trusted by clients for online marketing expertise"
      />

        <Layout>
        <Hero />
        <Service />
        <Pricing />
      </Layout>
    </>
  );
}
