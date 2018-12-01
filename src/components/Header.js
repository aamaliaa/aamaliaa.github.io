import React from 'react'
import { Link } from 'gatsby'

import TrianglesLogo from '../images/triangles.svg'

const Header = ({ siteMetadata: { title } }) => (
  <header>
    <Link to="/">{title}</Link>
    <div className="links">
      <Link to="/projects">Projects</Link>
      <Link to="/">
        <img className="triangles" src={TrianglesLogo} alt="triangles logo" />
      </Link>
    </div>
  </header>
)

export default Header
