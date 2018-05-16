import React from 'react'
import Link from 'gatsby-link'

import ProjectList from '../components/ProjectList'

const ProjectsPage = (props) => {
  const { data: { projects } } = props
  const projectList = projects.edges.map((edge) => edge.node)

  return (
    <ProjectList
      title="All Projects"
      projects={projectList}
    />
  )
}

export default ProjectsPage

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___created], order: DESC },
      filter: {
        fileAbsolutePath: { regex: "/(\/content\/projects)\/.*\\.md$/" },
      },
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            created(formatString: "YYYY")
            path
            description
          } 
        }
      }
    }
  }
`