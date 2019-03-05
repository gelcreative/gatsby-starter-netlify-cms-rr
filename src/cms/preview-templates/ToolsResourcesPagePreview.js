import React from 'react'
import PropTypes from 'prop-types'
import { ToolsResourcesPageTemplate } from '../../templates/tools-resources-page'

const ToolsResourcesPagePreview = ({ entry, widgetFor }) => {

  return (
    <ToolsResourcesPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={entry.getIn(['data', 'intro'])}
      content={widgetFor('body')}
    />
  )
}

ToolsResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ToolsResourcesPagePreview
