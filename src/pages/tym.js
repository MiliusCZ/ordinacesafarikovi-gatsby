import React from 'react';
import Layout from '../components/Layout';
import { TeamMember } from '../components/TeamMember';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const TeamPage = ({ data }) => {
  const teamMembers = data.allContentJson.edges[0].node.teamMembers;
  const title = data.allContentJson.edges[0].node.title;

  const teamMembersDisplay = teamMembers.map((teamMember, index) => (
    <TeamMember data={teamMember} key={teamMember.name} index={index} />
  ));

  return (
    <Layout>
      <h1>{title}</h1>
      {teamMembersDisplay}
    </Layout>
  );
};

export default TeamPage;

export const query = graphql`
  query TeamQuery {
    allContentJson(filter: { key: { eq: "teamMembers" } }) {
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

TeamPage.displayName = 'TeamPage';

TeamPage.propTypes = {
  data: PropTypes.object
};
