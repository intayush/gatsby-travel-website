import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "./generic/Button"
import { ImLocation } from "react-icons/im"
import { Helmet } from "react-helmet"

const Trips = ({ heading, data }) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
    const aosAnimation = document.querySelectorAll(".aos")
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("aos-animate")
        } else {
          entry.target.classList.remove("aos-animate")
        }
      })
    })
    aosAnimation.forEach(aosObject => {
      observer.observe(aosObject)
    })
  }, [])

  function getTrips(data) {
    const tripsArray = []
    data.forEach((item, index) => {
      const image = getImage(
        item.node.img.childrenImageSharp[0].gatsbyImageData
      )
      tripsArray.push(
        <ProductCard
          className="aos"
          key={`trip_image_${index}`}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1200"
          data-aos-easing="ease"
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
        </ProductCard>
      )
    })
    return tripsArray
  }
  return (
    <ProductContainer>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Helmet>
      <HeadingContainer>
        <ProductHeading>{heading}</ProductHeading>
        <HeadingUnderline />
      </HeadingContainer>
      <ProductWrapper>
        {getTrips(data)}
      </ProductWrapper>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 2.5rem calc((100vw - 1300px) / 2);
  color: #ffffff;
  margin-bottom: 10vh;
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 4.5vw, 2rem);
  text-align: center;
  margin-bottom: 0.5rem;
  color: #183d43;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  position: relative;
  border-radius: 10px;
  transition: 0ms.2s ease;
  margin: 0px 8px;
`

const ProductImg = styled(GatsbyImage)`
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
`
const ProductInfo = styled.div`
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
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
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

export default Trips
