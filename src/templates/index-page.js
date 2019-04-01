import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import RetireRiteCta from '../components/RetireRiteCta'
import markdownToHtml from '../util/markdownToHtml'
import logo from '../img/retirerite-logo-hort.svg'
import masthead from '../img/family-banner-2000x1008-v2.jpg'

const StyledHomePage = styled.article`
  background: #ffffff;
  margin-top: -5rem;
  margin-bottom: 200px;

  iframe {
    height: 292px;
  }

  .retirerite-home-masthead-section {
    background: center no-repeat url(${masthead});
    background-size: cover;
    min-height: 500px;
    padding: 150px 0;
    img {
      width: 300px;
      max-width: 90%;
    }
    p {
      color: ${props => props.theme.blue};
    }
    h1, p {
      margin-bottom: 4rem;
    }
  }

  .retirerite-home-intro-text-section 

.retirerite-home-intro-text-section ul li {

}

  .retirerite-home-intro-text-section {
    padding: 110px 0;
    background-color: ${props => props.theme.blue};
    color: #ffffff;
    .larger-text {
      font-family: ${props => props.theme.serifFont};
      font-size: 3.2rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: stretch;
      list-style-type: circle;
      li {
        flex: 1 1 300px;
        min-width: 42%;
        margin: 1rem 2%;
      }
    }
  }

  @media (min-width: 767px) {
    .retirerite-home-masthead-section {
      padding-bottom: 240px;
    }

    .retirerite-home-intro-text-section {
      transform: skew(-3deg) rotate(-3deg);
      margin-top: -75px;
      > .section {
        transform: skew(3deg) rotate(3deg);
      }
    }

    .retirerite-value-section {
      padding-top: 140px;
    }
  }

  @media (max-width: 769px) {
    .retirerite-home-masthead-section::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(151, 154, 161, 0.6);
    }

    .retirerite-home-masthead-section {
        position: relative;
    }
  }
`

export const IndexPageTemplate = ({
  title,
  masthead,
  sectionTwo,
  sectionThree,
  data,
}) => {
  return (
    <StyledHomePage>
      <section className="retirerite-home-masthead-section">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column">
              </div>
              <div className="column has-text-centered">
                <img src={logo} alt="RetireRite Logo" />
                <h1 className="has-text-centered">{ title }</h1>
                <div dangerouslySetInnerHTML={{ __html: markdownToHtml(masthead)}} className="masthead-area-text" />
                <Link className="button button-1" to="/book-a-meeting/">Start a Conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="retirerite-home-intro-text-section">
        <div className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <div dangerouslySetInnerHTML={{ __html: markdownToHtml(sectionTwo) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <section className="content retirerite-value-section">
            <div className="columns">
              <div className="column">
                <h2>{ sectionThree.heading }</h2>
                <div dangerouslySetInnerHTML={{ __html: markdownToHtml(sectionThree.text) }} />
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
  masthead: PropTypes.string,
  sectionTwo: PropTypes.string,
  sectionThree: PropTypes.object,
  data: PropTypes.object,
}

const IndexPage = ({data}) => {
  const { frontmatter: pageQuery } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        title={pageQuery.title}
        masthead={pageQuery.masthead}
        sectionTwo={pageQuery.sectionTwo}
        sectionThree={pageQuery.sectionThree}
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
        masthead
        sectionTwo
        sectionThree {
          heading
          text
        }
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