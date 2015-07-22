import React from 'react';
import _ from 'underscore';
import moment from 'moment';
import Header from './Header.jsx';

class Project extends React.Component {

  constructor(props) {
    super(props);

    var params = props.params || false;
    var project;

    if (params && params.slug) {
      project = _.find(props.projects, function(p) {
        return p.slug === params.slug;
      });
    }

    this.state = project || {};
  }

  render() {
    if (!this.state) {
      return <div />;
    }

    var project = this.state;
    var projectHostname = project.link && project.link.replace('http://', '');
    var projectDate = project.created && moment(new Date(project.created)).format('MMMM YYYY');
    var projectLink = projectHostname ?
      (<a className="project-site" href={project.link}>
        {projectHostname} &rarr;
      </a>) : null;
    var githubLink = project.github ?
      (<a href={project.github}>
        View on Github &rarr;
      </a>) : null;
    var hero = project.hero ?
      (<div className="hero" style={{ backgroundImage: "url('" + project.hero + "')" }} />) :
      null;

    return (
      <main>
        <Header />
        <section className="project">
          <h1 className="project-title">{project.title}</h1>
          <h4>
            {githubLink}
            {projectLink}
          </h4>
          {hero}
          <div
            dangerouslySetInnerHTML={{ __html: project.html }} />
          <h5>
            {projectDate}
          </h5>
        </section>
      </main>
    );
  }

}

export default Project;
