import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import squareLogo from '../img/retirerite-logo-square.svg'
import twitter from '../img/twitter-logo.svg'
import facebook from '../img/facebook-logo.svg'
import linkedin from '../img/linkedin-logo.svg'

const StyledFooter = styled.footer`
  border-top: 5px solid ${props => props.theme.red};
  background-color: ${props => props.theme.lightGrey};

  .retirerite-footer-top {
    padding: 4em 5% 5em;
  }

  .retirerite-gray-border-right {
    border-right: 2px solid #cacaca;
  }

  .retirerite-footer-logo-column img {
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
    padding: 2em 0;
  }

  .retirerite-footer-social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .retirerite-footer-social li {
      margin-right: 10px;
  }

  .retirerite-footer-social img {
      height: 30px;
  }

  .retirerite-twitter img {
    height: 27px;
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
    <section className="container retirerite-footer-top">
      <div className="columns">
        <div className="column is-5-desktop is-half-tablet retirerite-gray-border-right">
          <div className="columns">
            <div className="column is-one-third retirerite-footer-logo-column">
              <Link to="/">
                <img src={squareLogo} title="RetireRite Logo" alt="RetireRite Logo" />
              </Link>
            </div>
            <div className="column is-two-thirds">
              <p>RetireRite Financial Strategies Inc.</p>
              <address>
                Suite 307 - 126 Wellington Street West<br />
                Barrie, ON<br />
                L4N 1K9
              </address>
              <p><a href="tel:+17057285551">Office: (705) 728-5551</a></p>
              <p>Fax: (705) 728-0012</p>
              <p><a href="tel:+18002878844">Toll Free: 1-800-287-8844</a></p>
            </div>
          </div>
        </div>
        <div className="column is-7-desktop is-half-tablet retirerite-footer-navigation-outer">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <h2>Site Navigation</h2>
              <nav role="navigation">
                <ul className="retirerite-footer-navigation">
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Resources</li>
                  <li>Contact</li>
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
          <div className="column">
            <p>
              &copy; { new Date().getFullYear() } RetireRite Strategies Inc.
            </p>
          </div>
          <div className="column retirerite-footer-social">
            <ul className="retirerite-footer-social">
              <li className="retirerite-twitter">
                <a href="https://twitter.com/retirerite_inc" title="RetireRite on Twitter" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/retirerite/" title="RetireRite on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/retireritefinancial/" title="RetireRite on Facebook" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </StyledFooter>
)

export default Footer