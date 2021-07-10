import React from "react"
import styled from "styled-components"

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

const StyledSection = styled.div`
`

export default Section
