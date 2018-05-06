import React from "react"

export default ({ data }) => (
    <React.Fragment>
        <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </React.Fragment>
);

export const query = graphql`
  query AboutUsQuery {
    allMarkdownRemark (
      filter: { frontmatter: { key: { eq: "about-us" }}}
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