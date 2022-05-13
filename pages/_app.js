import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // import("tw-elements");
    import("flowbite");
  }, []);

  return (
    <div className="flex justify-center">
      <Script src="https://www.google-analytics.com/analytics.js" />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
