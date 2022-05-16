import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // import("tw-elements");
    import("flowbite");
  }, []);

  return (
    <div className="flex justify-center">
      {/* <Script src="https://www.google-analytics.com/analytics.js" /> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/js/swiffy-slider.min.js"
        crossOrigin="anonymous"
        defer
      />
      <link
        href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/css/swiffy-slider.min.css"
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
