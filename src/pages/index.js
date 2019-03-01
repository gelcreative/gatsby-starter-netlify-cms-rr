import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import RetireRiteCta from '../components/RetireRiteCta'
import curves from '../img/blue-curves.svg'

const StyledHomePage = styled.article`
  background: #ffffff;
  margin-top: -5rem;
  margin-bottom: 200px;
  background: top no-repeat url(${curves});
  background-size: contain;
`

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props

    return (
      <Layout>
        <StyledHomePage className="section">
          <div className="container">
            <section className="content has-text-centered">
              <h1>RetireRite Financial Strategies Inc.</h1>
              <p>A sound financial plan is crucial to living the life you want, on your terms. Whether it's for your business or your personal finances, together we can build the roadmap to success. And we'll stay with you every step of the way.</p>
              <p>Through comprehensive analysis, in-depth market research and the support of a team of highly-qualified tax and product specialists, we can create customized financial plans that will help you achieve your goals.</p>
            </section>
            <section className="content">
              <div className="columns">
                <div className="column">
                  <h2>The value of financial planning</h2>
                  <p>Did you know that when it comes to your financial well-being, advice may be the difference between achieving your financial goals and falling short? Make the most of your money with the help of a financial security advisor.</p>
                </div>
                <div className="column"><img src="https://via.placeholder.com/600x300.png" alt=""/></div>
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
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query IndexQuery {
  mainQuery: allMarkdownRemark(
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
