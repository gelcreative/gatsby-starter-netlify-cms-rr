import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import markdownToHtml from '../util/markdownToHtml'
import RetireRiteCta from '../components/RetireRiteCta'

const StyledFaqPage = styled.article`
  .retirerite-page-intro {
    margin-top: 4rem;
  }

  .retirerite-faq-list {
    list-style-type: none;
  }

  .retirerite-faq-item {
    margin-bottom: 5rem;
    h2 {
      background-color: ${props => props.theme.lightGrey};
      padding: 1rem 1em;
      position: relative;
      &::before {
        content: 'Q.';
        position: absolute;
        left: -40px;
        font-size: 3rem;
      }
    }

    li:nth-child(2) {
      padding: 1rem 1em;
      position: relative;
      &::before {
        content: 'A.';
        position: absolute;
        left: -40px;
        font-size: 3rem;
      }
    }
  }

  .retirerite-faq-item > ul {
      list-style-type: none;
  }
`

export const FaqPageTemplate = ({
  title,
  questions,
  helmet,
}) => {
  return (
    <StyledFaqPage className="section">
      { helmet || ''}
      <div className="container">
        <section className="content">
          <div className="columns retirerite-page-intro">
              <div className="column has-text-centered is-10 is-offset-1">
                <h1>{title}</h1>
              </div>
          </div>
          <div className="columns">
              <div className="column is-10 is-offset-1">
                <ul className="retirerite-faq-list">
                  {questions.map(question => {
                    return (
                      <li key={question.question} className="retirerite-faq-item">
                        <ul>
                          <li>
                            <h2>{question.question}</h2>
                          </li>
                          <li>
                            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(question.answer) }} />
                          </li>
                        </ul>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </div>
        </section>
      </div>
      <section className="content">
        <RetireRiteCta />
      </section>
    </StyledFaqPage>
  )
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string,
  questions: PropTypes.array,
  helmet: PropTypes.object,
}

const FaqPage = ({data}) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <FaqPageTemplate
        title={page.frontmatter.title}
        questions={page.frontmatter.questions}
        helmet={
          <Helmet
            titleTemplate="%s | RetireRite"
          >
            <title>{`${page.frontmatter.title}`}</title>
          </Helmet>
        }
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FaqPage

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        questions {
          question
          answer
        }
      }
    }
  }
`
