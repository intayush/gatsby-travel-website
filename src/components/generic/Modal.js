import React, { useEffect } from "react"
import styled from "styled-components"
import { GrClose } from "react-icons/gr";

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose()
        break
      default:
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener("keydown", keydownHandler)
  })
  return !isVisible ? null : (
    <ModalWrapper onClick={onClose}>
      <ModalDialog onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose onClick={onClose}><GrClose /></ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalDialog>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  animation-name: appear;
  animation-duration: 300ms;
`

const ModalDialog = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 550px;
  background: white;
  position: relative;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dbdbdb;
  justify-content: space-between;
`

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #dbdbdb;
  justify-content: flex-end;
`

const ModalTitle = styled.h3`
font-weight: 400;
`

const ModalClose = styled.span`
  cursor: pointer;
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
`

const ModalBody = styled.div`
  overflow: auto;
`

const ModalContent = styled.div`
  padding: 1rem;
`

//   .modal-close {
//     cursor: pointer;
//     padding: 1rem;
//     margin: -1rem -1rem -1rem auto;
//   }

//   .modal-body {
//     overflow: auto;
//   }

//   .modal-content {
//     padding: 1rem;
//   }

//   @keyframes appear {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }

//   @keyframes slide-in {
//     from {
//       transform: translateY(-150px);
//     }
//     to {
//       transform: translateY(0);
//     }
//   }
