const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type !== `MarkdownRemark`) {
        return;
    }
    
    const path = createFilePath({ node, getNode, basePath: `pages` });
    if (path.indexOf('/news/') < 0) {
        return;
    }
    
    createNodeField({
        node,
        name: `isNews`,
        value: true,
    });
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
      {
        allContentJson(
          filter: {  key: { eq: "teamMembers" }}
        ) {
          edges {
            node {
              title
              teamMembers {
                name
                photo
                specialization
                bio
              }
            }
          }
        }
      }
      `
  ).then(result => {
    result.data.allContentJson.edges[0].node.teamMembers.forEach((teamMember, index) => {
        createPage({
          path: `/tym/${index}/`,
          component: path.resolve(`./src/templates/teamMember.js`),
          context: {
            id: index,
          },
        })
        resolve()
      })
    })
  });
}
