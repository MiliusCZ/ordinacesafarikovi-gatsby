import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';

import './Header.scss';

export const Header = ({ image, title, navigation }) => (
  <React.Fragment>
    <header className="siteHeader">
      <div className="siteHeaderImage">
        <Link to="/">
          <img src="/img/logo_black.png" alt="Logo" />
        </Link>
        <div className="siteTitle">
          <Link to="/">{title}</Link>
        </div>
      </div>
      <nav>
        {navigation.map(item => (
          <Link key={item.key} activeClassName="active" to={item.path}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
    <div className="topImage">
      <Img fluid={image} />
    </div>
  </React.Fragment>
);

Header.displayName = 'Header';

Header.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  navigation: PropTypes.array
};
