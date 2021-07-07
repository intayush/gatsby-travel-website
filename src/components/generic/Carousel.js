import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "./Button"
import { ImLocation } from "react-icons/im"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query InternationalTripsQuery {
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
                  quality: 85
                )
              }
            }
          }
        }
      }
    }
  `)
  const [activeItem, setActiveItem] = useState(0)
  const [width, setWidth] = useState(25)
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 1200 && width !== 25) {
        setWidth(25)
      } else if (
        window.innerWidth <= 1200 &&
        window.innerWidth > 960 &&
        width !== 33.33
      ) {
        setWidth(33.33)
      } else if (
        window.innerWidth <= 960 &&
        window.innerWidth > 786 &&
        width !== 50
      ) {
        setWidth(50)
      } else if (window.innerWidth <= 786 && width !== 100) {
        setWidth(100)
      }
    }
    window.addEventListener("resize", resizeListener)
    resizeListener()
  }, [width])

  const scrollHandler = nowActive => {
    let visibleItems = 0
    if (width === 25) {
      visibleItems = 3
    } else if (width === 33.33) {
      visibleItems = 2
    } else if (width === 50) {
      visibleItems = 1
    }
    if (
      data.allInternationalTripsJson.edges.length > nowActive + visibleItems &&
      nowActive >= 0
    ) {
      setActiveItem(nowActive)
    }
  }

  const getItemsFromWidth = width => {
    let visibleItems = 0
    if (width === 25) {
      visibleItems = 3
    } else if (width === 33.33) {
      visibleItems = 2
    } else if (width === 50) {
      visibleItems = 1
    }
    return visibleItems + 1
  }

  const noOfItems = useMemo(() => getItemsFromWidth(width), [width])
  return (
    <>
      <HeadingContainer>
        <ProductHeading>International Destinations</ProductHeading>
        <HeadingUnderline />
      </HeadingContainer>
      <WindowWrapper>
        <Window>
          {activeItem + noOfItems - 1 !==
            data.allInternationalTripsJson.edges.length - 1 &&
            noOfItems < data.allInternationalTripsJson.edges.length && (
              <ScrollRight onClick={() => scrollHandler(activeItem + 1)}>
                <ScrollRightIcon />
              </ScrollRight>
            )}
          {activeItem !== 0 && (
            <ScrollLeft onClick={() => scrollHandler(activeItem - 1)}>
              <ScrollLeftIcon />
            </ScrollLeft>
          )}
          <Reel style={{ transform: `translateX(-${activeItem * width}%)` }}>
            {data.allInternationalTripsJson.edges.map((item, index) => {
              const image = getImage(
                item.node.img.childrenImageSharp[0].gatsbyImageData
              )
              return (
                <Item
                  key={`carousel_item_${index}`}
                  css={`
                    padding-right: ${(activeItem === index && noOfItems > 1) ||
                    (noOfItems >= 3 &&
                      activeItem < index &&
                      index < noOfItems - 1)
                      ? "5px"
                      : "0px"};
                    padding-left: ${noOfItems > 1 && index > activeItem
                      ? "5px"
                      : "0px"};
                  `}
                >
                  <ProductImg image={image} alt={item.node.alt} />
                  <ProductInfo>
                    <TextWrap>
                      <ImLocation />
                      <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap>
                    <Button
                      to="/trips"
                      primary="true"
                      round="true"
                      css={`
                        position: absolute;
                        bottom: 2rem;
                        transform: none;
                        padding: 0.5rem 1rem;
                      `}
                    >
                      Visit Destination
                    </Button>
                  </ProductInfo>
                </Item>
              )
            })}
          </Reel>
        </Window>
      </WindowWrapper>
    </>
  )
}

const WindowWrapper = styled.div`
  padding: 2vh 3vw;
  height: 80vh;
`
const Window = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const ScrollRight = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background: black;
  opacity: 0.5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 786px) {
    width: 10%;
  }

  &:hover {
    opacity: 1;
  }
`

const ScrollLeft = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background: black;
  opacity: 0.5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 786px) {
    width: 10%;
  }

  &:hover {
    opacity: 1;
  }
`

const Reel = styled.div`
  height: 100%;
  width: 100%;
  white-space: nowrap;
  transition: transform 0.3s;
`

const Item = styled.div`
  position: relative;
  display: inline-flex;
  width: 25%;
  height: 100%;
  //padding: 0px 10px;
  @media screen and (max-width: 1200px) {
    width: 33.33%;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }

  @media screen and (max-width: 786px) {
    width: 100%;
  }
`

const ProductImg = styled(GatsbyImage)`
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  width: 100%;

  &:hover {
    filter: brightness(100%);
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
`

const ScrollRightIcon = styled(BsChevronCompactRight)`
  font-size: 100px;
  color: white;
`

const ScrollLeftIcon = styled(BsChevronCompactLeft)`
  font-size: 100px;
  color: white;
`

const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 4.5vw, 2rem);
  text-align: center;
  margin-bottom: 0.5rem;
  color: #183d43;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 4rem;
`

const HeadingUnderline = styled.div`
  width: 20ch;
  height: 4px;
  background: #183d43;
`

const ProductInfo = styled.div`
  left: 2.4vw;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 5rem;
  margin-left: 1rem;
  color: #ffffff;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #ffffff;
`
export default Carousel
