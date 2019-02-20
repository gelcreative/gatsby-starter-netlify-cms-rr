import { createGlobalStyle } from 'styled-components'
import all from './all.sass'

const theme = {
  sansFont: 'IBM Plex Sans',
  serifFont: 'IBM Plex Serif',
  red: '#ef4136',
  blue: '#262261',
  darkBlue: '#29303e',
  middleBlue: '#1d60a2',
  lightBlue: '#bbdbea',
  lightGrey: '#f3f3f3',
  darkGrey: '#979aa1',
}

const GlobalStyle = createGlobalStyle`

  @import url(${all});
 
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|IBM+Plex+Serif:400,500");

  html {
    font-size: 10px !important;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.8rem !important;
    line-height: 2;
    font-family: ${theme.sansFont}, sans-serif !important;
    color: #434244;
  }

  main {
    margin-top: 5rem;
  }
  
  .retirerite-main {
    .content {
      h1, h2 {
        font-family: ${theme.serifFont}, serif;
        font-weight: 400;
      }

      h3, h4 {
        font-family: ${theme.sansFont}, sans-serif;
        font-weight: 400;
      }

      h1 {
        font-size: 3.2rem;
      }

      h2 {
        font-size: 2.5rem;
      }

      h3 {
        font-size: 2.5rem;
      }

      h4 {
        font-size: 2rem;
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }

      a {
        color: #434244;
        transition: 300ms;
      }

      a:hover {
        color: ${theme.red};
        text-decoration: underline;
      }

      .button.button-1 {
        background-color: ${theme.middleBlue};
        color: #ffffff;
        padding-right: 10%;
        padding-left: 10%;
        text-decoration: none;
        font-size: 1.8rem;
      }

      .button.button-1:hover {
        border: 1px solid ${theme.middleBlue};
        background-color: #ffffff;
        color: ${theme.middleBlue};
      }

    }
  }

  address {
    font-style: normal;
  }

  blockquote {
    background-color: ${theme.lightBlue};
    margin: 0 0 1em 0;
    padding: 1em 2em;
  }

  .retirerite-main .content:not(:last-child) {
    margin-bottom: 4rem;
  }

  .columns.retirerite-page-intro {
    margin-bottom: 3em !important;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important ;
    overflow: hidden;
  }
`

export { theme, GlobalStyle }