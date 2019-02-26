import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledEmployee = styled.article`
  background: #ffffff;
`

const EmployeeProfile = () => (
  <StaticQuery 
    query={graphql`
      query EmployeesQuery {
        allEmployeesYaml {
          edges {
            node {
              name
              credentials
              profileImage {
                image
                alt
              }
              bio
            }
          }
        }
      }
    `}
    render={data => {
      const employees = data.allEmployeesYaml.edges
      return (
        <StyledEmployee>
          {employees.map(({ node: employee }) => (
            <>
              <img src={employee.profileImage.image} alt={employee.profileImage.alt} />
              <p className="retirerite-employee-name">{employee.name}<span className="visually-hidden">, </span><span className="retirerite-employee-credentials">{employee.credentials}</span></p>
              <p className="retirerite-employee-bio">{employee.bio}</p>
            </>
          ))}
        </StyledEmployee>
      )
    }}
  />
)

export default EmployeeProfile;