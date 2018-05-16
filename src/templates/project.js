import React from 'react'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Helmet } from 'gatsby-plugin-react-helmet'

const Image = ({ image }) => image ?
  (
    <Img
      key={image.childImageSharp.sizes.src}
      sizes={image.childImageSharp.sizes}
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
        content={project.frontmatter.image.childImageSharp.resize.src}
      />
    )}
    {project.frontmatter.image && (
      <meta
        name="twitter:image"
        content={project.frontmatter.image.childImageSharp.resize.src}
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
    const { html, frontmatter: { title, link, created, github, image } } = this.props.data.project
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
    )
  }
}

export default Project

export const query = graphql`
  query ProjectQuery($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        tags
        github
        image {
          childImageSharp {
            sizes(maxWidth: 790) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        created(formatString: "MMMM YYYY")
      }
    }
  }
`