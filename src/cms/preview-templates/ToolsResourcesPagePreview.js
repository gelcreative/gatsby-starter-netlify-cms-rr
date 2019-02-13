import React from 'react'
import PropTypes from 'prop-types'
import { ToolsResourcesPageTemplate } from '../../templates/ToolsResources-page'

const ToolsResourcesPagePreview = ({ entry, widgetFor }) => {

  return (
    <ToolsResourcesPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
      intro={entry.getIn(['data', 'intro'])}
      heading={entry.getIn(['data', 'heading'])}
    />
  )
}

ToolsResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ToolsResourcesPagePreview
