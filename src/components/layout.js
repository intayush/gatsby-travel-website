import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Hero from "./Hero"
import Trips from "./Trips"
import Section from "./generic/Section"
import { GlobalStyle } from "./styles/GlobalStyles"
import Button from "./generic/Button"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            name
            alt
            img {
              childrenImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  quality: 90
                )
              }
            }
          }
        }
      }
      allInternationalTripsJson {
        edges {
          node {
            name
            alt
            img {
              childrenImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  quality: 90
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Content>
        <Button
          onClick={() => {
            window.location.href = "#hero"
          }}
          round="true"
          css={`
            position: fixed;
            bottom: 3vh;
            right: 2vw;
            z-index: 1;
          `}
        >
          Scroll To Top
        </Button>
        <Header />
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="trips">
          <Trips
            heading="Trending National Holiday Destinations"
            data={data.allTripsJson.edges}
          />
        </Section>
        <Section id="internationalTripstrips">
          <Trips
            heading="International Tour Packages"
            data={data.allInternationalTripsJson.edges}
          />
        </Section>
      </Content>
    </>
  )
}

const Content = styled.div`
  /* height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll; */
`

export default Layout
