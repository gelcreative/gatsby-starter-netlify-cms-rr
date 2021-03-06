import React from 'react'
import styled from 'styled-components'

import Twitter from './svg/Twitter'
import LinkedIn from './svg/LinkedIn'
import Facebook from './svg/Facebook'

const StyledSocialIcons = styled.div`
  display: flex;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    margin-right: 20px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg path {
    transition: fill 300ms;
    fill: #363636;
  }

  a:hover svg path {
    fill: ${props => props.theme.red};
  }

  svg {
    height: 30px;
  }

  .retirerite-twitter svg {
    height: 27px;
  }

  @media(max-width: 769px) {
    ul {
      justify-content: center;
      text-align: center;
    }
  }
`

const SocialIcons = (props) => {
  const { className } = props
  return (
    <StyledSocialIcons className={className}>
      <ul className="retirerite-social">
        <li className="retirerite-twitter">
          <a href="https://twitter.com/retirerite_inc" title="RetireRite on Twitter" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/retirerite/" title="RetireRite on LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/retireritefinancial/" title="RetireRite on Facebook" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>)
  }

export default SocialIcons