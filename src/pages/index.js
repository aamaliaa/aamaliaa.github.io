import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import About from '../components/About'
import ProjectList from '../components/ProjectList'

const IndexPage = (props) => {
  const { data, location } = props
  const { about, site: { siteMetadata }, projects } = data
  const projectList = projects.edges.map((edge) => edge.node)

  return (
    <Layout
      data={data}
      location={location}
    >
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
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query($path: String!) {
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
        fileAbsolutePath: { regex: "/(\/content\/projects)\/.*.md$/" },
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