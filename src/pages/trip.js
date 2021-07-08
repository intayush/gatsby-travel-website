import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import kashmirBg from "../assets/images/kashmir-trip.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Trip = () => {
  return (
    <TripContainer>
      <GlobalStyle />
      <BigPicture>
        <StaticImage
          src="../assets/images/kashmir-trip.jpg"
          alt=""
          objectFit="cover"
          placeholder="blurred"
          layout="fullWidth"
        />
      </BigPicture>
      <TripWrapper>

      </TripWrapper>
    </TripContainer>
  )
}

const TripContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  font-weight: 100;
`

const BigPicture = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* background: url(${kashmirBg}) no-repeat center;
  background-size: cover; */
`

const TripWrapper = styled.div`

`

export default Trip
