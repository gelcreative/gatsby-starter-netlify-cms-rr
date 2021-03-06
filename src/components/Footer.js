import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import SocialIcons from '../components/SocialIcons'
import footerLogo from '../img/retirerite-logo-04-hort-light.svg'
import tmLogo from '../img/RetireRite-logo-03-monochrome.svg'

const StyledFooter = styled.footer`
  border-top: 5px solid ${props => props.theme.red};
  background-color: ${props => props.theme.blue};
  color: #ffffff;

  a {
    color: #ffffff;
  }

  a:hover {
    color: ${props => props.theme.red};
  }

  .retirerite-footer-logo-row {
    padding: 3rem;
  }

  .retirerite-footer-logo {
    max-width: 300px;
  }

  .retirerite-footer-top {
    padding: 0 5% 3em;
  }

  .retirerite-footer-address-column img {
    max-width: 120px;
  }

  .retirerite-footer-navigation-outer h2 {
    font-family: ${props => props.theme.sansFont}, sans-serif;
    text-decoration: underline;
  }

  .retirerite-footer-navigation {
    text-align: left;
  }

  .retirerite-footer-bottom {
    background-color: ${props => props.theme.darkGrey};
    padding: 1em 5%;
  }

  .retirerite-footer-bottom .column {
    align-items: center;
    display: flex;
  }

  .retirerite-footer-bottom-logo {
    width: 50px;
  }

  .retirerite-footer-bottom p {
    color: #363636;
  }

  @media(min-width: 769px) {
    .retirerite-gray-border-right {
      border-right: 2px solid #ffffff;
    }

    .retirerite-footer-social,
    .retirerite-footer-social ul {
      justify-content: flex-end;
    }
  }

  @media(max-width: 769px) {
      .retirerite-footer-bottom .column {
        justify-content: center;
        text-align: center;
      }
  }
`

const Footer = () => (
  <StyledFooter>
    <section className="container retirerite-footer-logo-row">
      <div className="columns">
        <div className="column">        
          <Link to="/">
            <img src={footerLogo} className="retirerite-footer-logo" title="RetireRite Logo" alt="RetireRite Logo" />
          </Link>
        </div>
      </div>
    </section>
    <section className="container retirerite-footer-top">
      <div className="columns">
        <div className="column is-5-desktop is-half-tablet retirerite-gray-border-right">
          <div className="columns">
            <div className="column retirerite-footer-address-column">
              <p>RetireRite Financial Strategies Inc.</p>
              <address>
                126 Wellington Street West, Suite 307<br />
                Barrie, ON<br />
                L4N 1K9
              </address>
              <p><a href="tel:+17057285551">Office: 705.728.5551</a></p>
              <p><a href="tel:+18002878844">Toll Free: 1.800.287.8844</a></p>
              <p>Fax: 705.728.0012</p>
            </div>
          </div>
        </div>
        <div className="column is-7-desktop is-half-tablet retirerite-footer-navigation-outer">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <h2>Site Navigation</h2>
              <nav role="navigation">
                <ul className="retirerite-footer-navigation">
                  <li>
                    <Link to="/about/">
                      The Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-page/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq/">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools-resources/">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="retirerite-footer-bottom">
      <div className="container">
        <div className="columns">
          <div className="column is-narrow">
            <img src={tmLogo} className="retirerite-footer-bottom-logo" alt="RetireRite"/>
          </div>
          <div className="column">
            <p>
              &copy; { new Date().getFullYear() } RetireRite Financial Strategies Inc.
            </p>
          </div>
          <SocialIcons className="column retirerite-footer-social" />
        </div>
      </div>
    </section>
  </StyledFooter>
)

export default Footer