import '../styles/globals.scss';

import Script from 'next/script';
import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeationApp: FC<{ Component: typeof Component; pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Script async src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}`} strategy="worker" />
    </>
  );
};

export default CodeationApp;
