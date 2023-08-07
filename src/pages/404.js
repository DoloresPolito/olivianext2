

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { motion } from "framer-motion";

const PageNotFound = () => {
    // const [t] = useTranslation("global");
  return (
    <>
      <Page>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Section404>
            <h4
              as={motion.h2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              404 <br />
            pagina no encontrada
            </h4>

            <h2>    disculpa las molestias</h2>
            <Link href='/'>Volver a inicio</Link>
          </Section404>
        </motion.div>
      </Page>
    </>
  );
};

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const Section404 = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #eae9e5;

  @media only screen and (max-width: 580px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-family: var(--font-bebasneue);
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;
    text-align: center;

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 35px;
      width: auto;
    }
  }

  h2 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
    font-family: var(--font-montserrat);

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 35px;
      width: auto;
    }
  }
`;

export default PageNotFound;