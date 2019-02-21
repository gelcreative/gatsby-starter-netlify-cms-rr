import React from 'react'
import styled from 'styled-components'
import mapPlaceholder from '../img/map-placeholder.jpg'
import LeafletMap from '../components/LeafletMap'

const StyledContactDetails = styled.div`
  background: #ffffff;

  ul.retirerite-contact-details-list {
    list-style: none;
    margin-left: 0;
    li {
      margin-bottom: 1em;
    }
  }
`

const ContactDetails = () => {
  return (
    <StyledContactDetails className="columns">
      <div className="column">
        <h2>Contact Us</h2>
        <ul className="retirerite-contact-details-list">
          <li><a href="tel:+17057285551">Office: (705) 728-5551 ext. 4230</a></li>
          <li><a href="tel:+18002878844">Toll Free: 1-800-287-8844</a></li>
          <li>Fax: (705) 728-0012</li>
        </ul>
      </div>
      <div className="column">
        <LeafletMap />
      </div>
    </StyledContactDetails>
  )
}

export default ContactDetails