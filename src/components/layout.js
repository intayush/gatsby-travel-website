import React, { useRef, useState, useEffect } from "react"
import Loadable from "react-loadable"
import styled from "styled-components"
import Header from "./Header"
import Hero from "./Hero"
import Trips from "./Trips"
//import Carousel from "./generic/Carousel"
import Section from "./generic/Section"
import { GlobalStyle } from "./styles/GlobalStyles"
import Button from "./generic/Button"
import { useStaticQuery, graphql } from "gatsby"

const Loading = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const LoadableComponent = Loadable({
  loader: () => import("./generic/Carousel"),
  loading: Loading,
})

const Layout = () => {
  const ref = useRef(null)
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
                  quality: 85
                )
              }
            }
          }
        }
      }
    }
  `)
  const [isTripsAboutToBeVisible, setIsTripsAboutToBeVisible] = useState(false)
  useEffect(() => {
    let referenceToRef
    const intersectionConfig = {
      root: null,
      threshold: 0,
      rootMargin: "-5px",
    }
    const tripsObserver = new IntersectionObserver((entries, observer) => {
      if (!isTripsAboutToBeVisible && entries[0].isIntersecting) {
        setIsTripsAboutToBeVisible(true)
      }
    }, intersectionConfig)

    if (ref.current) {
      tripsObserver.observe(ref.current)
      referenceToRef = ref.current
    }

    return () => {
      if (referenceToRef) {
        tripsObserver.unobserve(referenceToRef)
      }
    }
  }, [ref, isTripsAboutToBeVisible])

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
            z-index: 50;
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
        <div ref={ref} id="tripSection" />
        <Section id="carousel">
          {isTripsAboutToBeVisible && <LoadableComponent />}
        </Section>
      </Content>
    </>
  )
}

const Content = styled.div`
  padding-bottom: 7vh;
`

export default Layout
