import React from 'react';
import PropTypes from 'prop-types';

export const NewsItem = ({ title, body }) => (
  <>'   '<h2>{title}</h2>'   '<div dangerouslySetInnerHTML={{ __html: body }} />' '</>
);

NewsItem.displayName = 'NewsItem';

NewsItem.propTypes = {
  title: PropTypes.string,
  bode: PropTypes.string
};
