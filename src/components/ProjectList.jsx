import React from 'react';
import moment from 'moment';

class ProjectList extends React.Component {

  render() {
    return (
      <section>
        <h2>Featured Projects</h2>
        <div className="list project-list">
          {this.props.projects.map(function (project) {
            var date = moment(new Date(project.created)).format('YYYY');
            return (
              <section key={project.slug}>
                <a href={"/projects/" + project.slug} className="project-link">
                  <h3>{project.title}</h3>
                  <span className="project-date">{date}</span>
                  <p>{project.description}</p>
                </a>
              </section>
            );
          })}
        </div>
      </section>
    );
  }

}

export default ProjectList;
