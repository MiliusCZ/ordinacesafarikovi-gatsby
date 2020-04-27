const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const teamData = require('./src/content/team.json');
const galleryData = require('./src/content/gallery.json');

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

    const imageData = createImageData(photoParsed);

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

  galleryData.galleryImages.forEach((galleryImage) => {
    const galleryImageParsed = path.parse(galleryImage);

    const imageData = createImageData(galleryImageParsed);

    const node = {
      ...imageData,
      id: createNodeId(`galleryImage-${galleryImageParsed.name}`),
      internal: {
        type: 'GalleryImage',
        contentDigest: createContentDigest(galleryImage),
      },
    };

    actions.createNode(node);
  });
};

const createImageData = (parsedImage) => {
  const absolutePath = path.resolve(
    __dirname,
    './static/img',
    parsedImage.base
  );

  return {
    name: parsedImage.name,
    ext: parsedImage.ext,
    absolutePath,
    extension: parsedImage.ext.substring(1),
  };
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
