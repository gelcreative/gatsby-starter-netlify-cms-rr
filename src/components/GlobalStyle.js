import { createGlobalStyle } from 'styled-components'
import bulma from 'bulma'
import initialVariables from 'bulma/sass/utilities/initial-variables.sass'

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
  @import url(${initialVariables});

  .navbar .navbar-menu {
    box-shadow:none !important;
  }

  .retirerite-main .content:not(:last-child) {
    margin-bottom: 3rem;
  }

  .content .taglist {
    list-style: none;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
  }
    
  .content .taglist li {
    padding: 0 2rem 1rem 0;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  /* Helper Classes */
  .full-width-image-container {
    width: 100vw;
    height: 400px;
    position: relative;
    left: 50%;
    right: 50%;
    margin: 5em -50vw;
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .margin-top-0 {
    margin-top: 0 !important
  }

  @import url(${bulma});

  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|IBM+Plex+Serif:400,500");

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    line-height: 2;
    font-family: ${theme.sansFont}, sans-serif;
    color: #434244;
  }

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

  address {
    font-style: normal;
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

  .button.button-1 {
    background-color: ${theme.middleBlue};
    color: #ffffff;
    padding-right: 10%;
    padding-left: 10%;
  }

  .button.button-1:hover {
    border: 1px solid #1d60a2;
    background-color: #ffffff;
    color: #1d60a2;
  }
`

export { theme, GlobalStyle }