module.exports = {
  siteMetadata: {
    title: 'AMALIA VITI',
    description: '',
    social: [
      { name: 'Twitter', link: '//twitter.com/amaliaviti' },
      { name: 'Github', link: '//github.com/aamaliaa' },
      { name: 'LinkedIn', link: '//www.linkedin.com/in/amaliaviti' },
      { name: 'Instagram', link: '//www.instagram.com/aamaliaa' },
      { name: 'Soundcloud', link: '//soundcloud.com/amalia' },
    ],
    scripts: {
      ga: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\',\'UA-65420021-1\',\'auto\');ga(\'send\',\'pageview\');'
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects/`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/parts/`,
        name: `parts`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-65420021-1",
      },
    },
  ],
}
