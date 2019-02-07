import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import bulma from 'bulma'
import initialVariables from 'bulma/sass/utilities/initial-variables.sass'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const theme = {
  sansFont: 'IBM Plex Sans',
  serifFont: 'IBM Plex Serif'
}

const GlobalStyle = createGlobalStyle`
  @import url(${initialVariables});

  .navbar .navbar-menu {
    box-shadow:none !important;
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

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  body {
    @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|IBM+Plex+Serif:400,500");
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    line-height: 2;
    font-family: ${theme.sansFont}, sans-serif;
    color: #434244;
  }

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
    color: #f26339;
    text-decoration: underline;
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

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </>
    )}
  />
)

const WrappedWithThemeProvider = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <TemplateWrapper children={ children } />
  </ThemeProvider>
)

export default WrappedWithThemeProvider
