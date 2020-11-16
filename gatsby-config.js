module.exports = {
  siteMetadata: {
    title: "Niko Bentley | Portfolio",
    description: "A showcase of my work and skills.",
    author: "@niko_bentley",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sass",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
