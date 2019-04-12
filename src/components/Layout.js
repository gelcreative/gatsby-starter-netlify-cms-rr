import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { theme, GlobalStyle } from './styles/GlobalStyle'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
              keywords,
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
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="https://retirerite.ca" />
          <meta property="og:image" content="https://retirerite.ca/img/og-image.jpg" />

          {/* Leaflet CSS */}
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="crossorigin=""/>

        </Helmet>
        <GlobalStyle />
        <Navbar />
        <main role="main" className="retirerite-main">{children}</main>
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
