import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";

const Work = (props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar info={props.navbar}/>
        <WorkSection>
          <motion.ul
            style={{ listStyle: "none" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                  <p>{props.work.one.year}</p>
                </WorkDate>
                <Content>
                  <WorkTitle>{props.work.one.title}</WorkTitle>
                  <More>{props.work.one.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.two.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.two.title}</WorkTitle>
                  <More>{props.work.two.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.three.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.three.title}</WorkTitle>
                  <More>{props.work.three.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.four.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.four.title}</WorkTitle>
                  <More>{props.work.four.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.five.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.five.title}</WorkTitle>
                  <More>{props.work.five.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.six.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.six.title}</WorkTitle>
                  <More>{props.work.six.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.seven.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.seven.title}</WorkTitle>
                  <More>{props.work.seven.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.eight.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.eight.title}</WorkTitle>
                  <More>{props.work.eight.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.nine.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.nine.title}</WorkTitle>
                  <More>{props.work.nine.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.ten.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.ten.title}</WorkTitle>
                  <More>{props.work.ten.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.eleven.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.eleven.title}</WorkTitle>
                  <More>{props.work.eleven.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.twelve.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.twelve.title}</WorkTitle>
                  <More>{props.work.twelve.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.thirteen.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.thirteen.title}</WorkTitle>
                  <More>{props.work.thirteen.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.fourteen.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.fourteen.title}</WorkTitle>
                  <More>{props.work.fourteen.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>
                <p>{props.work.fifteen.year}</p>
                </WorkDate>
                <Content>
                <WorkTitle>{props.work.fifteen.title}</WorkTitle>
                  <More>{props.work.fifteen.subtitle}</More>
                </Content>
              </WorkLi>
            </motion.li>
          </motion.ul>
        </WorkSection>
      </motion.div>

      <Footer view="work"    info={props.footer} />
    </Page>
  );
};

export async function getStaticProps({ locale }) {
    const response = await import(`../lang/${locale}.json`);
  
    return {
      props: {
        work: response.default.work,
        footer:response.default.footer,
        navbar:response.default.navbar
      },
    };
  }

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const WorkSection = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  background-color: #eae9e5;
  @media only screen and (max-width: 580px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-bottom: 1px solid #6a6f58;

  @media only screen and (max-width: 580px) {
    width: 80%;
  }
`;

const WorkDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #6a6f58;
    font-family: "Bebas Neue", cursive;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 18px;

    @media only screen and (max-width: 700px) {
      font-size: 16px;
    }
  }

  /* margin-top: 60px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
const WorkTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #6a6f58;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 580px) {
    font-size: 20px;
  }
`;

const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export default Work;
