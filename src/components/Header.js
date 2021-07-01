import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import logo from "../assets/images/logo.png"
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
    <Nav active={scroll}>
      <MobileMenu isOpen={isOpen} closeMenu={menuCloseHandler} />
      <StyledImg src={logo} alt={""} />
      <Bars
        active={scroll}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      <NavMenu>
        {MenuData.map((item, key) => {
          return (
            <NavLink key={`navitem_${key}`} to={item.link} active={scroll}>
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

const NavLink = styled(Link)`
  color: ${({ active }) => (active ? "#000000" : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    background: ${({ active }) => (active ? "#000000" : "#ffffff")};
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

const StyledImg = styled.img`
  height: clamp(50%, 93%, 100%);
  object-fit: cover;
  object-position: bottom;
`
