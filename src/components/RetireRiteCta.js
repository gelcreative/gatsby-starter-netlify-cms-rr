import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledCta = styled.div`
  background-color: ${props => props.theme.lightGrey};
  padding: 2em;
  box-shadow: 7px 7px ${props => props.theme.lightBlue};
  margin-top: 4rem;
  
  @media(min-width: 1115px) {
    width: 90%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
`

const RetireRiteCta = () => (
  <StyledCta>
    <h2>Call to action</h2>
    <div className="columns">
      <div className="column is-three-quarters">
        <p>Call us today to see how we can help you and your business put together the best plan for your employees.</p>
      </div>
      <div className="column is-one-quarter has-text-centered">
        <Link className="button button-1" to="/contact/">Call Us</Link>
      </div>
    </div>
  </StyledCta>
)

export default RetireRiteCta