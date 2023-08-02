import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from 'react-scroll-parallax'
import {appWithTranslation} from "next-i18next"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Olivia Pollitzer </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Edición y Escritura"
        />
      </Head>
  <ParallaxProvider>
          <GlobalStyles />
      <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default appWithTranslation(MyApp);