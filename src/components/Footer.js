import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = ({ themeChangeHandler }) => {
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDesc>
          <StaticImage
            src="../assets/svg/logo.svg"
            height={65}
            alt=""
            placeholder="tracedSVG"
            objectFit="contain"
          />
          <p>We try to create the best experience for out customers</p>
          <ThemeSwitchContainer>
            <ThemeSwitch type="checkbox" onChange={themeChangeHandler} />
          </ThemeSwitchContainer>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/about">About</FooterLink>
        </FooterLinkItems>
        <SocialIcons>
          <SocialLink
            href="https://instagram.com/vacation_mantra_holidays/"
            target="_blank"
          >
            <FaFacebook size={40} />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/vacation_mantra_holidays/"
            target="_blank"
          >
            <FaInstagram size={40} />
          </SocialLink>
          <SocialLink href="https://wa.link/xh38ry" target="_blank">
            <FaWhatsapp size={40} />
          </SocialLink>
        </SocialIcons>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  position: relative;
  padding: 3rem 2rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.background.secondary};
`
const FooterLinkWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const FooterDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 1rem 0;
    font-size: 12px;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem;

  @media screen and (max-width: 400px) {
    paddong: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    color: #f26a2e;
    transition: 0ms.3s ease-out;
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    color: #35859a;
    transform: scale(1.2);
  }
  &:active {
    color: ${({ theme }) => theme.color.tertiary};
  }
`
const ThemeSwitchContainer = styled.main`
  text-align: center;
`

const ThemeSwitch = styled.input`
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin-bottom: 1.5em;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset;
  color: #fdea7b;
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :before,
  :after {
    content: "";
    display: block;
  }

  :before {
    background-color: #d7d7d7;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;
  }

  :after {
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
        50% 100%,
      repeating-linear-gradient(
          90deg,
          #bbb 0,
          #bbb,
          #bbb 20%,
          #999 20%,
          #999 40%
        )
        0 50% / 50% 100%,
      radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;
  }

  :checked {
    background-color: rgba(0, 0, 0, 0.45);
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
  }

  :checked:before {
    background-color: currentColor;
    transform: translateX(125%);
  }

  :checked:after {
    border-left-color: currentColor;
    transform: translateX(-2.5%) rotateY(180deg);
  }

  :focus {
    /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
    outline: 0;
  }
`

export default Footer
