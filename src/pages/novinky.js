import React from "react";
import Layout from "../components/Layout";

import { graphql } from 'gatsby';


const NewsItem = ({ title, body}) => (
    <>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
);

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
    allMarkdownRemark(filter: {fields: {isNews: {eq: true}}}) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
  }
`;