
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <SeoHead title='AMAX Agency | Professional Website Design and Development Services' />
      <Layout>
        <Hero />
        <Service />
        <Pricing />
      </Layout>
    </>
  );
}
