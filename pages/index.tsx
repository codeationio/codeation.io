import Navbar from 'components/Navbar';
import Head from 'next/head';
import { FC } from 'react';

import Hero from '../components/Hero';

const index: FC = () => {
  return (
    <div className="h-screen bg-light-grey">
      <Head>
        <title>Codeation.io next-js template</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
};

export default index;
