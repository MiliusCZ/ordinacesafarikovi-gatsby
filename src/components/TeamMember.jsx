import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './TeamMember.scss';

export const TeamMember = ({ data, index }) => (
  <div className="teamMember">
    <img src={data.photo} alt={data.name} />
    <div className="description">
      <h3><Link to={`/tym/${index}/`}>{data.name}</Link></h3>
      <span>{data.specialization}</span>
    </div>
  </div>
);

TeamMember.displayName = 'TeamMember';

TeamMember.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};
