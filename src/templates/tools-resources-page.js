import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const StyledToolsResourcesPage = styled.article`
  a:hover {}
  a > em {
    background-color: ${props => props.theme.middleBlue};
    color: #ffffff;
    padding-right: 10%;
    padding-left: 10%;
    text-decoration: none;
    font-size: 1.8rem;
    border-radius: 4px;
    transition: 300ms;
  }

  a:hover > em {
    border: 1px solid ${props => props.theme.middleBlue};
    background-color: #ffffff;
    color: ${props => props.theme.middleBlue};
  }
`

export const ToolsResourcesPageTemplate = ({
  title,
  intro,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <StyledToolsResourcesPage className="section section--gradient">
      <div className="container">
        <div className="section content">
          <section className="columns retirerite-page-intro">
            <div className="column has-text-centered is-10 is-offset-1">
              <div>
                <h1>{title}</h1>
                <p>{intro}</p>
              </div>
            </div>
          </section>
          <section className="columns" style={{ marginBottom: '2em' }}>
            <div className="column is-10 is-offset-1">
              <PageContent content={content} />
            </div>
          </section>
        </div>
      </div>
    </StyledToolsResourcesPage>
  )
}

ToolsResourcesPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
}

const ToolsResourcesPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <ToolsResourcesPageTemplate
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        content={page.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

ToolsResourcesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ToolsResourcesPage

export const ToolsResourcesPageQuery = graphql`
  query ToolsResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
