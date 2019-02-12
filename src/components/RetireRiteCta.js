import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledCta = styled.div`
  background-color: ${props => props.theme.lightGrey};
  padding: 2em;
  box-shadow: 7px 7px ${props => props.theme.lightBlue};
`

const RetireRiteCta = () => (
  <StyledCta>
    <h2>Call to action</h2>
    <div className="columns">
      <div className="column is-9">
        <p>Call us today to see how we can help you and your business put together the best plan for your employees.</p>
      </div>
      <div className="column is-3">
        <Link className="button button-1" to="/contact/">Call Us</Link>
      </div>
    </div>
  </StyledCta>
)

export default RetireRiteCta