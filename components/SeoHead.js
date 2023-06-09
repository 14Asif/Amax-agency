import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "Professional Website Design and Development Services | AMAX Agency",
  siteName: "AMAX Agency",
  description:
    "AMAX Agency offers professional website design and development services tailored for SEO success. Our experienced team creates visually stunning, user-friendly websites optimized for search engines. Boost your online visibility, engage visitors, and convert leads into customers with our cutting-edge web solutions. Partner with AMAX Agency to elevate your brand's online presence. Contact us today for exceptional design, seamless functionality, and maximum SEO performance.",
  // change base url of your web (without '/' at the end)
  // url: 'https://next-landing-vpn.vercel.app',
  type: "website",
  keywords: `Professional website design and development services Tailored SEO strategies for online success Experienced online marketing professionals Expertise in digital marketing and internet marketing strategies Proven track record in online advertising, SEO, and SEM Social media marketing specialists driving engagement and growth Email marketing experts for effective customer communication Content marketing strategists creating compelling and SEO-friendly content Results-driven online marketing approach with advanced analytics Cutting-edge online marketing techniques for optimal performance Trusted industry leaders in online marketing solutions Dedicated to driving online success through comprehensive strategies Constantly adapting to online marketing trends and consumer behavior `,
  robots: "follow, index",
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image: "https://www.amaxagency.com/assets/AX-02.svg",
  author: "Sayed Asifali",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta content={meta.keywords} name="keywords" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content="https://www.amaxagency.com/assets/AX-02.svg" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content="https://www.amaxagency.com/assets/AX-02.svg" />
      <link rel="canonical" href="https://www.amaxagency.com/contact" />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#4479d8" />
      {/* <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      /> */}
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#4479d8" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/public/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/public/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/public/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/public/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/public/favicon/apple-icon-180x180.png",
  },
  {
    rel: "mask-icon",
    href: "/public/favicon/safari-pinned-tab.svg",
    color: "#F59A9A",
  },
  {
    rel: "icon",
    href: "/public/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/public/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/public/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/public/favicon/favicon-96x96.png",
  },
];

export default SeoHead;
