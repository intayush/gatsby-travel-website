import React, { useState, useEffect, useRef } from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import Icons from "../data/MenuIcons"
import MobileMenu from "./MobileMenu"

const Header = ({ currentTheme }) => {
  const ref = useRef(null)
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const menuCloseHandler = () => {
    setIsOpen(false)
  }

  const goToHome = () => {
    navigate(`/`)
  }

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScroll(true)
      if (ref.current) {
        ref.current.style.height = "60px"
      }
    } else {
      if (ref.current) {
        ref.current.style.height = "80px"
      }
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <Nav active={scroll ? true : false} id="topNav" ref={ref}>
      <MobileMenu isOpen={isOpen} closeMenu={menuCloseHandler} />
      <StaticImage
        src={`../assets/svg/logo.svg`}
        height={65}
        alt=""
        placeholder="tracedSVG"
        objectFit="contain"
        onClick={goToHome}
        style={{
          cursor: "pointer",
        }}
      />
      <Bars
        $active={scroll}
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
  background: ${({ active, theme }) =>
    active ? theme.background.secondary : "transparent"};
  height: 80px;
  display: flex;
  padding: 0.5rem;
  z-index: 100;
  position: sticky;
  top: 0;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    background: ${({ active, theme }) =>
      active ? theme.background.secondary : "transparent"};
    transition: 0.8s all ease;
  }
`

const NavLink = styled.a`
  color: ${({ active, theme }) => (active ? theme.color.primary : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    background: ${({ active, theme }) =>
      active ? theme.background.secondary : "transparent"};
    transition: 0.8s all ease;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: ${({ $active, theme }) => ($active ? theme.color.primary : "#ffffff")};
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
