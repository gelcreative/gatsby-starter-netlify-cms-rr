import React from 'react'
import styled from 'styled-components'

import twitter from '../img/twitter-logo.svg'
import facebook from '../img/facebook-logo.svg'
import linkedin from '../img/linkedin-logo.svg'

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
      margin-right: 10px;
  }

  img {
      height: 30px;
  }

  .retirerite-twitter img {
    height: 27px;
  }
`

const SocialIcons = () => (
  <StyledSocialIcons>
    <ul className="retirerite-social">
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
  </StyledSocialIcons>
)

export default SocialIcons