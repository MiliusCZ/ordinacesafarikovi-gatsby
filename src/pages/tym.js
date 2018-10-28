import React from "react";
import Layout from "../components/Layout";

import { graphql } from 'gatsby';

export default ({ data }) => {
    const teamMembers = data.allContentJson.edges[0].node.teamMembers;

    const teamMembersDisplay = teamMembers.map((teamMember) => <TeamMebmer data={teamMember} key={teamMember.name} />);

    return (
        <Layout>{teamMembersDisplay}</Layout>
    )
}

const TeamMebmer = ({ data }) => (
    <>
        <h2>{data.name}</h2>
        <span>{data.specialization}</span>
        <img src={data.photo} alt={data.name} />
        <p dangerouslySetInnerHTML={{ __html: data.bio }} />
    </>
);

export const query = graphql`
  query TeamQuery {
    allContentJson {
      edges {
        node {
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