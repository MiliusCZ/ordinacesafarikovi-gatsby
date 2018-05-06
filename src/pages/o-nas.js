import React from "react"

export default ({ data }) => (
    <React.Fragment>
        <h1>{data.allContentJson.edges[0].node.title}</h1>
        <div>{data.allContentJson.edges[0].node.content}</div>
    </React.Fragment>
);

export const query = graphql`
  query AboutUsQuery {
	  allContentJson (    
      filter: {
        key: {eq: "about-us"}
      }
    ) {
  	edges {
    	node {
        key
	      title
        content
  	    }
  	  }
    }
  }
`;