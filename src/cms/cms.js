import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import ToolsResourcesPagePreview from './preview-templates/ToolsResourcesPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('tools-resources', ToolsResourcesPagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)
