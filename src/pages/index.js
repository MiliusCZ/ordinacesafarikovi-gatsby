import React from 'react';
import Layout from '../components/Layout';
import { NewsItem } from '../components/NewsItem';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const NewsPage = ({ data }) => {
  const news = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Novinky</h1>
      {news.map(newsEntry => (
        <NewsItem
          key={newsEntry.node.id}
          title={newsEntry.node.frontmatter.title}
          body={newsEntry.node.html}
        />
      ))}
    </Layout>
  );
};

export default NewsPage;

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: {fields: {isNews: {eq: true}}, frontmatter: {show: {eq: true}}}, 
      sort: {fields: [frontmatter___date], order: DESC}
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

NewsPage.displayName = 'NewsPage';

NewsPage.propTypes = {
  data: PropTypes.object
};
