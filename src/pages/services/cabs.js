import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import { GlobalStyle } from "../../components/styles/GlobalStyles"
import Button from "../../components/generic/Button"
import Seo from "../../components/seo"

const Cabs = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Seo title="Services | Cabs" />
      <Container>
        <Card>
          <LinksSection>
            <ContactInformationTitle>
              <svg
                id="SvgjsSvg1001"
                width="60"
                height="60"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs id="SvgjsDefs1002"></defs>
                <g id="SvgjsG1008">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    version="1.0"
                    viewBox="0 0 375 375"
                  >
                    <rect
                      width="450"
                      height="450"
                      x="-37.5"
                      y="-37.5"
                      fill="transparent"
                      class="colorFFF svgShape"
                    ></rect>
                    <rect
                      width="450"
                      height="450"
                      x="-37.5"
                      y="-37.5"
                      fill="transparent"
                      class="colorFFF svgShape"
                    ></rect>
                    <path
                      d="M 331.96875 169.058594 L 319.671875 75.308594 C 316.597656 52.253906 295.082031 33.8125 272.027344 33.8125 L 239.753906 33.8125 C 236.679688 15.367188 221.3125 3.074219 202.867188 3.074219 L 167.519531 3.074219 C 149.078125 3.074219 133.710938 16.90625 130.636719 33.8125 L 98.359375 33.8125 C 73.769531 33.8125 53.789062 52.253906 50.71875 75.308594 L 38.421875 169.058594 C 16.90625 172.132812 0 189.035156 0 210.554688 L 0 282.785156 C 0 301.230469 13.832031 318.136719 30.738281 322.746094 L 30.738281 341.1875 C 30.738281 358.09375 44.570312 371.925781 59.9375 371.925781 L 79.917969 371.925781 C 95.285156 371.925781 109.117188 358.09375 109.117188 341.1875 L 109.117188 325.820312 L 262.808594 325.820312 L 262.808594 341.1875 C 262.808594 358.09375 276.640625 371.925781 292.007812 371.925781 L 311.988281 371.925781 C 327.355469 371.925781 341.1875 358.09375 341.1875 341.1875 L 341.1875 325.820312 C 361.167969 322.746094 375 304.304688 375 284.324219 L 375 212.089844 C 371.925781 189.035156 355.019531 170.59375 331.96875 169.058594 Z M 73.769531 78.382812 C 75.308594 66.085938 86.066406 56.863281 98.359375 56.863281 L 272.027344 56.863281 C 284.324219 56.863281 295.082031 66.085938 296.617188 78.382812 L 308.914062 169.058594 L 61.476562 169.058594 Z M 84.527344 287.398438 C 63.011719 287.398438 46.105469 268.953125 46.105469 248.976562 C 46.105469 228.996094 63.011719 210.554688 84.527344 210.554688 C 106.046875 210.554688 122.949219 227.460938 122.949219 248.976562 C 122.949219 270.492188 106.046875 287.398438 84.527344 287.398438 Z M 284.324219 287.398438 C 262.808594 287.398438 245.902344 270.492188 245.902344 248.976562 C 245.902344 227.460938 262.808594 210.554688 284.324219 210.554688 C 305.839844 210.554688 322.746094 227.460938 322.746094 248.976562 C 322.746094 268.953125 305.839844 287.398438 284.324219 287.398438 Z M 284.324219 287.398438 "
                      fill="#ffffff"
                      class="color000 svgShape"
                    ></path>
                  </svg>
                </g>
              </svg>
              <span
                style={{
                  marginLeft: 20,
                  fontSize: 40,
                }}
              >
                Cab Booking
              </span>
            </ContactInformationTitle>
            <p>
              Fill up the form and our team will get back to you to discuss your
              cab booking
            </p>
            <LinksWrapper>
              <IconAndInfo>
                <StaticImage
                  src={`../assets/svg/phone.svg`}
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
                  info@vmh.com
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
          <ContactSection>
            <ContactForm>
              <FormControl>
                <InputLabel>Name</InputLabel>
                <CardInput type="text" required />
              </FormControl>
              {/* <FormControl>
                <InputLabel>Last Name</InputLabel>
                <CardInput placeholder="Doe" type="text" required />
              </FormControl> */}
              <FormControl>
                <InputLabel>Email</InputLabel>
                <CardInput type="text" required />
              </FormControl>
              <FormControl>
                <InputLabel>Mobile No.</InputLabel>
                <CardInput type="text" required />
              </FormControl>
            </ContactForm>
            {/* <MessageSection>
              <Message rows={5} placeholder="Your query goes here..."></Message>
            </MessageSection> */}
            <input type="hidden" name="_next" value="https://vmh-travel.netlify.app/thankyou"></input>
            <input type="hidden" name="_subject" value="New Cab Booking Request"></input>
            <input type="hidden" name="_template" value="box"></input>
            <SubmitButton>Submit</SubmitButton>
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

export default Cabs
