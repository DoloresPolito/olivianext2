import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";


const Menu = ({ open, setOpen, view, info }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <StyledMenu open={open} view={view}>
      <Tabs open={open} setOpen={setOpen} view={view} info={info}/>
      <section>
        <LanguageButton onClick={() => i18n.changeLanguage("es")}>
          ES
        </LanguageButton>
        /
        <LanguageButton onClick={() => i18n.changeLanguage("en")}>
          EN
        </LanguageButton>
      </section>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`

  section {
    position: absolute;
    margin-top: 220px;
    left: 11px;
    align-self: center;
    font-size: 14px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: #EAE9E5; */
  background-color: ${(props) => (props.view === "oliviapollitzer" || props.view === "oliviapollitzer?services" ? " #EAE9E5 !important" : "#f6f6f6 !important")};

  text-align: left;
  padding: 150px 100px 30px 30px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom:0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};


`;

const LanguageButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
color:#959985;
/* font-family: "Montserrat"; */
font-weight: 900;
font-size: 16px;
line-height: 14px;
text-decoration: none;
font-family: "Bebas Neue", cursive;
letter-spacing: 2px;



`;

export default Menu;
