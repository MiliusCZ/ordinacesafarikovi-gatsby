import React from "react";

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import "./index.scss";

export default ({ children, data }) => (
    <div className="mainContainer">
        <Header title={data.configurationJson.title} navigation={data.allSitePage.edges} />
        <div className="content">
          <Sidebar data={data.configurationJson} />
          {children()}
        </div>
        <Footer disclaimer={data.configurationJson.disclaimer} />
    </div>
);

export const query = graphql`
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
`;





