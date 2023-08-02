import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toplogo from "../../public/assets/logo2/op-small.png";
// import { Link as SmoothLink } from "react-scroll";
import Link from 'next/link';
const Tabs = ({ mode, open, setOpen, view, info}) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TabsBox mode={mode}>
      {/* <Link to="/oliviapollitzer" onClick={() => handleClose()}>
        {" "}
        <Logo src={toplogo} />
      </Link> */}

      {view == "oliviapollitzer" || view == "oliviapollitzer?services" ? (
        <>
          <SmoothLink
            to="services"
            spy={true}
            smooth={true}
            offset={70}
            duration={800}
            className="navlist"
            onClick={() => handleClose()}
          >
            {info.cero}
          </SmoothLink>
        </>
      ) : (
        <>
          <Link href="/oliviapollitzer?services" onClick={() => handleClose()}>
          {info.cero}
          </Link>
        </>
      )}

      <Link href="/work" onClick={() => handleClose()}>
      {info.one}
      </Link>
      <Link href="/bio" onClick={() => handleClose()}>
      {info.two}
      </Link>
      <Link href="/contact" onClick={() => handleClose()}>
      {info.three}
      </Link>
    </TabsBox>
  );
};

// NAVBAR ABIERTA (NO HAMBURGER)

// const Logo = styled.img`
//   cursor: pointer;
//   position: absolute;
//   left: 40px;
//   top: 120px;
//   height: 90px;
//   width: 60px;
// `;

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 5;
  margin-top: 40px;

  a {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    border: 0px solid;
    display: flex;
    align-items: center;
    width: 100px;

    height: 40px;
    padding: 10px;
    margin: 0px 35px 0 0;
    &:hover,
    &:active,
    &:focus {
    }
  }
`;

export default Tabs;
