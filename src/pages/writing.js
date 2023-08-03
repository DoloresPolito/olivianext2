import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../sections/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar"
const Writing2 = (props) => {
  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
           <Navbar info={props.navbar}/>
        <WritingSection>
          <WritingSection>
            <section>
              <H2
                initial={{ y: "-40%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {props.writing.title}
              </H2>
              <BoldLine
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
              />

              <Parrafo>
                <div>
                  <BoxText>{props.writing.text3}</BoxText>{" "}
                </div>
                <p> {props.writing.text}</p>
              </Parrafo>

              <Link href="/contact">
                <Text3
                  initial={{ x: "-30vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    bounce: 0.1,
                  }}
                >
                  {props.writing.text2}
                </Text3>
              </Link>
            </section>
          </WritingSection>
        </WritingSection>
      </motion.div>
      <Footer view="writing" info={props.footer} />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      writing: response.default.writing,
      footer: response.default.footer,
      navbar: response.default.navbar,
    },
  };
}

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const WritingSection = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  color: #5f5f67;
  height: auto;
  background-color: #f6f6f6;
  justify-content: center;

  section {
    width: 80%;
    margin: 0 auto;
  }
`;

const H2 = styled(motion.h2)`
  color: #959985;
  /* font-family: "Bebas Neue", cursive; */
  font-family: var(--font-bebasneue);
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 30px;
  margin-left: 20px;
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #959985;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const Text3 = styled(motion.p)`
  /* font-family: "Bebas Neue", cursive; */
  font-family: var(--font-bebasneue);
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  font-weight: 400;
  padding-top: 10px;
  color: #959985;
  width: 600px;
  text-align: justify;
  margin-top: 30px;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  max-width: 100%;
  margin-left: 20px;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }

  :hover {
    font-weight: 500;
  }
`;

const BoxText = styled.p`
  /* font-family: "Montserrat", sans-serif; */
  font-family: var(--font-montserrat);
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 0px;
  color: #fefefe;
  text-align: left;
  text-transform: uppercase;
  padding: 15px;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const Parrafo = styled.div`
  width: 1040;
  height: 440;
  padding: 20px 20px;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 5px;

  /* font-family: "Montserrat", sans-serif; */
  font-family: var(--font-montserrat);
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 500;
  padding-top: 10px;
  color: #5f5f67;
  margin-right: 150px;

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
    margin-right: 0px;
  }

  div {
    width: 250px;
    height: auto;
    float: right !important;
    background-color: #959985;
    color: white;
    margin: 20px;

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
export default Writing2;
