import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/Roboto_Slab/RobotoSlab-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lusitana';
    src: url('/fonts/Lusitana/Lusitana-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Biryani';
    src: url('/fonts/Biryani/Biryani-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  main {
    padding: 6rem .625rem .9375rem .625rem;
    max-width: 35rem;
    margin: 0 auto;
  }

  h1{
    font-family: var(--font-h1);
  }

  h2{
    font-family: var(--font-h2);
    margin-bottom: -.8rem;
  }

  p{
    font-family: var(--font-p);
    font-size: 1.2rem;
  }

  :root {
    --dark-gray: #0D0D0D;
    --teal: #00A6AA;
    --dark-teal: #11898E;
    --light-orange: #F2B366;
    --brown: #A66B38;
    --off-white: #F2E6DF;

    /* Hintergrund- und Textfarben für den hellen Modus */
    --background-color: #ffffff;  /* Weiß */
    --text-color: var(--dark-gray);  /* Dunkelgrau */
    --header-footer-bg: var(--off-white);  /* Helles Grau */
    --button-text-color: #ffffff;  /* Weiß */
    --card-background: #fff;  /* Weiß */

    --font-h1: 'Roboto Slab', serif;
    --font-h2: 'Biryani', serif;
    --font-p: 'Biryani', sans-serif;
    --styled-link: 'Biryani', sans-serif;

    --border-radius: 0.5rem;

    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

    /* Diverse Gradienten für Buttons */
    --button-gradient1: linear-gradient(to right, #004040, #65745B);
    --button-gradient2: linear-gradient(to right, #3D5D53, #C7BD9C);
    --button-gradient3: linear-gradient(to right, #E9B567, #EFBE72);
    --button-gradient4: linear-gradient(to right, #E3B675, #A0693F);
    --button-gradient5: linear-gradient(to right, #AE815D, #775132);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Dunkelmodus spezifische Farben */
      --background-color: #121212;  /* Fast Schwarz */
      --text-color: #ffffff;  /* Weiß */
      --header-footer-bg: #333333;  /* Dunkleres Grau */
      --card-background: #1e1e1e;  /* Sehr dunkles Grau */

      /* Gradienten für den dunklen Modus */
      --button-gradient1: linear-gradient(to right, #028282, #1C7070);
      --button-gradient2: linear-gradient(to right, #427878, #778788);
      --button-gradient3: linear-gradient(to right, #DDB690, #EDC8A0);
      --button-gradient4: linear-gradient(to right, #DFB180, #E3B690);
      --button-gradient5: linear-gradient(to right, #775142, #AE8162);
    }

  }`;
