import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ServicesPage from './services-page';

const StyledFaqPage = styled.article`
  background-color: #ffffff;
`

const FaqPageTemplate = (
  title,
  questions,
) => {
  return (
    <StyledFaqPage>
      <h1>{title}</h1>
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

export default ServicesPage

export const faqPageQuery = graphql`
  query FaqPate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        questions
      }
    }
  }
`
