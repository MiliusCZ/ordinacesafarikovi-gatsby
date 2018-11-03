import React from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const ServicesPage = ({ data }) => (
  <Layout>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html
      }}
    />
  </Layout>
);

export default ServicesPage;

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "services" } } }) {
      edges {
        node {
          frontmatter {
            title
            key
          }
          html
        }
      }
    }
  }
`;

ServicesPage.displayName = 'ServicesPage';

ServicesPage.propTypes = {
  data: PropTypes.object
};
