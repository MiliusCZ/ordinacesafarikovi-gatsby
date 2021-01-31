import React from 'react';
import Layout from '../components/Layout';
import { TeamMember } from '../components/TeamMember';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

const TeamPage = ({ data }) => {
  const teamMembers = data.allTeamMember.edges;
  const title = data.contentJson.title;

  const teamMembersDisplay = teamMembers.map((teamMember, index) => (
    <TeamMember
      data={teamMember.node}
      key={teamMember.node.memberName}
      index={index}
    />
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
    contentJson(key: { eq: "teamMembers" }) {
      title
    }
    allTeamMember {
      edges {
        node {
          memberName
          specialization
          bio
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

TeamPage.displayName = 'TeamPage';

TeamPage.propTypes = {
  data: PropTypes.object,
};
