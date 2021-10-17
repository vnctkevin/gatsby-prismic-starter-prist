module.exports = {
  siteMetadata: {
    title: `RISTEK Open Source`,
    description: `RISTEK Open Source is the world's largest student-led and product-centered open source organization, a part of RISTEK Fasilkom UI and is the creator of SusunJadwal, RISTEK.Link, and more.`,
    author: `RISTEK Open Source`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName : 'ristekoss-by-vnctkevin.prismic.io'
      },
    },
  ],
}
