import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }

  main {
    padding: 6.25rem .625rem .625rem ;
    max-width: 35rem;
    margin: 0 auto;

    @media (max-width: 768px) {
      margin: 0 auto 3.75rem auto;

  }
  }

  h1{
    font-family: var(--font-h1);
  }

  h2{
    font-family: var(--font-h2);
    margin: 0;
    @media (min-width: 1200px) {
      font-size: 1.8rem;
  }
  }
  p{
    font-family: var(--font-p);
    font-size: 1.1rem;

    @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
  }

  span{
    font-size: 0.875rem;
    font-family: var(--font-p);
    @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
  }

  :root {
    --dark-gray: #0D0D0D;
    --teal: #0c7579;
    --light-orange: #F2B366;
    --brown: #986133;

    /* Hintergrund- und Textfarben für den hellen Modus */
    --background-color: #f5f5f5;  
    --text-color: #0D0D0D;  
    --header-footer-bg: #F2E6DF;
    --card-background: #ffffff;
    --form-background: #f9f9f9;

    --font-h1: 'Roboto Slab', serif;
    --font-h2: 'Biryani', serif;
    --font-p: 'Biryani', sans-serif;
    --styled-link: 'Biryani', sans-serif;

    --icon-color: black;

    --toastify-color: #fff;

    --border-radius: 0.5rem;

    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    /* Button */
    --button-background: #fff;
    --button-hover-background: #f5f5f5;


    /* Gradient für Buttons */
    --button-gradient1: linear-gradient(to right, #004040, #65745B);
    --button-gradient2: linear-gradient(to right, #3D5D53, #C7BD9C);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Dunkelmodus spezifische Farben */
      --background-color: #121212;
      --text-color: #ffffff;
      --header-footer-bg: #1c2326;
      --card-background: #1e1e1e;
      --form-background: #1e1e1e;
      --box-shadow:0 2px 4px rgba(255, 255, 255, 0.5);
      --icon-color: white;
      --teal: #00A6AA; 
      --brown: #b9773e;
      --toastify-color: #121212;

      /* Button */
      --button-background: #333;
      --button-hover-background: #444;

      /* Gradient für den dunklen Modus */
      --button-gradient1:linear-gradient(to right, #3D5D53, #C7BD9C);
      --button-gradient2:linear-gradient(to right, #004040, #65745B);
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  @media (min-width: 768px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(2, 360px);
    justify-content: center;
    gap: 0.9375rem;
  }

  @media (min-width: 1200px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 380px);
    gap: 1.25rem;
  }

  @media (min-width: 1600px) {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 520px);
    gap: 1.25rem;
  }
`;
