import React, { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
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
  const [width, setWidth] = useState(33.33)
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 1200 && width !== 33.33) {
        setWidth(33.33)
      } else if (
        window.innerWidth <= 1200 &&
        window.innerWidth > 960 &&
        width !== 50
      ) {
        setWidth(50)
      } else if (window.innerWidth <= 960 && width !== 100) {
        setWidth(100)
      }
    }
    window.addEventListener("resize", resizeListener)
    resizeListener()
  }, [width])

  const scrollHandler = nowActive => {
    let visibleItems = 0
    if (width === 33.33) {
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
    if (width === 33.33) {
      visibleItems = 2
    } else if (width === 50) {
      visibleItems = 1
    }
    return visibleItems + 1
  }

  const noOfItems = useMemo(() => getItemsFromWidth(width), [width])
  return (
    <WindowWrapper>
      <Window>
        <ScrollRight onClick={() => scrollHandler(activeItem + 1)}>
          <ScrollRightIcon />
        </ScrollRight>
        <ScrollLeft onClick={() => scrollHandler(activeItem - 1)}>
          <ScrollLeftIcon />
        </ScrollLeft>
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
                  (noOfItems === 3 && activeItem + 1 === index)
                    ? "5px"
                    : "0px"};
                  padding-left: ${noOfItems > 1 && index > activeItem
                    ? "5px"
                    : "0px"};
                `}
              >
                <ProductImg image={image} alt={item.node.alt} />
              </Item>
            )
          })}
        </Reel>
      </Window>
    </WindowWrapper>
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
  display: inline-flex;
  width: 33.33%;
  height: 100%;
  //padding: 0px 10px;
  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 960px) {
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

export default Carousel
