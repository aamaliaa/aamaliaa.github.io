/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `src/content/projects`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/projects${relativeFilePath}`,
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`)

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/(\/content\/projects)\/.*.md$/" } },
              limit: 1000,
            ) {
              edges {
                node {
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {          
          createPage({
            path: node.fields.slug,
            component: projectTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
        })
        
        resolve()
      })
    )
  })
}