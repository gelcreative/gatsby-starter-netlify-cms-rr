import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import markdownToHtml from '../util/markdownToHtml'


export const ServicesPageTemplate = ({
  title,
  intro,
  content,
  contentComponent,
  helmet,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      { helmet || '' }
      <div className="container">
        <div className="section content">
          <div className="columns retirerite-page-intro">
            <div className="column is-10 is-offset-1">
              <div className="">
                <h1 className="has-text-centered">{title}</h1>
                <div dangerouslySetInnerHTML={{__html: markdownToHtml(intro)}} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div style={{ overflowY: 'hidden' }}>
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
  helmet: PropTypes.object,
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
        helmet={
          <Helmet
            titleTemplate="%s | RetireRite"
          >
            <title>{`${page.frontmatter.title}`}</title>
            <meta name="description" content={page.frontmatter.intro} />
          </Helmet>
        }
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
