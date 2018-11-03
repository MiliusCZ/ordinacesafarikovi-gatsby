import React from 'react';
import Layout from '../components/Layout';
import Gallery from 'react-photo-gallery';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const GalleryPage = ({ data }) => {
  const title = data.allContentJson.edges[0].node.title;
  const images = data.allImageSharp;

  return (
    <Layout noSideBar={true}>
      <h1>{title}</h1>
      {images && <Gallery photos={images.edges.map(({ node }) => {
        return {
          srcSet: node.fluid.srcSet,
          width: node.original.width,
          height: node.original.height,
          key: node.original.src,
          src: node.original.src,
          alt: node.fluid.originalName
        };
      })} />
      }
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
	  allContentJson(
      filter: { key: { eq: "gallery" }}
    ) {
        edges {
          node {
            title
            galleryImages
          }
        }
      }
      allImageSharp(
          filter: {fluid:{originalName: {regex: "/gallery/"}}}
        ) {
          edges {
            node {
              original {
                src
                width
                height
              }
              fluid(maxWidth: 700, quality: 85) {
                srcSet
                originalName
                src
              }
            }
          }
        }
    }
`;

GalleryPage.displayName = 'GalleryPage';

GalleryPage.propTypes = {
  data: PropTypes.object
};
