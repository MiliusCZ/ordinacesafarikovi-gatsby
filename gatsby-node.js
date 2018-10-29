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
