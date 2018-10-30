import React from "react";
import Layout from "../components/Layout";
import Link from "gatsby-link";

import { graphql } from "gatsby";

import "./teamMember.scss";

export default ({ data, pageContext}) => {
  const teamMember = data.allContentJson.edges[0].node.teamMembers[pageContext.id];
  return (
    <Layout>
      <h1>{teamMember.name}</h1>
      <div className="specialization">
        {teamMember.specialization}
      </div>
      <div className="bio">
        <img src={teamMember.photo} alt={teamMember.name} />
        <p>{teamMember.bio}</p>
      </div>
      <Link to="/tym/">zpět na přehled týmu</Link>
    </Layout>
  )
}

export const query = graphql`
{
  allContentJson(
    filter: {  key: { eq: "teamMembers" }}
  ) {
    edges {
      node {
        title
        
        teamMembers {
          name
          photo
          specialization
          bio
        }
      }
    }
  }
}`;
