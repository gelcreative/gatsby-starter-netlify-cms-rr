import React from 'react'
import PropTypes from 'prop-types'
import { FaqPageTemplate } from '../../templates/faq-page'

const FaqPagePreview = ({ entry }) => {
  const faQuestions = entry.getIn(['data', 'questions'])
  const questions = faQuestions ? faQuestions.toJS() : []

  return (
  <FaqPageTemplate
    title={entry.getIn(['data', 'title'])}
    questions={questions}
  />
)}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FaqPagePreview
