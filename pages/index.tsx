import Head from 'next/head';
import { FC } from 'react';
import Hero from './home';

const index: FC = () => {
  return (
    <div className="h-screen bg-bgColor">
      <Head>
        <title>Codeation.io next-js template</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Hero />
    </div>
  );
};

export default index;
