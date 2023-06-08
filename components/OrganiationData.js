
import Head from 'next/head';
function OrganizationData({data}) {
  return (
    <Head>
      <script
        key="structured-data3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}

export default OrganizationData;
