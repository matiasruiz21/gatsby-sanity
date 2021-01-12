const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`./src/templates/blog.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const res = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Create blog post pages.
  res.data.allSanityPost.edges.forEach((edge) => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.slug.current}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
