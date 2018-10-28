import React from "react";
import Layout from "../components/Layout";
import { TeamMember } from "../components/TeamMember";

import { graphql } from 'gatsby';

export default ({ data }) => {
    const teamMembers = data.allContentJson.edges[0].node.teamMembers;
    const title = data.allContentJson.edges[0].node.title;

    const teamMembersDisplay = teamMembers.map((teamMember) => <TeamMember data={teamMember} key={teamMember.name} />);

    return (
        <Layout>
          <h1>{title}</h1>
          {teamMembersDisplay}
        </Layout>
    )
}

export const query = graphql`
  query TeamQuery {
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
  }
`;