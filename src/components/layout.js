import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styl/Main.styl'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          name
          link
        }
      }
    }
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <>
        <div className="root">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
            ]}
          />
          <main>
            {location.pathname !== "/" && <Header siteMetadata={data.site.siteMetadata} />}
            {children}
          </main>
          <Footer siteMetadata={data.site.siteMetadata} />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
  location: PropTypes.object,
}

export default Layout