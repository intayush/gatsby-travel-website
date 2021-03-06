import React, { useState } from "react"
import useCollapse from "react-collapsed"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { graphql } from "gatsby"
import { GlobalStyle } from "../components/styles/GlobalStyles"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BookNow from "../components/BookNow"
import Modal from "../components/generic/Modal"
import Button from "../components/generic/Button"

const CollapsibleItinerary = ({
  index,
  itinerary,
  heading,
  duration,
  defaultExpanded = false,
  collapsedHeight = 0,
  setIsOpen,
}) => {
  const config = {
    defaultExpanded,
    collapsedHeight,
  }
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config)

  return (
    <ItineraryContainer>
      <ItineraryHeading {...getToggleProps()}>
        <ItinerarySubHeading>
          {heading} {duration}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            {isExpanded ? (
              <StaticImage
                src="../assets/svg/up.svg"
                height={30}
                alt=""
                placeholder="tracedSVG"
                objectFit="contain"
              />
            ) : (
              <StaticImage
                src="../assets/svg/dropdown.svg"
                height={30}
                alt=""
                placeholder="tracedSVG"
                objectFit="contain"
              />
            )}
          </div>
        </ItinerarySubHeading>
        <Button round="true" primary={true} onClick={() => setIsOpen(true)}>
          Book Now
        </Button>
      </ItineraryHeading>
      <ItineraryWrapper {...getCollapseProps()}>
        <ItineraryList>
          {itinerary.map((it, idx) => (
            <ItineraryItem key={`iti-${index}-${idx}`}>
              <TimeStamp>{it.heading}</TimeStamp>
              <ItemTitle>{it.description}</ItemTitle>
            </ItineraryItem>
          ))}
        </ItineraryList>
      </ItineraryWrapper>
    </ItineraryContainer>
  )
}

const Trip = ({ data }) => {
  console.log(data)
  const [isOpen, setIsOpen] = useState(false)

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <Scroll />,
    prevArrow: <Scroll />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const { node } = data.allDestinationsJson.edges[0]

  const whatToExpectImage = getImage(
    node.whatToExpectImage.childImageSharp.gatsbyImageData
  )

  const bigPicture = getImage(node.bigImage.childImageSharp.gatsbyImageData)

  const itinerary = node.itinerary

  return (
    <Layout>
      <GlobalStyle />
      <Seo title="Destination" />
      <TripContainer>
        <PictureHeading>
          <PictureTitle titleLength={node.name.length}>
            {node.name}
          </PictureTitle>
          <BookNowButton onClick={() => setIsOpen(true)}>
            Book Now
          </BookNowButton>
        </PictureHeading>

        <BigPicture>
          <ShapeDivider>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </ShapeDivider>
          <GatsbyImage image={bigPicture} alt="" style={{ height: "95vh" }} />
        </BigPicture>
      </TripContainer>
      <TripWrapper>
        <WhatToExpect>
          <Place>
            <GatsbyImage image={whatToExpectImage} alt="" />
          </Place>
          <Content>
            <WhatTo>what to</WhatTo>
            <Expect>EXPECT</Expect>
            <p
              style={{
                fontFamily: "Enriqueta",
                fontSize: 30,
                color: "#aaa",
              }}
            >
              {node.whatToExpectContent}
            </p>
          </Content>
        </WhatToExpect>
      </TripWrapper>
      {itinerary.length === 1 && (
        <Itinerary>
          <ItineraryContainer>
            <ItineraryHeading>
              <ItinerarySubHeading>
                Itinerary - {node.duration[0]}
              </ItinerarySubHeading>
              <Button
                round="true"
                primary={true}
                onClick={() => setIsOpen(true)}
              >
                Book Now
              </Button>
            </ItineraryHeading>
            <ItineraryWrapper>
              <ItineraryList>
                {itinerary[0].map((it, idx) => (
                  <ItineraryItem key={`iti-${idx}`}>
                    <TimeStamp>{it.heading}</TimeStamp>
                    <ItemTitle>{it.description}</ItemTitle>
                  </ItineraryItem>
                ))}
              </ItineraryList>
            </ItineraryWrapper>
          </ItineraryContainer>
        </Itinerary>
      )}
      {itinerary.length > 1 &&
        itinerary.map((it, index) => (
          <CollapsibleItinerary
            key={`itn-${index}`}
            index={index}
            heading={`Itinerary`}
            duration={node.duration[index]}
            itinerary={it}
            setIsOpen={setIsOpen}
          />
        ))}
      <Gallery>
        <GalleryHeading>{`Glimpses of ${node.name}`}</GalleryHeading>
        <Slider {...settings}>
          {node.gallery.map((image, index) => {
            return (
              <SliderImageContainer key={`_gallery_${index}`}>
                <GatsbyImage
                  image={getImage(image.childImageSharp.gatsbyImageData)}
                  alt=""
                />
              </SliderImageContainer>
            )
          })}
        </Slider>
      </Gallery>
      <>
        <Modal
          isVisible={isOpen}
          title="Book Now"
          content={<BookNow location={node.name} />}
          footer={
            <Button
              type="submit"
              primary="true"
              round="true"
              css={`
                transform: none;
                padding: 0.5rem 1rem;
              `}
            >
              Submit
            </Button>
          }
          onClose={() => setIsOpen(false)}
        />
      </>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    allDestinationsJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          name
          whatToExpectContent
          duration
          itinerary {
            description
            heading
          }
          bigImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                #layout: CONSTRAINED
                quality: 90
              )
            }
          }
          whatToExpectImage {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 90
                layout: CONSTRAINED
              )
            }
          }
          gallery {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 90
                layout: CONSTRAINED
                height: 220
              )
            }
          }
        }
      }
    }
  }
`

const WhatTo = styled.h4`
  font-family: "Sacramento";
  font-size: 40px;
  line-height: "20px";
  color: ${({ theme }) => theme.color.primary};
`

const Expect = styled.h1`
  font-family: "Enriqueta";
  font-size: 40;
  color: ${({ theme }) => theme.color.primary};
`

const TripContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  font-weight: 100;
  margin-top: -80px;
`

const BigPicture = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`

const PictureHeading = styled.div`
  position: absolute;
  top: 25vh;
  left: 3vw;
  bottom: 0;
  right: 0;
  z-index: 0;
  height: fit-content;

  animation: 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) riseUp;

  @keyframes riseUp {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media screen and (max-width: 786px) {
    font-size: 20vw;
  }
`

const PictureTitle = styled.div`
  font-size: ${({ titleLength }) => (titleLength > 19 ? "0.6ch" : "1ch")};
  font-weight: 100;
  font-family: "Enriqueta";
  color: white;
  line-height: 10px;
  height: 5vh;
`

const TripWrapper = styled.div`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShapeDivider = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 191px;
  }

  .shape-fill {
    fill: #ffffff;
  }
`

const WhatToExpect = styled.div`
  width: 80vw;
  display: grid;

  @media screen and (min-width: 961px) {
    grid-template-columns: 1fr 2fr;
  }
`

const Place = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  padding: 70px 20px;
  @media screen and (min-width: 960px) {
    padding: 10px 20px;
  }
`

const Itinerary = styled.div``

const ItineraryContainer = styled.div`
  background: #232931;
  margin: 0 auto;
  position: relative;
  margin-top: 10%;
  box-shadow: 2px 5px 20px rgba(119, 119, 119, 0.5);
`

const ItineraryWrapper = styled.div`
  font-family: "PT Sans", sans-serif;
  margin: auto;
  display: block;
  position: relative;
`

const ItineraryList = styled.ul`
  padding: 2rem;
  display: inline-block;
`

const ItineraryItem = styled.li`
  list-style: none;
  margin: auto;
  margin-left: 5vw;
  min-height: 50px;
  border-left: 1px dashed #fff;
  padding: 0 0 50px 30px;
  position: relative;

  :last-child {
    border-left: 0;
  }

  ::before {
    position: absolute;
    left: -18px;
    top: -5px;
    content: " ";
    border: 8px solid rgba(255, 255, 255, 1);
    border-radius: 500%;
    background: #50d890;
    height: 20px;
    width: 20px;
    transition: all 500ms ease-in-out;
  }

  :hover::before {
    border-color: #232931;
    transition: all 1000ms ease-in-out;
  }
`

const TimeStamp = styled.div`
  color: #50d890;
  position: relative;
  padding: 4px;
  font-size: 20px;
`

const ItemTitle = styled.div`
  color: #fff;
  margin-top: 12px;
  margin-left: 6px;
  line-height: 25px;
  font-size: 18px;
`

const ItineraryHeading = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  flex-wrap: wrap;
  gap: 11px;
`

const ItinerarySubHeading = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Sacramento";
  font-size: 70px;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 786px) {
    font-size: 45px;
  }
`

const Gallery = styled.div`
  padding: 50px 30px;
`

const GalleryHeading = styled.h3`
  font-family: "Sacramento";
  font-size: 70px;
  padding: 0px 3rem 3rem 3rem;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};

  @media screen and (max-width: 786px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

const SliderImageContainer = styled.div`
  padding: 0px 5px;
  text-align: center;
`
const Scroll = styled.div`
  :before {
    color: black;
  }
`

const BookNowButton = styled.button`
  margin-top: 5px;
  margin-left: 10px;
  padding: 1rem 2rem;
  border-radius: 0px;
  border: 1px solid white;
  color: white;
  background: transparent;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
`

export default Trip
