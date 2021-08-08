import React from "react"
import styled from "styled-components"

const BookNow = () => {
  return (
    <FormWrapper>
      <Group>
        <Input name="name" type="text" required />
        <Highlight className="highlight" />
        <Bar className="bar" />
        <Label for="name">Name</Label>
      </Group>
      <Group>
        <Input name="contact" type="text" required />
        <Highlight className="highlight" />
        <Bar className="bar" />
        <Label for="contact">Contact Number</Label>
      </Group>
      <Group>
        <Input name="email" type="email" required />
        <Highlight className="highlight" />
        <Bar className="bar" />
        <Label for="email">Email Id</Label>
      </Group>
    </FormWrapper>
  )
}

const Group = styled.div`
  position: relative;
  margin-bottom: 45px;
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: ${({theme}) => `1px solid ${theme.color.primary}`};

  :focus {
    outline: none;
  }

  :focus ~ label,
  :valid ~ label {
    top: -20px;
    font-size: 14px;
    color: ${({theme}) => theme.color.primary};
  }

  :focus ~ .bar:before,
  :focus ~ .bar:after {
    width: 50%;
  }

  :focus ~ .bar {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from {
      background: ${({theme}) => theme.color.primary};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: ${({theme}) => theme.color.primary};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: ${({theme}) => theme.color.primary};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`

const Label = styled.label`
  color: ${({theme}) => theme.color.primary};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  :before {
    content: "";
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${({theme}) => theme.color.primary};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    left: 50%;
  }
  :after {
    content: "";
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${({theme}) => theme.color.primary};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    right: 50%;
  }
`

const FormWrapper = styled.div`
  padding: 1rem 0rem;
`

export default BookNow
