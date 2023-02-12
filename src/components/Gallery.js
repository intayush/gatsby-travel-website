import React from "react"
import { navigate } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "./generic/Button"
import { ImLocation } from "react-icons/im"

import Carousel from "./generic/Carousel"

const Gallery = ({ data, title }) => {
  return (
    <>
      <HeadingContainer>
        <ProductHeading>{title}</ProductHeading>
        <HeadingUnderline />
      </HeadingContainer>
      <WindowWrapper
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="100"
        data-aos-duration="1200"
        data-aos-easing="ease"
      >
        <Window>
          <Carousel>
            {data.map((item, index) => {
              const image = getImage(
                item.node.img.childrenImageSharp[0].gatsbyImageData
              )
              return (
                <Item
                  key={`carousel_item_${index}`}
                  // css={`
                  //   padding-right: ${(activeItem === index && noOfItems > 1) ||
                  //   (noOfItems >= 3 &&
                  //     activeItem < index &&
                  //     index < noOfItems - 1)
                  //     ? "5px"
                  //     : "0px"};
                  //   padding-left: ${noOfItems > 1 && index > activeItem
                  //     ? "5px"
                  //     : "0px"};
                  // `}
                >
                  <ProductImg image={image} alt={item.node.alt} />
                  <ProductInfo>
                    <TextWrap>
                      <ImLocation />
                      <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap>
                    <Button
                      onClick={() => {
                        console.log(item);
                        navigate(item.node.route)
                      }}
                      //to="/trips"
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
          </Carousel>
        </Window>
      </WindowWrapper>
    </>
  )
}

const WindowWrapper = styled.div``
const Window = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
`
const Item = styled.div`
  position: relative;
  display: inline-flex;
  width: 25%;
  height: 100%;
  padding: 0px 10px;
  //margin: 0 1rem;
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
  height: 100%;

  &:hover {
    filter: brightness(100%);
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 4.5vw, 2rem);
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.primary};
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
  background: ${({ theme }) => theme.color.primary};
`

const ProductInfo = styled.div`
  //left: 2.4vw;
  top: 0;
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
export default Gallery
