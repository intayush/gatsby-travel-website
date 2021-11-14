import React from "react"
import styled from "styled-components"
import BackgroundSlider from "react-background-slider"

import Layout from "../components/layout"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Button from "../components/generic/Button"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Seo title="Contact Us" />
      <Container>
        <Card>
          <LinksSection>
            <ContactInformationTitle>
              Contact Information
            </ContactInformationTitle>
            <p>Fill up the form and our team will get back to you</p>
          </LinksSection>
          <ContactSection>
            <ContactForm>
              <FormControl>
                <InputLabel>First Name</InputLabel>
                <CardInput placeholder="John" type="text" required />
              </FormControl>
              <FormControl>
                <InputLabel>Last Name</InputLabel>
                <CardInput placeholder="Doe" type="text" required />
              </FormControl>
              <FormControl>
                <InputLabel>Email</InputLabel>
                <CardInput
                  placeholder="johndoe@gmail.com"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <InputLabel>Mobile No.</InputLabel>
                <CardInput placeholder="7317939164" type="text" required />
              </FormControl>
            </ContactForm>
            <MessageSection>
              <Message rows={5} placeholder="Your query goes here..."></Message>
            </MessageSection>
          </ContactSection>
        </Card>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  min-height: 60vh;
`

const Card = styled.div`
  width: 75%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  display: grid;
  min-height: 100px;
`

const LinksSection = styled.div`
  height: 100%;
  background-color: #183d43;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px;
  color: white;
  opacity: 0.9;
`

const ContactSection = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 36px;
  padding-right: 36px;
`

const ContactInformationTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 36px;
`

const ContactForm = styled.div`
  display: grid;
  grid-gap: 50px;
`

const FormControl = styled.div``

const InputLabel = styled.label`
  color: ${({ theme }) => theme.color.primary};
`

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.background.primary};

  &:focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
    outline: 0;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.primary};
    opacity: 0.5;
  }
`

const MessageSection = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`

const Message = styled.textarea`
  border-radius: 10px;
  width: 100%;
  resize: none;
  padding: 8px;
`

export default Contact
