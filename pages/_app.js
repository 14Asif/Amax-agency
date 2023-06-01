import "../styles/tailwind.css";
import "../styles/slick.css";

import Script from "next/script";
function MyApp({ Component, pageProps }) {
 
 
  return (<>
   <Script 
  strategy="afterInteractive" 
  src="https://www.googletagmanager.com/gtag/js?id=G-GLVDWZN0XH" 
  />

  <Script  strategy="afterInteractive" >
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GLVDWZN0XH');`}
  </Script>
    <Component {...pageProps} />
  </>
);
}

export default MyApp;
