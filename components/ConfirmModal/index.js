import styled from "styled-components";
import { ModalButton } from "../StyledButton";

export function ConfirmModal({ isOpen, onClose, onConfirm, children }) {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <ModalHeader>Confirm Delete</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
          <ModalButton onClick={onConfirm} $variant="modal-delete">
            Delete
          </ModalButton>
        </ModalFooter>
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
  background: var(--card-background);
  padding: 20px;
  border-radius: var(--border-radius);
`;

const ModalHeader = styled.h2`
  font-size: 1.5rem;
`;

const ModalBody = styled.p`
  font-size: 1rem;
`;

const ModalFooter = styled.div`
  text-align: right;
`;
