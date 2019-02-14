import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import markdownToHtml from '../util/markdownToHtml'

export const ToolsResourcesPageTemplate = ({
  title,
  intro,
  heading,
  description,
  leftColumnContent,
  rightColumnContent,
  leftBottomColumnContent,
  rightBottomColumnContent,
}) => {

  return (
    <section className="section section--gradient">
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
              <div>
                <h2>{heading}</h2>
                <p>{description}</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column">
                  <div dangerouslySetInnerHTML={{__html: markdownToHtml(leftColumnContent)}} />
                </div>
                <div className="column">
                  <div dangerouslySetInnerHTML={{__html: markdownToHtml(rightColumnContent)}} />
                </div>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column">
                  <div dangerouslySetInnerHTML={{__html: markdownToHtml(leftBottomColumnContent)}} />
                </div>
                <div className="column">
                  <div dangerouslySetInnerHTML={{__html: markdownToHtml(rightBottomColumnContent)}} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

ToolsResourcesPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  leftColumnContent: PropTypes.string,
  rightColumnContent: PropTypes.string,
  leftBottomColumnContent: PropTypes.string,
  rightBottomColumnContent: PropTypes.string,
}

const ToolsResourcesPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <ToolsResourcesPageTemplate
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        heading={page.frontmatter.heading}
        description={page.frontmatter.description}
        leftColumnContent={page.frontmatter.leftColumn}
        rightColumnContent={page.frontmatter.rightColumn}
        leftBottomColumnContent={page.frontmatter.leftBottomColumn}
        rightBottomColumnContent={page.frontmatter.rightBottomColumn}
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
      frontmatter {
        title
        intro
        heading
        description
        leftColumn
        rightColumn
        leftBottomColumn
        rightBottomColumn
      }
    }
  }
`
