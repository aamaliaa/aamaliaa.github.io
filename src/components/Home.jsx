import React from 'react'
import About from './About.jsx'
import ProjectList from './ProjectList.jsx'

class Home extends React.Component {

  render() {
    return (
      <main>
        <About
          {...this.props.main} />
        <ProjectList
          projects={this.props.projects} />
      </main>
    )
  }

}

export default Home
