import React from "react";

export default ({ children, data }) => (
    <React.Fragment>
        <header>{data.configurationJson.title}</header>
        {children()}
        <footer>{data.configurationJson.disclaimer}</footer>
    </React.Fragment>
);

export const query = graphql`
  query ConfigQuery {
    configurationJson {
      title
      disclaimer
    }
  }
`;
