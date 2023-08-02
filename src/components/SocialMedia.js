import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import mail from "../../public/assets/icons/mail/mail-green.png";
import whatsapp from "../../public/assets/icons/whatsapp/whatsapp-green.png";
import instagram from "../../public/assets/icons/instagram/instagram-green.png";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Circle>
        <a href="mailto:oliviapollitzer@gmail.com">
          {" "}
          <Image
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
            src={mail}
          />
        </a>
      </Circle>
      <Circle>
        <a href="https://www.instagram.com/olipollitzer/" target="_blank">
          <Image
            src={instagram}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </a>
      </Circle>
      <Circle>
        <a
          href="https://api.whatsapp.com/send/?phone=541151082715"
          target="_blank"
        >
          <Image
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5, ease: "easeOut" }}
            src={whatsapp}
          />
        </a>
      </Circle>
    </SocialMediaContainer>
  );
};

const Circle = styled.div`
  height: 40px;
  width: 40px;
  background-color: transparent;
  margin: 0px 10px 0 0;
  border-radius: 50px;
  border:1px solid #6a6f58;
  margin-left: 10px;
  /* background-color: #f0f0f0; */
  :hover {
      scale: 1.1;
    }

  img {
    height: 24px;
    width: 24px;

    margin-left: 7px;
    margin-top: 7px;
 
  }
 

  @media only screen and (max-width: 1045px) {
    height: 40px;
  width: 40px;

    img {
      height: 24px;
    width: 24px;
    margin-left: 7px;
    margin-top: 7px;
    }
  }
`;

const SocialMediaContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  z-index: 100;

  @media only screen and (max-width: 535px) {
    justify-content: flex-start !important;
    }
`;
export default SocialMedia;
