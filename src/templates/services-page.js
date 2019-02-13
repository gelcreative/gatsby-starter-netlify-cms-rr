import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const ServicesPageTemplate = ({
  title,
  intro,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section content">
          <div className="columns retirerite-page-intro">
            <div className="column has-text-centered is-10 is-offset-1">
              <div className="">
                <h1>{title}</h1>
                <p>{intro}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="">
                <PageContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <ServicesPageTemplate
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        content={page.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
