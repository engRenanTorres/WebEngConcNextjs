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
    background: ${({ theme }) => theme.palette.background.default};
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

  h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
  }
  h5 {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
  }
  h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
  }

  .app {
    display: flex;
    position: relative;
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
