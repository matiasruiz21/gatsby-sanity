module.exports = {
  siteMetadata: {
    title: "Picado 🌶️",
    author: "Matías Ruiz 😎",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "mqodunvr",
        dataset: "production",
        graphqlTag: "default",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
