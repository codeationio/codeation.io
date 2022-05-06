import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
