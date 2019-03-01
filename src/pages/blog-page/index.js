import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SingleBlogPost from '../../components/SingleBlogPost'
import RetireRiteCta from '../../components/RetireRiteCta'

const StyledBlogPage = styled.section`
  .columns.retirerite-blog-body {
    flex-wrap: wrap;
  }

  .retirerite-blog-body-item:nth-child(2) .single-blog-post-info,
  .retirerite-blog-body-item:nth-child(3) .single-blog-post-info {
      width: 100%
  }

  @media(min-width: 769px) {
    .retirerite-blog-body-item:nth-child(n+4) article {
      padding-top: 0;
      min-height: unset;
    }

    .retirerite-blog-body-item:nth-child(n+4) [class^="single-post-bg"] {
      width: 20%;
    }

    .retirerite-blog-body-item:nth-child(n+4) .single-blog-post-info {
      min-height: 200px;
      max-height: unset;
      position: relative;
      width: 80%;
      margin-left: auto;
      background-color: ${props => props.theme.lightGrey}
    }

    .retirerite-blog-body-item:nth-child(n+4) article:hover .single-blog-post-info {
      background-color: ${props => props.theme.middleBlue};
    }
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
        <StyledBlogPage className="section">
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
                        <div className={`column${columnClass} retirerite-blog-body-item`}>
                          <SingleBlogPost 
                            key={post.id}
                            title={post.frontmatter.title}
                            date={post.frontmatter.date}
                            description={post.frontmatter.description}
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
          <section className="content">
            <RetireRiteCta />
          </section>
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