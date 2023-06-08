import Head from 'next/head';

export default function BreadcrumbData({ data }) {
  return (
    <Head>
      <script
        key="structured-data1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}