import React from "react";
import Layout from "../components/Layout";
import { NewsItem } from "../components/NewsItem";

import { graphql } from 'gatsby';

export default ({ data }) => {
    const news = data.allMarkdownRemark.edges;
    return (
        <Layout>
          <h1>Novinky</h1>
          {news.map(newsEntry => <NewsItem key={newsEntry.node.id} title={newsEntry.node.frontmatter.title} body={newsEntry.node.html} />)}
        </Layout>
    )
}

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: {fields: {isNews: {eq: true}}},
      sort: {fields: [frontmatter___date], order: DESC},
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          html
        }
      }
    }
  }  
`;