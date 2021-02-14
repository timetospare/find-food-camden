import Document, { Html, Head, Main, NextScript } from "next/document";
import router from "next/router";

import { GA_TRACKING_ID, METOMIC_ID } from "../config.json";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src={`https://config.metomic.io/config.js?id=${METOMIC_ID}`}
            crossOrigin
            charSet="utf-8"
          ></script>
          <script
            src="https://consent-manager.metomic.io/embed.js"
            crossOrigin
            charSet="utf-8"
          ></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.svg" />

          {GA_TRACKING_ID && (
            <script
              type="text/x-metomic"
              data-micropolicy="statistics"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
          )}
          {GA_TRACKING_ID && (
            <script
              type="text/x-metomic"
              data-micropolicy="statistics"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          )}
        </Head>
        <body
          className={`${
            process.env.NODE_ENV === "development" ? "debug-screens" : ""
          } `}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
