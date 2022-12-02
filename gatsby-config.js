/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipe site",
    author: "Abraham Kingsley",
    person: {
      name: "kingsley",
      age: 22,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "Suzie",
        age: 22,
      },
      {
        name: "Greta",
        age: 22,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/src/examples`,
      },
    },
  ],
};
