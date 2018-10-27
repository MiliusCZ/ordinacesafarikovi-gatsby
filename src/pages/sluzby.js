import React from "react";
import Layout from "../components/Layout";

import { graphql } from 'gatsby';

export default ({ data }) => (
    <Layout>
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </Layout>
);

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark (
      filter: { frontmatter: { key: { eq: "services" }}}
    ){
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