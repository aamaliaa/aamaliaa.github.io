import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/Layout'

const Image = ({ image }) => image ?
  (
    <Img
      key={image.childImageSharp.fluid.src}
      fluid={image.childImageSharp.fluid}
    />
  ) : null

const Meta = ({ project }) => (
  <Helmet>
    <title>{project.frontmatter.title}</title>
    <meta name="description" content={project.frontmatter.description} />
    <meta name="og:description" content={project.frontmatter.description} />
    <meta name="twitter:description" content={project.frontmatter.description} />
    <meta name="og:title" content={project.frontmatter.title} />
    {project.frontmatter.image && (
      <meta
        name="og:image"
        content={project.frontmatter.image.childImageSharp.fluid.src}
      />
    )}
    {project.frontmatter.image && (
      <meta
        name="twitter:image"
        content={project.frontmatter.image.childImageSharp.fluid.src}
      />
    )}
  </Helmet>
)

class Project extends React.Component {
  createMarkup() {
    const { html } = this.props.data.project
    return { __html: html }
  }

  render() {
    const { data, location } = this.props
    const { frontmatter: { title, link, created, github, image } } = this.props.data.project
    const projectHostname = link && link.replace('http://', '');
    const projectLink = projectHostname ?
      (<OutboundLink className="project-site" href={link}>
        {projectHostname} &rarr;
      </OutboundLink>) : null
    const githubLink = github ?
      (<OutboundLink href={github}>
        View on Github &rarr;
      </OutboundLink>) : null

    return (
      <Layout
        data={data}
        location={location}
      >
        <>
          <Meta project={data.project} />
          <main className="project">
            <h1 className="project-title">{title}</h1>
            <h4>
              {githubLink}
              {projectLink}
            </h4>
            <Image image={image} />
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            <h5>
              {created}
            </h5>
          </main>
        </>
      </Layout>
    )
  }
}

export default Project

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        tags
        github
        image {
          childImageSharp {
            fluid(maxWidth: 790) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        created(formatString: "MMMM YYYY")
      }
    }
  }
`