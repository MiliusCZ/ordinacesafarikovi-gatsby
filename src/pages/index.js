import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { NewsItem } from '../components/NewsItem';

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const news = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Vítejte</h1>
      <p>Vítejte na stránkách zubní ordinace Šafaříkovi. </p>
      {news.map(newsEntry => (
        <NewsItem
          key={newsEntry.node.id}
          title={newsEntry.node.frontmatter.title}
          body={newsEntry.node.html}
        />
      ))}
      <Link to="/novinky">zobrazit všechny aktuality</Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query TopNewsQuery {
    allMarkdownRemark(
      filter: { fields: { isNews: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
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

IndexPage.displayName = 'IndexPage';

IndexPage.propTypes = {
  data: PropTypes.object
};
