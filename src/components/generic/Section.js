import React from "react"
import styled from "styled-components"

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

const StyledSection = styled.div`
  /*height: 100vh;
  scroll-snap-align: start; */
`

export default Section
