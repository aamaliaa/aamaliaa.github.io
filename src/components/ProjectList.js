import React from 'react'

class ProjectList extends React.Component {

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <div className="list project-list">
          {this.props.projects.map((project) => {
            const { id, fields: { slug } } = project
            const { title, created, description } = project.frontmatter
            return (
              <section key={id}>
                <a href={slug} className="project-link">
                  <h3>{title}</h3>
                  <span className="project-date">{created}</span>
                  <p>{description}</p>
                </a>
              </section>
            )
          })}
        </div>
      </section>
    )
  }

}

export default ProjectList