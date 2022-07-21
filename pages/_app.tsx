import '../styles/globals.scss';

import Head from 'next/head';
import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeationApp: FC<{ Component: typeof Component; pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Codeation.io - BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CodeationApp;
