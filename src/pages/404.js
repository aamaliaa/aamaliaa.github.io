import React from 'react'

import Layout from '../components/Layout'

const NotFoundPage = ({ data, location }) => (
  <Layout
    data={data}
    location={location}
  >
    <div className="notfound">
      <img src="https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif" alt="404" />
      <h1>404</h1>
    </div>
  </Layout>
)

export default NotFoundPage
