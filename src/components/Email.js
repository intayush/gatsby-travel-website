import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import EmailBg from "../assets/images/email.jpg"
import Button from "./generic/Button"
import { StaticImage } from "gatsby-plugin-image"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <Circle
          onClick={() => {
            navigate("/services/flights")
          }}
        >
          <StaticImage
            src="../assets/svg/flights.svg"
            height={100}
            alt=""
            placeholder="tracedSVG"
            objectFit="contain"
          />
          <Text>Flights</Text>
        </Circle>
        <Circle
          onClick={() => {
            navigate("/services/hotels")
          }}
        >
          <StaticImage
            src="../assets/svg/hotels.svg"
            height={100}
            alt=""
            placeholder="tracedSVG"
            objectFit="contain"
          />
          <Text>Hotels</Text>
        </Circle>
        <Circle
          onClick={() => {
            navigate("/services/cabs")
          }}
        >
          <StaticImage
            src="../assets/svg/cabs.svg"
            height={100}
            alt=""
            placeholder="tracedSVG"
            objectFit="contain"
            onClick={() => {
              navigate("/services/hotels")
            }}
          />
          <Text>Cabs</Text>
        </Circle>

        {/* <h1>Get Access to Exclusive Offers</h1>
        <p>Sign up for our newsletter below</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 48px;

                @media screen and (max-width: 786px) {
                  width: 100%;
                  min-width: 350px;
                }

                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Signup
            </Button>
          </FormWrap>
        </form> */}
      </EmailContent>
    </EmailContainer>
  )
}

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 600px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }

  /* h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  } */
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 2rem;
      width: 100%;
      margin-right: 0;
    }
  }
`

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  padding: 30px;
  background: white;
  -webkit-box-shadow: 3px 9px 13px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 9px 13px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 9px 13px 1px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`
const Text = styled.div`
  margin-top: 10px;
  color: black;
`

export default Email
