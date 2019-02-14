import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import markdownToHtml from '../util/markdownToHtml'

const StyledFaqPage = styled.article`
  background-color: #ffffff;
`

const FaqPageTemplate = ({
  title,
  questions,
}) => {
  return (
    <StyledFaqPage>
      <section className="section content">
        <div className="columns retirerite-page-intro">
            <div className="column has-text-centered is-10 is-offset-1">
              <h1>{title.title}</h1>
            </div>
        </div>
        <div className="columns retirerite-page-intro">
            <div className="column has-text-centered is-10 is-offset-1">
              <ul>
                {questions.map(question => {
                  return (
                    <li key={question.question} className="retirerite-faq-item">
                      <h2>{question.question}</h2>
                      <p dangerouslySetInnerHTML={{ __html: markdownToHtml(question.answer) }} />
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
      </section>
    </StyledFaqPage>
  )
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string,
}

const FaqPage = ({data}) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <FaqPageTemplate
        title={page.frontmatter.title}
        questions={page.frontmatter.questions}
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
