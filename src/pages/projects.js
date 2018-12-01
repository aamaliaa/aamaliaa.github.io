import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

const ProjectsPage = (props) => {
  const { data, location } = props
  const projectList = data.projects.edges.map((edge) => edge.node)

  return (
    <Layout
      data={data}
      location={location}
    >
      <ProjectList
        title="All Projects"
        projects={projectList}
      />
    </Layout>
  )
}

export default ProjectsPage

export const ProjectsQuery = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___created], order: DESC },
      filter: {
        fileAbsolutePath: { regex: "/(\/content\/projects)\/.*.md$/" },
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