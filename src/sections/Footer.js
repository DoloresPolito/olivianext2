import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../public/assets/footer-olivia pollitzer__Black.png";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instagram from "../../public/assets/icons/instagram/instagram-white.png";
import linkedin from "../../public/assets/icons/linkedin/linkedin-white.png";
import mail from "../../public/assets/icons/mail/email-white.png";
import { Link as SmoothLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ info }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [width, setWidth] = useState(null);
  const [view, setView] = useState();

  useEffect(() => {
    //     setView(window.location.href.split("/")[3]);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Establecer el ancho inicial

    window.addEventListener("resize", handleResize); // Agregar listener de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener de evento al desmontar el componente
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <FooterSection mode={width}>
      {width > 800 ? (
        <>
          <FooterContainer mode={width} ref={ref}>
            <motion.div>
              {" "}
              <ImageDiv>
                <Image src={logo} alt="logo" />
              </ImageDiv>
            </motion.div>

            <Column1 animate={animation}>
              <FooterTitle>{info.title}</FooterTitle>
              <section>
                <Circle>
                  <a href="mailto:oliviapollitzer@gmail.com">
                    {" "}
                    <Image src={mail} alt="mail" />
                  </a>
                </Circle>
                <Circle>
                  <a
                    href="https://www.instagram.com/olipollitzer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Image src={instagram} alt="instagram" />
                  </a>
                </Circle>
                <Circle>
                  <a
                    href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Image src={linkedin} alt="linkedin" />
                  </a>
                </Circle>
              </section>
            </Column1>

            <Column2 animate={animation}>
              {" "}
              <ul className="list">
                {view == "oliviapollitzer" ||
                view == "oliviapollitzer?services" ? (
                  <>
                    <SmoothLink
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={70}
                      duration={800}
                      className="navlist"
                    >
                      <li style={{ cursor: "pointer" }}>{info.services}</li>
                    </SmoothLink>
                  </>
                ) : (
                  <>
                    {/* <RouterLink to="/oliviapollitzer?services">
                      {" "} */}
                    <Link href="/">
                      <li>{info.services}</li>
                    </Link>
                    {/* </RouterLink> */}
                  </>
                )}

                <Link href="/work">
                  <li> {info.work}</li>
                </Link>

                <Link href="/bio">
                  <li>{info.about}</li>{" "}
                </Link>

                <Link href="/contact">
                  <li>{info.contact}</li>
                </Link>
              </ul>
            </Column2>

            <CopyRight animate={animation}>
              <p> {info.rights}</p>
            </CopyRight>
          </FooterContainer>
        </>
      ) : (
        <MobileSection>
          <MobileContainer>
            <Div>
              <div>
                <FooterTitle>{info.title}</FooterTitle>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Circle>
                    <a href="mailto:oliviapollitzer@gmail.com">
                      {" "}
                      <Image src={mail} alt="mail" />
                    </a>
                  </Circle>
                  <Circle>
                    <a
                      href="https://www.instagram.com/olipollitzer/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <Image src={instagram} alt="instagram" />
                    </a>
                  </Circle>
                  <Circle>
                    <a
                      href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <Image src={linkedin} alt="linkedin" />
                    </a>
                  </Circle>
                </div>
              </div>

              <ul className="list">
                {view == "oliviapollitzer" ||
                view == "oliviapollitzer?services" ? (
                  <>
                    <SmoothLink
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={70}
                      duration={800}
                      className="navlist"
                    >
                      <li style={{ cursor: "pointer" }}>{info.services}</li>
                    </SmoothLink>
                  </>
                ) : (
                  <>
                    {/* <RouterLink to="/oliviapollitzer?services">
                      {" "} */}
                    <Link href="/">
                      <li>{info.services}</li> {/* </RouterLink> */}
                    </Link>
                  </>
                )}

                <Link href="/work">
                  <li> {info.work}</li>{" "}
                </Link>

                <Link href="/bio">
                  <li>{info.about}</li>{" "}
                </Link>

                <Link href="/contact">
                  <li>{info.contact}</li>
                </Link>
              </ul>
            </Div>
            <div>
              {" "}
              <Logo2 src={logo} />
            </div>

            <CopyRight2>
              <p> {info.rights}</p>
            </CopyRight2>
          </MobileContainer>
        </MobileSection>
      )}
    </FooterSection>
  );
};

const FooterSection = styled.div`
  height: 300px;
  background-color: #5f5f67;
  color: #f6f6f6;
  display: flex;
  width: 100%;
  margin: auto;
  height: ${(props) => (props.mode > 800 ? "300px" : "400px")};

  @media only screen and (max-width: 450px) {
  }
`;

const FooterContainer = styled(motion.div)`
  display: flex;
  height: 200px;
  width: 85%;
  margin: auto;
  position: relative;

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  position: relative;
  left: 20px;
  width: 380px;
  top: 10px;

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;

const ImageDiv = styled.div`
  /* position: relative; */
  width: 10px;
  height: 10px;
  /* left: 20px;
  width: 40px; */
  /* top: 10px; */
  background-color: red;

  img {
    width: 330px;
    height: 180px;
  }

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;

const Logo2 = styled.img`
  width: 240px;
`;

const Column1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 310px;
  top: 50px;

  section {
    display: flex;
    flex-direction: row;
    /* padding: 10px; */
    margin-left: -20px;

    a {
      /* margin: 5px; */
      /* margin-left: 25px; */
    }
  }

  img {
    height: 20px;
    width: 20px;
    /* margin-top: 10px; */
  }

  @media only screen and (max-width: 1150px) {
    right: 160px;
    ul {
      font-size: 13px;
    }
  }
`;

const Column2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-right: 10px;
  position: absolute;
  right: 120px;

  ul {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
  }

  li {
    text-decoration: underline #5f5f67;
    color: #f6f6f6;
    font-weight: 400;
    margin: 10px;
    height: 20px;
  }

  @media only screen and (max-width: 1150px) {
    right: 30px;
    ul {
      font-size: 13px;
    }
  }
`;

const FooterTitle = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 5px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0px;
    margin-top: 0px;
    margin-left: 38px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

const CopyRight = styled(motion.div)`
  position: absolute;
  bottom: -40px;
  left: 90px;

  p {
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1150px) {
    left: 30px;
  }
`;

const CopyRight2 = styled.div`
  display: flex;

  p {
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 50px;

  ul {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    margin-right: 40px;

    @media only screen and (max-width: 450px) {
      font-size: 13px;
      margin-right: 0px;
    }
  }

  li {
    text-decoration: underline #5f5f67;
    color: #f6f6f6;
    font-weight: 400;
    margin: 10px;
    height: 20px;

    @media only screen and (max-width: 450px) {
      margin: 3px;
    }
  }

  img {
    height: 20px;
    width: 20px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    /* margin-left: -20px; */

    div {
      /* margin-left: -30px; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin-top: 10px;
      @media only screen and (max-width: 450px) {
      }

      a {
        /* margin: 5px;
        margin-left: 25px; */
      }
    }
  }
  @media only screen and (max-width: 450px) {
    margin-left: -10px;
    margin-bottom: 20px;
  }
`;

const MobileSection = styled.div`
  display: flex;
  justify-content: center !important;
  margin: 0 auto;
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
  margin-left: 10px;

  img {
    margin-left: 0px;
  }

  @media only screen and (max-width: 800px) {
    img {
      margin-top: 0px;
    }
  }
`;
export default Footer;
