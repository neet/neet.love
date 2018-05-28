module.exports = {
  siteMetadata: {
    title: 'Neetshin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'PT Sans',
          'Pacifico',
        ]
      }
    }
  ],
}
