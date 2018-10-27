import React from "react";

import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

import { StaticQuery, graphql } from "gatsby";

import "./Layout.scss";

export default ({ children, data }) => (
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
      allSitePage {
        edges {
          node {
            path
            jsonName
          }
        }
      }
    }
    `}
     render={data => { console.log(data); return (
    <div className="mainContainer">
        <Header title={data.configurationJson.title} navigation={data.allSitePage.edges} />
        <div className="content">
          <Sidebar data={data.configurationJson} />
          {children}
        </div>
        <Footer disclaimer={data.configurationJson.disclaimer} />
    </div>
  )}}/>
);
