import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import Icons from "../data/MenuIcons"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const menuCloseHandler = () => {
    setIsOpen(false)
  }

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <Nav active={scroll ? true : false}>
      <MobileMenu isOpen={isOpen} closeMenu={menuCloseHandler} />
      <StaticImage
        src="../assets/svg/logo.svg"
        height={65}
        alt=""
        placeholder="tracedSVG"
      />
      <Bars
        active={scroll}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      <NavMenu>
        {MenuData.map((item, key) => {
          return (
            <NavLink key={`navitem_${key}`} href="/" active={scroll}>
              {Icons[key]}
              {item.title}
            </NavLink>
          )
        })}
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    background: ${({ active }) => (active ? "#ffffff" : "transparent")};
    transition: 0.8s all ease;
  }
`

const NavLink = styled.a`
  color: ${({ active }) => (active ? "#000000" : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    background: ${({ active }) => (active ? "#ffffff" : "transparent")};
    transition: 0.8s all ease;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: ${({ active }) => (active ? "#000000" : "#ffffff")};
  transition: 0.8s all ease;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 786px) {
    display: none;
  }
`
