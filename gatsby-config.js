/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-theme-ui", {
    resolve: 'gatsby-plugin-theme-ui',
    options: {
      "name": "images",
      "path": "./src/images/",
      "preset": "@theme-ui/preset-funk",
    },
    __key: "images"
  }]
};