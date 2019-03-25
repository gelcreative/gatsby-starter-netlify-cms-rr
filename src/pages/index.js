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
  &>.container {
    margin-top: 5rem;
  }

  iframe {
    height: 292px;
  }
`

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props

    return (
      <Layout>
        <StyledHomePage className="section">
          <div className="container">
            <section className="content">
              <div className="columns">
                <div className="column">
                  <h1 className="has-text-centered">RetireRite Financial Strategies Inc.</h1>
                  <p>Everyone’s needs, and dreams are different. The time to start making them happen is right now, and it all starts with having a financial plan. Studies show that Canadians backed by a comprehensive financial plan feel:</p>
                  <ul>
                    <li>more on track with their financial goals and retirement plans;</li>
                    <li>they have improved their ability to save in the past five years;</li>
                    <li>equipped to deal with unexpected financial emergencies and to weather tough economic times;</li>
                    <li>able to indulge in their discretionary spending goals.</li>
                  </ul>
                  <p>Furthermore, regardless of net worth, Canadians working with a financial advisor hold more assets, save at a higher rate, and report significantly higher levels of financial and emotional well-being than non-advised Canadians. </p>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="columns">
                <div className="column">
                  <h2>The Value of Financial Planning</h2>
                  <p>Did you know that when it comes to your financial well-being, advice may be the difference between achieving your financial goals and falling short? Make the most of your money with the help of a financial security advisor.</p>
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
