import React from 'react';
import Layout from '../components/Layout';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import './teamMember.scss';

const TeamMemberTemplate = ({ data, pageContext }) => {
  const teamMember = data.allTeamMember.edges[pageContext.id].node;
  return (
    <Layout>
      <h1>{teamMember.memberName}</h1>
      <div className="specialization">{teamMember.specialization}</div>
      <div className="bio">
        <div className="imgContainer">
          <Img
            fixed={teamMember.childImageSharp.fixed}
            alt={teamMember.memberName}
          />
        </div>
        <p>{teamMember.bio}</p>
      </div>
      <Link to="/tym/">zpět na přehled týmu</Link>
    </Layout>
  );
};

export default TeamMemberTemplate;

export const query = graphql`
  {
    allTeamMember {
      edges {
        node {
          memberName
          specialization
          bio
          childImageSharp {
            fixed(width: 180, height: 180) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

TeamMemberTemplate.displayName = 'TeamMemberTemplate';

TeamMemberTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
