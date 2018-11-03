import React from 'react';
import PropTypes from 'prop-types';

export const NewsItem = ({ title, body }) => (
  <React.Fragment>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </React.Fragment>
);

NewsItem.displayName = 'NewsItem';

NewsItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
