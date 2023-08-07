import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Tabs from '../components/Tabs'
import Hamburger from 'hamburger-react'
import Link from 'next/link';
// import { Container } from '../styles/texts'
import Image from 'next/image'
// import logo from "../../public/assets/logo-navbar.svg"
import instagram from "../../public/assets/icons/instagram/instagram-blue.png";

const Navbar2 = () => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    handleResize() // Establecer el ancho inicial

    window.addEventListener('resize', handleResize) // Agregar listener de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener('resize', handleResize) // Eliminar listener de evento al desmontar el componente
    }
  }, [])
  const [isOpen, setOpen] = useState(false)
  const medium = 700

  return (
    <NavbarSection>
      <NavbarContainer className={!isOpen && 'isClosed'}>
        <Link href="/"><Logo src={instagram} alt="mimic finance" /></Link>
        {width >= medium ? (
          <Tabs mode={'large'} />
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" label="menu"  />
            <Menu open={isOpen} />
          </>
        )}
      </NavbarContainer>
    </NavbarSection>
  )
}

const Logo = styled(Image)`
  @media only screen and (max-width: 700px) {
    height: 37px;
    width: 111px;
  }
`

const NavbarSection = styled.section`
  z-index: 100;
  background: transparent;
  background: #121418;
  @media only screen and (max-width: 700px) {
    background: #1b1f24;
  }
  position: fixed;
  top: 0;
  width: 100%;
  margin: auto;
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: white;
  }

  .hamburger-react :nth-child(2) {
    background: #1b1f24 !important;
  }
  .isClosed .hamburger-react :nth-child(3) {
    left: 22px !important;
    width: 18px !important;
  }
`

export const Container = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1140px;
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    max-width: 95%;
    margin: 0 24px;
    padding: 24px 0;
  }

`

const NavbarContainer = styled(Container)`
  padding: 24px 0;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
`

export default Navbar2
