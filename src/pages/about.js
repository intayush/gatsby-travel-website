import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import BackgroundSlider from "react-background-slider"

import Layout from "../components/layout"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Button from "../components/generic/Button"
import Seo from "../components/seo"
import image1 from "../assets/images/slide1.jpg"
import image2 from "../assets/images/aboutus1.jpg"
import image3 from "../assets/images/aboutus2.jpg"

const AboutUs = () => {
  const goToContatsUs = () => {
    navigate(`/contact`)
  }

  return (
    <Layout>
      <GlobalStyle />
      <Seo title="About Us" />
      <Container>
        <Heading>About Us</Heading>
        <BackgroundSlider
          images={[image1, image2, image3]}
          duration={10}
          transition={2}
        />
        <Content>
          <TextContainer>
            Nurtured from the seed of a single great idea - to empower the
            traveller - Vacation Mantra Holidays is a pioneer in India’s online
            travel industry. We pride ourselves on organising high-quality
            tours, chosen and organised by experts. Founded in the year 2020,
            VMH came to life to empower the Indian traveller with instant
            bookings and comprehensive choices. The company initiated its
            journey serving the Indian travel market offering a range of
            best-value products and services powered by technology and
            round-the-clock customer support.
            <br />
            We believe that we have been able to develop relationships across
            our portfolio of suppliers for airlines, hotels, holiday packages,
            buses and taxis. We have dedicated teams managing our existing
            relationships and enhancing and developing new relationships with
            airlines and hotel chains.
            <br />
            Our products and services are organized primarily in the following
            segments:
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <li>1) Airline tickets</li>
              <li>2) Hotels and holiday packages</li>
              <li>3) Other travel services</li>
            </ul>
          </TextContainer>
          <Button
            as="button"
            type="submit"
            primary="true"
            round="true"
            css={`
              height: 60px;
              font-size: 24px;

              @media screen and (max-width: 786px) {
                width: 100%;
                min-width: 250px;
                height: 50px;
              }
            `}
            onClick={goToContatsUs}
          >
            Contact Us
          </Button>
        </Content>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: 5vh;
  padding-right: 5vh;
`

const Heading = styled.h1`
  font-size: clamp(1.5rem, 10vw, 90px);
  font-family: "Enriqueta";
  font-weight: 100;
  text-align: center;
  color: white;
`

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.p`
  font-size: clamp(0.5rem, 2vw, 28px);
  line-height: 1.5;
  color: white;
  font-weight: 100;
  text-align: center;
  margin-bottom: 24px;
`

export default AboutUs
