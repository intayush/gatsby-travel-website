import React from "react"
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
            An About Us page helps your company make a good first impression,
            and is critical for building customer trust and loyalty. An About Us
            page should make sure to cover basic information about the store and
            its founders, explain the company's purpose and how it differs from
            the competition, and encourage discussion and interaction. Here are
            some free templates, samples, and example About Us pages to help
            your ecommerce store stand out from the crowd.
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
  font-size: 90px;
  font-family: "Enriqueta";
  font-weight: 100;
  text-align: center;
  color: white;
`

const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.p`
  font-size: 36px;
  line-height: 1.5;
  color: white;
  font-weight: 100;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (max-width: 1250px) {
    font-size: 24px;
  }

  @media screen and (max-width: 670px) {
    font-size: 16px;
  }
`

export default AboutUs
