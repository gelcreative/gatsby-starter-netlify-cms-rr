import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import RetireRiteCta from '../components/RetireRiteCta'
import markdownToHtml from '../util/markdownToHtml'
import curves from '../img/blue-curves.svg'
import logo from '../img/retirerite-logo-hort.svg'
import masthead from '../img/family-banner-2000x1008-v2.jpg'

const StyledHomePage = styled.article`
  background: #ffffff;
  margin-top: -5rem;
  margin-bottom: 200px;

  iframe {
    height: 292px;
  }

  .retirerite-home-mastehead-section {
    background: center no-repeat url(${masthead});
    background-size: cover;
    min-height: 400px;
    padding: 150px 0;
    img {
      width: 300px;
      max-width: 90%;
    }
  }

  .retirerite-home-intro-text-section {
    padding: 150px 0;
    background-color: ${props => props.theme.blue};
    color: #ffffff;
  }

  @media (min-width: 767px) {
    .retirerite-home-intro-text-section {
      transform: skew(-15deg) rotate(-5deg) translateX(-5%);
      width: 110%;
      > .container {
        transform: skew(15deg) rotate(5deg) translateX(5%);
      }
    }
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
    <StyledHomePage>
      <section className="retirerite-home-mastehead-section">
        <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column">
              </div>
              <div className="column has-text-centered">
                <img src={logo} alt="RetireRite Logo" />
                <h1 className="has-text-centered">{ title }</h1>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="retirerite-home-intro-text-section">
        <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div dangerouslySetInnerHTML={{ __html: markdownToHtml(intro) }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
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
      </div>
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