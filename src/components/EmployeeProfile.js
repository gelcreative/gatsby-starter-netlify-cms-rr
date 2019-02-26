import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledEmployee = styled.article`
  background: #ffffff;
`

const EmployeeProfile = () => (
  <StaticQuery 
    query={graphql`
      query EmployeeQuery {

      }
    `}
    render={data => (
      <p>Employee!</p>
    )}
  />
)