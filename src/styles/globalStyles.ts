import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins';

    color: #e6e8e7;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
  width: 6px; /* largura da barra de rolagem */
}

body::-webkit-scrollbar-track {
  background: rgba(22,22,22); /* cor do fundo da barra de rolagem */
}

body::-webkit-scrollbar-thumb {
  transition: 0.4s ease;
  background: #fa8339; /* cor do corpo da barra de rolagem */
}

body::-webkit-scrollbar-thumb:hover {
  background: #ad551d
; /* cor do corpo da barra de rolagem ao passar o mouse */
}

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;

    background: rgb(13,0,23);
background: radial-gradient(circle, rgba(13,0,23,1) 0%, rgba(0,0,0,1) 100%);
  }

  ul,
  ol {
    list-style: none;
  }

  img {
   max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body, input, button {
    font: 16px serif;
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
