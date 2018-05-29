require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Neetshin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',

    /** Resolving src/config files */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/src/config`,
      },
    },

    /** Resolving Google Fonts */
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'PT Sans',
          'Pacifico',
        ]
      }
    },

    /** Enabling to refer Medium */
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: process.env.MEDIUM_USERNAME,
      },
    },
  ],
}
