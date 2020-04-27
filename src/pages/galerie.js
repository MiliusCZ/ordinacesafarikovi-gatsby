import React from 'react';
import Layout from '../components/Layout';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const GalleryPage = ({ data }) => {
  const title = data.contentJson.title;
  const images = data.allGalleryImage;

  return (
    <Layout noSideBar={true}>
      <h1>{title}</h1>
      {images && (
        <Gallery
          photos={images.edges.map(({ node }) => {
            return {
              srcSet: node.childImageSharp.fluid.srcSet,
              width: node.childImageSharp.original.width,
              height: node.childImageSharp.original.height,
              key: node.childImageSharp.original.src,
              src: node.childImageSharp.original.src,
              alt: node.childImageSharp.fluid.originalName,
            };
          })}
        />
      )}
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    contentJson(key: { eq: "teamMembers" }) {
      title
    }
    allGalleryImage {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(maxWidth: 700, quality: 85) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`;

GalleryPage.displayName = 'GalleryPage';

GalleryPage.propTypes = {
  data: PropTypes.object,
};
