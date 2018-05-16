import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = ({ siteMetadata: { social } }) => (
  <footer>
    <span className="copyright">
      <a href="/">&copy; 2018 Amalia Viti</a>
    </span>
    <div className="social">
      {social.map((src) => <OutboundLink href={src.link} key={src.name} target="_blank">{src.name}</OutboundLink>)}
    </div>
  </footer>
)

export default Footer