import React from "react";
import styled from "styled-components";
import picture from "../../public/assets/photos/bio3.png";
import instagram from "../../public/assets/icons/instagram/instagram-white.png";
import linkedin from "../../public/assets/icons/linkedin/linkedin-white.png";
import { motion } from "framer-motion";
import Footer from "../sections/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";

const About = (props) => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        exit={{ opacity: 0 }}
      >
        <Navbar info={props.navbar}/>
        <Section >
          <Image src={picture} alt='background' layout="fill" objectFit="cover" />
          <Box
            initial={{ x: "-70vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.75,
              bounce: 0.1,
            }}
          >
            <Content>
              <H2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
              >
                {" "}
                {props.about.title}
              </H2>
              <BoldLine
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
              />
              <p>{props.about.text}</p>
            </Content>

            <Social>
              <Circle>
                <a
                  href="https://www.instagram.com/olipollitzer/"
                  target="_blank"
                >
                  <Image src={instagram} className="social" />
                </a>
              </Circle>
              <Circle>
                <a
                  href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                  target="_blank"
                >
                  <Image src={linkedin} className="social" />
                </a>
              </Circle>
            </Social>
          </Box>
        </Section>
      </motion.div>


      <Footer view="bio" info={props.footer} />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      about: response.default.about,
      footer:response.default.footer,
      navbar: response.default.navbar
    },
  };
}

const Section = styled.div`
  width: 100%;
  height: 90vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  /* background: url(${picture}) no-repeat center top; */
  background-size: cover;
  position: fixed;
  z-index: -1;

`;

const Box = styled(motion.div)`
  position: absolute;
  top: 180px;
  left: 0px;
  width: 620px;
  height: 500px;
  background-color: #a6aa97;
  margin-right: 190px;
  opacity: 0.9;

  @media only screen and (max-width: 1000px) {
    width: 550px;
    height: 450px;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    top: 80px;
  }

  img {
    opacity: 0.8;
    height: 320px;
    width: 450px;
    margin-left: 100px;
    border-radius: 4px;
  }

  .social {
    height: 25px;
    width: 25px;
    /* margin-top: 15px; */
    /* margin-left: 15px; */
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1000px) {
    height: 400px;
  }

  @media only screen and (max-width: 550px) {
    justify-content: center;
  }

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.2px;
    line-height: 35px;
    color: #ffffff;
    margin-top: 50px;
    text-align: left;
    font-weight: 500;

    @media only screen and (max-width: 1000px) {
      margin-top: 20px;
      line-height: 30px;
    }
    @media only screen and (max-width: 550px) {
      /* font-size: 13px; */
    }
  }
`;

const H2 = styled(motion.h2)`
  color: #ffffff;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 50px;
  @media only screen and (max-width: 1000px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 550px) {
    margin-top: 150px;
  }
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 40px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 20px;

  @media only screen and (max-width: 1000px) {
    margin-left: 40px;
    margin-top: -30px;
  }

  @media only screen and (max-width: 550px) {
    margin-left: 30px;
    margin-top: 100px !important;
  }

  img {
    :hover {
      scale: 1.1;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #ffffff;
  margin-left: 20px;

  img {
    margin-left: 0px;
  }
`;
export default About;
