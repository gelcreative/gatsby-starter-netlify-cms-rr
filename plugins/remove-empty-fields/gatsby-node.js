/* Found this at:
* https://stackoverflow.com/questions/54292012/handle-empty-strings-as-image-paths-when-using-gatsby-transformer-sharp?rq=1
*/

let fieldsToRemove = []

const deleteFieldsRecursive = (node) => {
  // if node is an empty string, delete it
  fieldsToRemove.forEach(fieldToRemove => {
    if (node[fieldToRemove] === '') {
      delete node[fieldToRemove]
    }
  })

  // if node is an empty object, go into it and evaluate subnodes
  if (typeof node === 'object') {
    Object.values(node).forEach(subNode => {
      deleteFieldsRecursive(subNode)
    })
  }
}

exports.onCreateNode = ({ node }, configOptions) => {
  fieldsToRemove = configOptions.fieldsToRemove

  // if node is a markdownremark node, but doesn't have
  // frontmatter, then return
  if (node.internal.type === 'MarkdownRemark') {
    if (!node.frontmatter) {
      return;
    }

    deleteFieldsRecursive(node)
  }
}
