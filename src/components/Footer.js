import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
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
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/about">About</FooterLink>
        </FooterLinkItems>
        <SocialIcons>
          <FaFacebook size={40} />
          <FaInstagram size={40} />
          <FaWhatsapp size={40} />
        </SocialIcons>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  padding: 3rem 2rem;
  color: #000;
  background: #fafafb;
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
  color: #3d3d4e;

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

export default Footer
