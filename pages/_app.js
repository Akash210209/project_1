// pages/_app.js
import '../src/App.css'; // Import global CSS here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
