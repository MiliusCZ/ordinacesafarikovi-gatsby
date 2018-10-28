import React from "react";

import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { StaticQuery, graphql } from "gatsby";

import "./Layout.scss";

const LayoutComponent = ({ data, children }) => (
  <div className="mainContainer">
    <Header title={data.configurationJson.title} navigation={getNavigationData(data.allMarkdownRemark.edges, data.allContentJson.edges)} />
    <div className="content">
      <Sidebar data={data.configurationJson} />
      {children}
    </div>
    <Footer disclaimer={data.configurationJson.disclaimer} />
  </div>
)

const getNavigationData = (contentPages, dataPages) => {
  const dataNavigation = dataPages.map((item) => {
    return {
      title: item.node.title, key: item.node.key, path: item.node.path
    }
  });

  const contentNavigation = contentPages.map((item) => {
    return {
      title: item.node.frontmatter.title, key: item.node.frontmatter.key, path: item.node.frontmatter.path
    }
  });

  return contentNavigation.concat(dataNavigation);
}

export default props => (
  <StaticQuery query={graphql`
    query ConfigQuery {
      configurationJson {
        address {
          name
          street
          city
          zip
        }
        title
        disclaimer
        phone
        email
      }
      allContentJson(
        filter: { showInMenu: { eq: true }}
      ) {
          edges {      
            node {
              title
              key
              path
            }
          }
        }
        allMarkdownRemark(
          filter: { frontmatter: {showInMenu: { eq: true }}}
        ) {
          edges {      
            node {
              frontmatter {
                title
                key
                path
              }
            }
          }
        }
      }
    `}
    render={data => <LayoutComponent data={data} {...props} />}
  />
);
