import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "Top Digital Marketing Agency in India | AMAX",
  siteName: "AMAX Agency",
  description:
    "Discover exceptional website design and development by AMAX Agency. We create captivating, SEO-friendly sites with top-notch Graphic and UI/UX design.",  // change base url of your web (without '/' at the end)
  // url: 'https://next-landing-vpn.vercel.app',
  url: "https://www.amaxagency.com",
  // <link rel="canonical" href="https://www.amaxagency.com/" />
  type: "website",
  keywords: `Website design, Website development, SEO optimization, Customized websites, Graphic design, UI/UX design, User-friendly websites, Visually captivating websites, Web design services, Web development services`,

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
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta content={meta.description} name="description" />
      <meta content={meta.keywords} name="keywords" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta
        name="image"
        property="og:image"
        content="https://www.amaxagency.com/assets/AX-02.svg"
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta
        name="twitter:image"
        content="https://www.amaxagency.com/assets/AX-02.svg"
      />
  
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
      <script>
!function(f,b,e,v,n,t,s)
{ `if (f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)`}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '6672572766107057');
fbq('track', 'PageView');
</script>

<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=6672572766107057&ev=PageView&noscript=1"
/></noscript>


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
    href: "/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-icon-180x180.png",
  },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#F59A9A",
  },
  {
    rel: "icon",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },
];

export default SeoHead;
