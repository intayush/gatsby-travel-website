import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import kashmirBg from "../assets/images/kashmir-trip.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Trip = () => {
  return (
    <Layout>
      <Seo title="Destination" />
      <TripContainer>
        <GlobalStyle />
        <PictureHeading>Kashmir</PictureHeading>
        <BigPicture>
        </BigPicture>
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
      </TripContainer>
    </Layout>
  )
}

const TripContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  font-weight: 100;
  padding: 0 0.25rem;
  margin-top: -80px;
`

const BigPicture = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  background: url(${kashmirBg}) no-repeat center;
  background-size: cover;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 98;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
  }
`

const PictureHeading = styled.div`
  position: absolute;
  top: 30vh;
  left: 3vw;
  bottom: 0;
  right: 0;
  font-size: 8rem;
  font-weight: 100;
  z-index: 0;
  color: white;
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
`

const TripWrapper = styled.div``

const ShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
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

export default Trip
