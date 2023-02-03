import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html,
  body,
  #root,
  .app,
  .content {
    height: 100%;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    $:hover {
      opacity: .6;
    }
  }

  body {
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
  }



  .app {
    display: flex;
    position: relative;
  }

  .content-page {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
