/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wbify`,
    description: `Creative web tools and blog by Wbify.`,
    author: `@wbify`,
    siteUrl: `https://wbify.com/`, // or your GitHub Pages URL
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Blog posts from /content/blog
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },

    // MDX for blog support
    `gatsby-plugin-mdx`,

    // Manifest (for favicon / PWA)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wbify`,
        short_name: `wbify`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
