import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SingleBlogPost from '../../components/SingleBlogPost'

const StyledBlogPage = styled.article`
  background: #ffffff;
`

export default class BlogPage extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { mainQuery, grayscaleImageQuery } = this.props.data
    const { edges: posts } = mainQuery
    const { edges: grayScaleImages } = grayscaleImageQuery

    return (
      <Layout>
        <StyledBlogPage>
          {posts
            .map(({ node: post }, i) => {
              console.log(post.frontmatter.title, grayScaleImages[i].node.frontmatter.bannerImage.image)
              // return (
              //   <SingleBlogPost 
              //     key={post.id}
              //     title={post.frontmatter.title}
              //     date={post.frontmatter.date}
              //     excerpt={post.excerpt}
              //     tag={post.frontmatter.tags[0]}
              //     bannerImage={post.frontmatter.bannerImage.image}
              //     grayscaleBannerImage={grayScaleImages[i].node.frontmatter.bannerImage.image}
              //     slug={post.fields.slug}
              //   />
              // )
            })  
          }
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