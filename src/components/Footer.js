import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import squareLogo from '../img/retirerite-logo-square.svg'

const StyledFooter = styled.footer`
  border-top: 5px solid ${props => props.theme.red};
  background-color: ${props => props.theme.lightGrey};

  .retirerite-footer-top {
    padding: 4em 0 5em 0;
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
`

const Footer = () => (
  <StyledFooter>
    <section class="container retirerite-footer-top">
      <div class="columns">
        <div class="column is-one-third">
          <div class="columns">
            <div class="column is-one-third">
              <Link to="/">
                <img src={squareLogo} title="RetireRite Logo" alt="RetireRite Logo" />
              </Link>
            </div>
            <div class="column is-two-thirds">
              <p>RetireRite Financial Strategies Inc.</p>
              <address>
                Suite 307 - 126 Wellington Street West<br />
                Barrie, ON<br />
                L4N 1K9
              </address>
            </div>
          </div>
        </div>
        <div class="column is-two-thirds retirerite-footer-navigation-outer">
          <div class="columns is-centered">
            <div class="column is-narrow">
              <h2>Site Navigation</h2>
              <ul class="retirerite-footer-navigation">
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="retirerite-footer-bottom">
      <div class="container">
        <div class="columns">
          <div class="column">&copy; { new Date().getFullYear() } RetireRite Strategies Inc.</div>
          <div class="column">
            <h2>Social Media</h2>
          </div>
        </div>
      </div>
    </section>
  </StyledFooter>
)

export default Footer