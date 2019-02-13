import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, widgetFor }) => {

  return (
    <ServicesPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicesPagePreview
