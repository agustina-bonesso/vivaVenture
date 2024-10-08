import styled from "styled-components";

export function Modal({ isOpen, onClose, header, footer, children }) {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {header && <ModalHeader>{header}</ModalHeader>}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalBackdrop>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;

const ModalContent = styled.div`
  max-width: 300px;
  max-height: 550px;
  background: var(--card-background);
  padding: 10px;
  border-radius: var(--border-radius);
  font-family: var(--font-p);
  @media (min-width: 450px) {
    max-width: 450px;
    max-height: 650px;
  }
`;

const ModalHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ModalBody = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ModalFooter = styled.div`
  text-align: right;
`;
