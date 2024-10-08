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
    padding: 5rem .625rem .625rem ;
    max-width: 90%;
    margin: 0 auto;
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

    --form-border: #888888;

    --icon-color: #000000;

    --toastify-color: #fff;

    --border-radius: 0.5rem;

    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    --weathercard-primary: #E0F7FA;
    --weathercard-secondary: #B2EBF2;
    --background-map-button: rgba(0, 0, 0, 90%);
    --map-button-text: #ffffff;



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
      --icon-color: #ffffff;
      --teal: #00A6AA; 
      --brown: #b9773e;
      --toastify-color: #121212;
      --weathercard-primary: #263238;
      --weathercard-secondary: #37474F;
      --background-map-button: rgba(255, 255, 255, 90%);
      --map-button-text: #0D0D0D;

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
  margin: 5rem auto 4rem auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 450px);
    gap: 1.2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 380px);
    gap: 1.25rem;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 500px);
    gap: 1.25rem;
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(3, 600px);
    gap: 1.25rem;
  }

  @media (min-width: 2500px) {
    grid-template-columns: repeat(3, 750px);
    gap: 1.5rem;
  }
`;
