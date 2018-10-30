import React from "react";
import Layout from "../components/Layout";
import Gallery from 'react-photo-gallery';

import { graphql } from 'gatsby';

export default ({ data }) => {
    const title = data.allContentJson.edges[0].node.title;
    const images = data.allContentJson.edges[0].node.galleryImages;

    return (
        <Layout>
            <h1>{title}</h1>
            {images && <Gallery photos={images.map((image) => {
                return {
                    key: image,
                    src: image,
                    alt: image,
                    width: 3,
                    height: 2
                }
            })} />
            }
        </Layout>
    )
}

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
    }
`;