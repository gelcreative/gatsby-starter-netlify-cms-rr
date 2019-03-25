import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import markdownToHtml from '../util/markdownToHtml'

const StyledEmployee = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  &:nth-child(n+2) {
    flex: 1 1 300px;
    margin-right: 5%;
  }

  .retirerite-employee-intro {
    flex: 1 1 300px;
    margin-right: 5%;
    max-width: 200px;
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
    flex: 3 3 300px;
  }
`

const EmployeeProfiles = () => (
  <StaticQuery 
    query={graphql`
      query EmployeesQuery {
        allEmployeesYaml (
          sort: {order: ASC, fields: [date]}
        ) {
          edges {
            node {
              id
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
            <StyledEmployee className="retirerite-employee" key={employee.id}>
              <div className="retirerite-employee-intro">
                <div className="retirerite-employee-image-container">
                  <img src={employee.profileImage.image} alt={employee.profileImage.alt} />
                </div>
                  <p className="retirerite-employee-name">{employee.name}<span className="visually-hidden">, </span><span className="retirerite-employee-credentials">{employee.credentials}</span></p>
              </div>
                <div className="retirerite-employee-bio" dangerouslySetInnerHTML={{__html: markdownToHtml(employee.bio)}}/>
            </StyledEmployee>
          ))}
        </>
      )
    }}
  />
)

export default EmployeeProfiles;