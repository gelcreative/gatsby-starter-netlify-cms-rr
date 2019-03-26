import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import BlogList from '../../components/BlogList'
import RetireRiteCta from '../../components/RetireRiteCta'

export default class BlogPage extends React.Component {

  render() {
    const blogListQuery = this.props.data

    return (
      <Layout>
        <article className="section">
          <div className="container">
            <div className="section content">
              <section className="columns retirerite-page-intro">
                <div className="column has-text-centered">
                  <div className="">
                    <h1>Blog</h1>
                  </div>
                </div>
              </section>
              <BlogList blogListQuery={blogListQuery} />
            </div>
          </div>
          <section className="content">
            <RetireRiteCta />
          </section>
        </article>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    mainQuery: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
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