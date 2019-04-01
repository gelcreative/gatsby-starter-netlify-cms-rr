import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledCta = styled.div`
  background-color: ${props => props.theme.lightGrey};
  padding: 2em;
  box-shadow: 7px 7px #c3c1d3;
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
    <h2>Have a question?</h2>
    <div className="columns">
      <div className="column is-three-quarters">
        <p>Whether it's personal insurance and financial planning or group health benefits and retirement savings solutions, we can help.</p>
      </div>
      <div className="column is-one-quarter has-text-centered">
        <Link className="button button-1" to="/book-a-meeting/">Start a Conversation</Link>
      </div>
    </div>
  </StyledCta>
)

export default RetireRiteCta