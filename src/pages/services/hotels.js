import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import { GlobalStyle } from "../../components/styles/GlobalStyles"
import Button from "../../components/generic/Button"
import Seo from "../../components/seo"

const Hotels = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Seo title="Services | Hotels" />
      <Container>
        <Card>
          <LinksSection>
            <ContactInformationTitle>
              <StaticImage
                src="../../assets/svg/hotel_white.svg"
                height={60}
                alt=""
                placeholder="tracedSVG"
                objectFit="contain"
              />
              <span
                style={{
                  marginLeft: 20,
                  fontSize: 40,
                }}
              >
                Hotel Booking
              </span>
            </ContactInformationTitle>
            <p>
              Fill up the form and our team will get back to you to discuss your
              hotel booking
            </p>
            <LinksWrapper>
              <IconAndInfo>
                <span
                  style={{
                    marginLeft: 10,
                  }}
                >
                  +91 77601 94184
                </span>
              </IconAndInfo>
              <IconAndInfo>
                <StaticImage
                  src={`../assets/svg/mail.svg`}
                  height={30}
                  alt=""
                  placeholder="tracedSVG"
                  objectFit="contain"
                />
                <span
                  style={{
                    marginLeft: 10,
                  }}
                >
                  info@vacationmantraholidays.com
                </span>
              </IconAndInfo>
              <IconAndInfo>
                <StaticImage
                  src={`../assets/svg/location.svg`}
                  height={30}
                  alt=""
                  placeholder="tracedSVG"
                  objectFit="contain"
                />
                <span
                  style={{
                    marginLeft: 10,
                  }}
                >
                  VMH Address
                </span>
              </IconAndInfo>
            </LinksWrapper>
          </LinksSection>
          <form
            action="https://formsubmit.co/ayush.singh.96@gmail.com"
            method="POST"
          >
            <ContactSection>
              <ContactForm>
                <FormControl>
                  <InputLabel>Name</InputLabel>
                  <CardInput type="text" name="Name" required />
                </FormControl>
                {/* <FormControl>
                <InputLabel>Last Name</InputLabel>
                <CardInput placeholder="Doe" type="text" required />
              </FormControl> */}
                <FormControl>
                  <InputLabel>Email</InputLabel>
                  <CardInput type="text" name="Email" required />
                </FormControl>
                <FormControl>
                  <InputLabel>Mobile No.</InputLabel>
                  <CardInput type="text" name="Mobile Number" required />
                </FormControl>
              </ContactForm>
              {/* <MessageSection>
              <Message rows={5} placeholder="Your query goes here..."></Message>
            </MessageSection> */}
              <input
                type="hidden"
                name="_next"
                value="https://vmh-travel.netlify.app?submit=1"
              ></input>
              <input
                type="hidden"
                name="_subject"
                value="New Cab Hotel Request"
              ></input>
              <input type="hidden" name="_template" value="box"></input>
              <SubmitButton>Submit</SubmitButton>
            </ContactSection>
          </form>
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

const SubmitButton = styled(Button)`
  margin-top: 16px;
  float: right;
`

const LinksWrapper = styled.div`
  margin-top: 40px;
`

const IconAndInfo = styled.span`
  margin-top: 35px;
  display: flex;
  align-items: center;
`

const Card = styled.div`
  width: 75%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const ContactInformationTitle = styled.div`
  display: flex;
  align-items: center;
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

export default Hotels
