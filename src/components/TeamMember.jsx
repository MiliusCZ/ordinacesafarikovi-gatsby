import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';

import './TeamMember.scss';

export const TeamMember = ({ data, index }) => (
  <div className="teamMember">
    <div className="imgContainer">
      <Img fluid={data.childImageSharp.fluid} alt={data.memberName} />
    </div>
    <div className="description">
      <h3>
        <Link to={`/tym/${index}/`}>{data.memberName}</Link>
      </h3>
      <span>{data.specialization}</span>
    </div>
  </div>
);

TeamMember.displayName = 'TeamMember';

TeamMember.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
