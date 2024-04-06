import React from "react"
import styled from "styled-components"

const RadioButton = ({
    name,
    value
}) => {
    return (
        <Wrapper>
            <input type="radio" name={name} id={value} value={value} />
            <StyledLabel htmlFor={value}>{value}</StyledLabel>
        </Wrapper>
    );
};

export default RadioButton;


const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.color.primary};
  cursor: default;
`;


const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;