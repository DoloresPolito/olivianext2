import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from "react-scroll-parallax";
import { appWithTranslation } from "next-i18next";
import {Bebas_Neue, Montserrat} from '@next/font/google'


const bebasneue = Bebas_Neue({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-bebasneue',

})

const montserrat = Montserrat({
  subsets:['latin'],
  weight:['300', '400','500','600'],
  variable:'--font-montserrat',

})

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Olivia Pollitzer </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Edición y Escritura" />
      </Head>
      <ParallaxProvider>
        <GlobalStyles />

        <div className={` ${bebasneue.variable} ${montserrat.variable} font-sans`}>
        
          <Component {...pageProps} />
        </div>
      </ParallaxProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
