import '../styles/globals.scss';

import Wrapper from 'components/Wrapper';
import { Component, FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeationApp: FC<{ Component: typeof Component; pageProps: any }> = ({
  Component,
  pageProps
}) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default CodeationApp;
