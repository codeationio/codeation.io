import '../styles/globals.scss';

import Head from 'next/head';
import Script from 'next/script';
import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeationApp: FC<{ Component: typeof Component; pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Codeation.io - BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS</title>
      </Head>
      <Script
        async
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}`}
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
  );
};

export default CodeationApp;
