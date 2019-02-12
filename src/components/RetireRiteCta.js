import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledCta = styled.div`
  background-color: ${props => props.theme.lightGrey}; 
`

const RetireRiteCta = () => (
  <StyledCta>
    <h2>Call to action</h2>
  </StyledCta>
)

export default RetireRiteCta