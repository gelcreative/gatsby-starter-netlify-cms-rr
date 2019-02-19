import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const StyledAboutPage = styled.article`
  background: #ffffff;
`

export const AboutPageTemplate = ({ title, intro, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <StyledAboutPage>
      <section className="section content">
        <div className="container">
          <div className="columns retirerite-page-intro">
            <div className="column is-10 is-offset-1 has-text-centered">
              <div className="section">
                <h1>
                  {title}
                </h1>
                <p>{intro}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </StyledAboutPage>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
