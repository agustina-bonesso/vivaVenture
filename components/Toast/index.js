import styled from "styled-components";
import { Flip, ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer).attrs({
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Flip,
})`
  .Toastify__toast {
    background: var(--toastify-color);
    color: var(--text-color);
    font-family: var(--font-p);
    font-size: 1rem;
    border-radius: var(--border-radius);
  }
  .Toastify__progress-bar {
    background: var(--teal);
  }
`;
