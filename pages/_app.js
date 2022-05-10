import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('tw-elements');
  }, []);

  return (
    <div className="flex justify-center">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
