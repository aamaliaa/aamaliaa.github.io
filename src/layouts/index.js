import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styl/Main.styl'

const Layout = ({ children, data, location }) => (
  <div className="root">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <main>
      {location.pathname !== "/" && <Header siteMetadata={data.site.siteMetadata} />}
      {children()}
    </main>
    <Footer siteMetadata={data.site.siteMetadata} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
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
