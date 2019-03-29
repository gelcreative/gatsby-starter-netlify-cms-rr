import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import RetireRiteCta from '../components/RetireRiteCta'
import markdownToHtml from '../util/markdownToHtml'
import curves from '../img/blue-curves.svg'

const StyledHomePage = styled.article`
  background: #ffffff;
  margin-top: -5rem;
  margin-bottom: 200px;
  background: top no-repeat url(${curves});
  background-size: contain;
  &>.container {
    margin-top: 5rem;
  }

  iframe {
    height: 292px;
  }
`

export const IndexPageTemplate = ({
  title,
  intro,
  heading,
  text,
  data,
}) => {
  return (
    <StyledHomePage className="section">
      <div className="container">
        <section className="content retirerite-home-mastehead-section">
          <div className="columns">
            <div className="column">
              <h1 className="has-text-centered">{ title }</h1>
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(intro) }} />
            </div>
          </div>
        </section>
        <section className="content retirerite-home-intro-text-section">
          <div className="columns">
            <div className="column">
              <h1 className="has-text-centered">{ title }</h1>
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(intro) }} />
            </div>
          </div>
        </section>
        <section className="content">
          <div className="columns">
            <div className="column">
              <h2>{ heading }</h2>
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(text) }} />
            </div>
            <div className="column"><iframe title="Value of Advice Video" width="518" height="292" src="https://www.youtube.com/embed/hmpDOd7efO0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
          </div>
        </section>
        <section className="content">
          <h2>Featured Blog Posts</h2>
          <BlogList blogListQuery={data} />
        </section>
      </div>
      <section className="content">
        <RetireRiteCta />
      </section>
    </StyledHomePage>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.object,
}

const IndexPage = ({data}) => {
  const { frontmatter: pageQuery } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        title={pageQuery.title}
        intro={pageQuery.intro}
        heading={pageQuery.heading}
        text={pageQuery.text}
        data={data}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id}) {
      frontmatter {
        title
        intro
        heading
        text
      }
    }
    mainBlogQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 230)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            bannerImage {
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            tags
          }
        }
      }
    }
    grayscaleImageQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            bannerImage {
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100, grayscale: true) {
                    ...GatsbyImageSharpFluid
                  } 
                }
              }
            }
          }
        }
      }
    }
  }
`