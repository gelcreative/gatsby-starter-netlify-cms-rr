import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import RetireRiteCta from '../components/RetireRiteCta'

const StyledBlogPost = styled.article`
  background: #ffff;
  .retirerite-blog-masthead {
    height: 400px;
    background: center no-repeat;
    background-size: cover;
    border-bottom: 7px solid #acd4ef;
  }

  .retirerite-blog-date {
    font-style: italic;
    font-size: 1.6rem;
    color: #515151;
  }

  .retirerite-blog-intro {
      border-top: 2px solid #cbcbcb;
      border-bottom: 2px solid #cbcbcb;
      padding: 2em 0;
  }

  .retirerite-blog-heading-row {
    margin-top: 2em;
  }

  .retirerite-blog-intro-row {
      margin-top: 2em;
  }

  .retirerite-blog-content-row {
      margin-top: 2em;
  }
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  bannerImage,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <StyledBlogPost>
      {helmet || ''}
      <div 
        className="retirerite-blog-masthead"
        style={{
          backgroundImage: `url(${
            !!bannerImage.childImageSharp 
            ? bannerImage.childImageSharp.fluid.src 
            : bannerImage
          })`
        }}
      ></div>
      <article className="container section content">
        <section className="columns retirerite-blog-heading-row">
          <div className="column is-10 is-offset-1 has-text-centered">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p className="retirerite-blog-date">Published: {date}</p>
          </div>
        </section>
        <section className="columns is-centered retirerite-blog-intro-row">
          <div className="column has-text-centered is-narrow retirerite-blog-intro">
            <p>{description}</p>
          </div>
        </section>
        <section className="columns retirerite-blog-content-row">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
          </div>
        </section>
        <section className="columns">
          <div className="column">
            <RetireRiteCta />
          </div>
        </section>
      </article>
    </StyledBlogPost>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.bannerImage.image}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
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
`
