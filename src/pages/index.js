import React from 'react'
import Link from 'gatsby-link'

import About from '../components/About'
import ProjectList from '../components/ProjectList'

const IndexPage = (props) => {
  const { data: { about, site: { siteMetadata }, projects } } = props
  const projectList = projects.edges.map((edge) => edge.node)

  return (
    <div>
      <About
        title={siteMetadata.title}
        blurb={about.html}
      />
      <ProjectList
        title="Featured Projects"
        projects={projectList}
      />
    </div>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    about: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___created], order: DESC },
      filter: {
        fileAbsolutePath: { regex: "/(\/content\/projects)\/.*\\.md$/" },
        frontmatter: { featured: { eq: true } },
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
            featured
          } 
        }
      }
    }
  }
`