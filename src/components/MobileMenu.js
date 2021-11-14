import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { MenuData } from "../data/MenuData"
import Icons from "../data/MenuIcons"

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <CloseIcon
        onClick={() => {
          closeMenu()
        }}
      />
      <Menu>
        {MenuData.map((item, key) => {
          return (
            <MenuItem
              key={`navitem_${key}`}
              onClick={() => {
                console.log('asda');
                navigate(`${item.link}`)
                closeMenu()
              }}
            >
              {Icons[key]}
              {item.title}
            </MenuItem>
          )
        })}
      </Menu>
    </DropdownContainer>
  )
}

const CloseIcon = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: white;
  font-size: clamp(15px, 40px, 50px);
  top: 5%;
  right: 5%;
`

const DropdownContainer = styled.div`
  position: fixed;
  color: white;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #1b4854;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`

const MenuItem = styled.a`
  color: white;
  font-weight: 500;
  letter-spacing: 0vh;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`

export default MobileMenu
