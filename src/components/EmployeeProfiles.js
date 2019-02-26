import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledEmployee = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  &:nth-child(n+2) {
    /* flex-grow: 1;
    flex-shrink: 1; */
    width: 520px;
    margin-right: 2em;
  }

  .retirerite-employee-intro {
    min-width: 25%;
    flex-grow: 1;
    .retirerite-employee-image-container {
      max-width: 200px;
    }
    .retirerite-employee-name {
      font-size: 2.2rem;
      .retirerite-employee-credentials {
        font-size: 1.2rem;
        font-style: italic;
        color: ${props => props.theme.darkGrey};
        display: flex;
        border-top: 1px solid ${props => props.theme.middleBlue};
        margin-top: 0.5em;
        padding-top: 0.25em;
      }
    }
  }

  .retirerite-employee-bio {
    margin: 1em 0;
    flex-grow: 2;
  }
`

const EmployeeProfiles = () => (
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
        <>
          {employees.map(({ node: employee }) => (
            <StyledEmployee className="retirerite-employee">
              <div className="retirerite-employee-intro">
                <div className="retirerite-employee-image-container">
                  <img src={employee.profileImage.image} alt={employee.profileImage.alt} />
                </div>
                  <p className="retirerite-employee-name">{employee.name}<span className="visually-hidden">, </span><span className="retirerite-employee-credentials">{employee.credentials}</span></p>
              </div>
                <p className="retirerite-employee-bio">{employee.bio}</p>
            </StyledEmployee>
          ))}
        </>
      )
    }}
  />
)

export default EmployeeProfiles;