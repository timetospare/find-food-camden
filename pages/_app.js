import '../styles/globals.css';
import fire from '../fire';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Footer from '../components/Footer';
import scrollToTop from '../methods/scrollToTop'

const db = fire.firestore();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
      scrollToTop()
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
