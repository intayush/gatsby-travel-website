import React, { useEffect } from "react"
import AOS from "aos"
import styled from "styled-components"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const Testimonials = () => {
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

  return (
    <TestimonialsContainer>
      {/* <TopLine>Testimonials</TopLine> */}
      <Description>What People are Saying</Description>
      <ContentWrapper className="aos">
        <ColumnOne
          data-aos="fade-right"
          data-aos-offset="5"
          data-aos-delay="100"
          data-aos-duration="1200"
          data-aos-easing="ease"
        >
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Darshika</h3>
            <p>
              Thankyou Vacation Mantra for organizing a lovely family holiday. I
              had a wonderful experience with all the arrangements.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Pawan</h3>
            <p>
              Thankyou Vacation Mantra for organizing a lovely family holiday. I
              had a wonderful experience with all the arrangements.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="1000"
          data-aos-duration="1200"
          data-aos-easing="ease"
        >
          <Img>
            <StaticImage
              src="../assets/images/av1.jpg"
              height={200}
              alt=""
              objectFit="contain"
              quality={90}
            />
          </Img>
          <Img>
            <StaticImage
              src="../assets/images/av2.jpg"
              height={200}
              alt=""
              objectFit="contain"
              quality={90}
            />
          </Img>
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

const TestimonialsContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  background-color: #fcfcfc;
  color: #000;
  padding: 2rem;
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 2rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 1rem 0;
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  padding: 1rem 0;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const Img = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
`

export default Testimonials
