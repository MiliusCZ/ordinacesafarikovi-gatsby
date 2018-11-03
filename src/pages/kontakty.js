import React from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const ContactsPage = ({ data }) => (
  <Layout fullSideBar={true}>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: data.allMarkdownRemark.edges[0].node.html
      }}
    />
  </Layout>
);

export default ContactsPage;

export const query = graphql`
  query ContactsQuery {
    allMarkdownRemark(filter: { frontmatter: { key: { eq: "contacts" } } }) {
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

ContactsPage.displayName = 'ContactsPage';

ContactsPage.propTypes = {
  data: PropTypes.object
};
