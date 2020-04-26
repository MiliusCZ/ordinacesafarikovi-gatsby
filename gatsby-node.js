const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const teamData = require('./src/content/team.json');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const path = createFilePath({ node, getNode, basePath: 'pages' });
  if (path.indexOf('/news/') < 0) {
    return;
  }

  createNodeField({
    node,
    name: 'isNews',
    value: true,
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  teamData.teamMembers.forEach((teamMember) => {
    const { name, photo, specialization, bio } = teamMember;

    const photoParsed = path.parse(photo);

    const absolutePath = path.resolve(
      __dirname,
      './static/img',
      photoParsed.base
    );

    const imageData = {
      name: photoParsed.name,
      ext: photoParsed.ext,
      absolutePath,
      extension: photoParsed.ext.substring(1),
    };

    const node = {
      memberName: name,
      ...imageData,
      specialization,
      bio,
      id: createNodeId(`teamMember-${name}`),
      internal: {
        type: 'TeamMember',
        contentDigest: createContentDigest(teamMember),
      },
    };

    actions.createNode(node);
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        contentJson(key: { eq: "teamMembers" }) {
          teamMembers {
            name
          }
        }
      }
    `).then((result) => {
      result.data.contentJson.teamMembers.forEach((teamMember, index) => {
        createPage({
          path: `/tym/${index}/`,
          component: path.resolve('./src/templates/teamMember.js'),
          context: {
            id: index,
          },
        });
        resolve();
      });
    });
  });
};
