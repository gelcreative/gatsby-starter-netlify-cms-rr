import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SingleBlogPost from '../../components/SingleBlogPost'

const StyledBlogPage = styled.section`
  .columns.retirerite-blog-body {
    flex-wrap: wrap;
  }
`

export default class BlogPage extends React.Component {

  render() {
    const { mainQuery, grayscaleImageQuery } = this.props.data
    const { edges: posts } = mainQuery
    const { edges: grayScaleImages } = grayscaleImageQuery

    let columnClass = ""

    return (
      <Layout>
        <StyledBlogPage>
          <div className="container">
            <div className="section content">
              <div className="columns retirerite-page-intro">
                <div className="column has-text-centered">
                  <div className="">
                    <h1>Blog</h1>
                  </div>
                </div>
              </div>
              <div className="columns retirerite-blog-body">
                  {posts
                    .map(({ node: post }, i) => {

                      switch(i) {
                        case 1: columnClass = " is-7"
                          break;
                        case 2: columnClass = " is-5"
                          break;
                        default: columnClass = " is-12"
                      }

                      return (
                        <div className={`column${columnClass}`}>
                          <SingleBlogPost 
                            key={post.id}
                            title={post.frontmatter.title}
                            date={post.frontmatter.date}
                            excerpt={post.excerpt}
                            tag={post.frontmatter.tags[0]}
                            bannerImage={post.frontmatter.bannerImage.image}
                            grayscaleBannerImage={grayScaleImages[i].node.frontmatter.bannerImage.image}
                            slug={post.fields.slug}
                          />
                        </div>
                      )
                    })  
                  }                  
              </div>
            </div>
          </div>
        </StyledBlogPage>
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
          excerpt(pruneLength: 230)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
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