import '../styles/globals.scss';

import Wrapper from 'components/Wrapper';
import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeationApp: FC<{ Component: typeof Component; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  return <Component {...pageProps} />;
};

export default CodeationApp;
