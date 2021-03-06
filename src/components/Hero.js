import React from "react"
import styled from "styled-components"
import Button from "./generic/Button"
import video from "../assets/videos/video.mp4"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <RiseUp>
            <HeroH1>Unreal Destinations</HeroH1>
            <HeroP>Out of this world</HeroP>
          </RiseUp>
          <Button onClick={() => {
            window.location.href = "#trips";
          }} big="true">
            Explore
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  position: relative;
  padding: 0 1rem;
  margin-top: -80px;
  z-index: 97;
  margin-bottom: 5vh;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 98;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 99;
  height: calc(100vh-80px);
  padding: 0rem calc((100vh-1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #ffffff;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0rem;
  font-family: "Enriqueta";
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
  font-family: "Enriqueta";
`

const RiseUp = styled.div`
  animation: 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) riseUp;

  @keyframes riseUp {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export default Hero
