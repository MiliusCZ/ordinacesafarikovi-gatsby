import React from "react";

import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { StaticQuery, graphql } from "gatsby";

import "./Layout.scss";

const LayoutComponent = ({ data, children, fullSideBar, noSideBar }) => (
  <div className="mainContainer">
    <Header title={data.configurationJson.title} navigation={getNavigationData(data.allMarkdownRemark.edges, data.allContentJson.edges)} />
    <div className="content">
      <Sidebar data={data.configurationJson} fullSideBar={fullSideBar} noSideBar={noSideBar} />
      {children}
    </div>
    <Footer disclaimer={data.configurationJson.disclaimer} />
  </div>
)

const getNavigationData = (contentPages, dataPages) => {
  const dataNavigation = dataPages.map((item) => {
    return {
      title: item.node.title, key: item.node.key, path: item.node.path, priority: item.node.priority
    }
  });

  const contentNavigation = contentPages.map((item) => {
    return {
      title: item.node.frontmatter.title, key: item.node.frontmatter.key, path: item.node.frontmatter.path, priority: item.node.frontmatter.priority
    }
  });

  return contentNavigation.concat(dataNavigation).sort((a, b) => a.priority > b.priority);
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
        web
        facebook
        title
        disclaimer
        phone
        email
        openingHours
      }
      allContentJson(
        filter: { showInMenu: { eq: true }}
      ) {
          edges {      
            node {
              title
              key
              path
              priority
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
                priority
              }
            }
          }
        }
      }
    `}
    render={data => <LayoutComponent data={data} {...props} />}
  />
);
