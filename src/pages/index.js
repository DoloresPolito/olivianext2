import React, { useEffect, useState } from "react";
import logo2 from "../../public/assets/logo3/cuadradoOLI_Grey.png";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Pictures from "../sections/Pictures";
import ScrollToTop from "react-scroll-to-top";
import WorkProgress from "../sections/WorkProgress";
import booksmobile from "../../public/assets/photos/heroextralowmobile.png";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const [width, setWidth] = useState(null);
  const medium = 800;
  const small = 450;

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // const section = location.search.slice(1);

    // if (section) {
    //   const element = document.getElementById(section);
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  }, []);

  return (
    <>
      <Page>
        <Navbar info={props.navbar} />
        {/* {width >= small ? (
          <>
            <CoverSection width={width}>
              <Parallax speed={1}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  style={{ display: "flex", justifyContent: "center" }}
                >


                  <Image src={logo2} alt="logo" className="logo"/>
                </motion.div>
              </Parallax>
            </CoverSection>
          </>
        ) : (
          <>
            <CoverSectionMobile width={width}>
              <Parallax speed={1}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Logo src={logo2} />
                </motion.div>
              </Parallax>
            </CoverSectionMobile>
          </>
        )} */}

        <section id="services">
          <Services info={props.services} />
        </section>
        <section id="work-progress">
          <WorkProgress info={props.workprogress} />
        </section>
        <section id="pictures">
          <Pictures />
        </section>

        {width >= medium ? (
          <>
            <ScrollToTop
              style={{
                backgroundColor: "transparent",
              }}
              color="#5F5F67"
              smooth
            />
          </>
        ) : (
          <></>
        )}
      </Page>
      <Footer info={props.footer} />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      services: response.default.services,
      workprogress: response.default.workprogress,
      footer: response.default.footer,
      navbar: response.default.navbar,
    },
  };
}

export default Home;

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  position: absolute;
  height: 600px;
  width: 600px;
  top: 40px;

  @media only screen and (max-width: 1160px) {
    height: 500px;
    width: 500px;
    top: 80px;
  }

  @media only screen and (max-width: 700px) {
    height: 400px;
    width: 400px;
    top: 110px;
  }

  @media only screen and (max-width: 450px) {
    height: 350px;
    width: 350px;
    top: 15vh !important;
  }

  @media only screen and (max-width: 350px) {
    height: 300px;
    width: 300px;
    top: 15vh !important;
  }
`;

const CoverSection = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  /* height: auto; */

  background-image: url("/assets/photos/heroextralow.jpg");
  background-size: cover;
  background-position: center;


  .logo{

    position: absolute;
  height: 600px;
  width: 600px;
  top: 40px;

  @media only screen and (max-width: 1160px) {
    height: 500px;
    width: 500px;
    top: 80px;
  }

  @media only screen and (max-width: 700px) {
    height: 400px;
    width: 400px;
    top: 110px;
  }

  @media only screen and (max-width: 450px) {
    height: 350px;
    width: 350px;
    top: 15vh !important;
  }

  @media only screen and (max-width: 350px) {
    height: 300px;
    width: 300px;
    top: 15vh !important;
  }

  }

  @media only screen and (max-width: 450px) {
    height: 500px !important;
  }
`;

const CoverSectionMobile = styled.div`
  width: 100%;
  /* height: 100vh !important; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;

  background: url(${booksmobile}) no-repeat center center;
  background-size: cover;

  /* height: calc(100vh - 100px); */

  height: 80vh;
`;
