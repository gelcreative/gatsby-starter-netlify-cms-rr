import { createGlobalStyle } from 'styled-components'
import all from './all.sass'

const theme = {
  sansFont: 'IBM Plex Sans',
  serifFont: 'IBM Plex Serif',
  red: '#ef4136',
  blue: '#262161',
  darkBlue: '#29303e',
  middleBlue: '#1d60a2',
  lightBlue: '#bbdbea',
  lightGrey: '#f2f2f2',
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
    margin-bottom: 10rem;
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
        color: ${theme.blue};
      }

      h2 {
        font-size: 2.5rem;
      }

      h3 {
        font-size: 2.2rem;
      }

      h4 {
        font-size: 2rem;
      }

      *, *::before, *::after {
        box-sizing: inherit;
      }

      p, li {
        line-height: 1.5;
      }

      ul {
        margin-left: 3em;
      }

      a {
        color: #434244;
        transition: 300ms;
        text-decoration: underline;
      }

      a:hover {
        color: ${theme.red};
        text-decoration: underline;
      }

      a[href^="tel"] {
        text-decoration: none;
        &:hover {
          color: ${theme.red};
        }
      }

      strong {
        color: inherit;
      }

      .button.button-1 {
        background-color: ${theme.red};
        border: 1px solid ${theme.red};
        color: #ffffff;
        padding-right: 10%;
        padding-left: 10%;
        text-decoration: none;
        font-size: 1.8rem;
      }

      .button.button-1:hover {
        background-color: #ffffff;
        color: ${theme.red};
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
    p:last-child {
      text-align: right; /* right-align last p, which should be the attribution */
    }
  }

  .content table {
    margin-bottom: 3em !important;
    thead {
      th {
        border-bottom: 2px solid ${theme.darkGrey}
      }
    }
    td {
      border: 1px solid ${theme.darkGrey};
      border-top-width: 1px;
      border-right-width: 1px;
      border-bottom-width: 1px;
      border-left-width: 1px;
      border-width: 0 0 1px;
      padding: 0.5em 0.75em;
      vertical-align: top;
    }
  }

  .retirerite-main .content:not(:last-child) {
    margin-bottom: 4rem;
  }

  .columns.retirerite-page-intro {
    margin-bottom: 3em !important;
  }


.retirerite-services-table tbody tr:nth-child(even) {
  background-color: ${theme.lightGrey};
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

  .leaflet-top, .leaflet-bottom {
    z-index: 400 !important;
  }
`

export { theme, GlobalStyle }