import React from 'react'
import PropTypes from 'prop-types'
import { ToolsResourcesPageTemplate } from '../../templates/tools-resources-page'

const ToolsResourcesPagePreview = ({ entry, widgetFor }) => {

  return (
    <ToolsResourcesPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={entry.getIn(['data', 'intro'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      leftColumnContent={entry.getIn(['data', 'leftColumn'])}
      rightColumnContent={entry.getIn(['data', 'rightColumn'])}
      leftBottomColumnContent={entry.getIn(['data', 'leftBottomColumn'])}
      rightBottomColumnContent={entry.getIn(['data', 'rightBottomColumn'])}
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
