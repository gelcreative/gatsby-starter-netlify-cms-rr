import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const ToolsResourcesPageTemplate = ({
  title,
  intro,
  heading,
  description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <section className="columns retirerite-page-intro">
            <div className="column has-text-centered is-10 is-offset-1">
              <div className="content">
                <h1>{title}</h1>
                <p>{intro}</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h2>{heading}</h2>
                <p>{description}</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column content">dookie</div>
                <div className="column content">butt</div>
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
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
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
        heading
        description
      }
    }
  }
`
