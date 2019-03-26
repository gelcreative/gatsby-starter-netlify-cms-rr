import React from 'react'
import styled from 'styled-components'
import RetireRiteMap from '../components/RetireRiteMap'

const StyledContactDetails = styled.div`
  background: #ffffff;

  ul.retirerite-contact-details-list {
    list-style: none;
    margin-left: 0;
    li {
      margin-bottom: 1em;
    }
  }

  .retirerite-contact-details-list .retirerite-team-contact-details:nth-child(-n+2) {
    margin-bottom: 0;
  }

  .retirerite-contact-details-list .retirerite-team-contact-details:nth-child(n+2) {
      margin-left: 1rem;
  }

  .retirerite-contact-bold {
      font-weight: 700;
  }
`

const ContactDetails = () => {
  return (
    <StyledContactDetails className="columns">
      <div className="column">
        <h2>Contact Us</h2>
        <ul className="retirerite-contact-details-list">
          <li className="retirerite-team-contact-details retirerite-contact-bold">Office: <a href="tel:+17057285551">705.728.5551</a> ext. 4319 </li>
          <li className="retirerite-team-contact-details"><span className="retirerite-contact-bold">Elizabeth Farquharson</span><br /><a href="mailto:tony@retirerite.ca">elizabeth@retirerite.ca</a></li>
          <li className="retirerite-contact-bold">Toll Free: <a href="tel:+18002878844">1.800.287.8844</a></li>
          <li>Fax: 705.728.0012</li>
        </ul>
      </div>
      <div className="column">
        <RetireRiteMap />
      </div>
    </StyledContactDetails>
  )
}

export default ContactDetails