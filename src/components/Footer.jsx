import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export const Footer = ({ disclaimer }) => <footer className="siteFooter">{disclaimer}</footer>;

Footer.displayName = 'Footer';

Footer.propTypes = {
  disclaimer: PropTypes.string
};
