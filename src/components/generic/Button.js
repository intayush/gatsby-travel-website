import styled from "styled-components"

export default styled.button`
  background: ${({ primary }) => (primary ? "#fdc700" : "#1b4854")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #ffffff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#f7cd34" : "#368fa7")};
    transform: translateY(-5px);
  }
`
