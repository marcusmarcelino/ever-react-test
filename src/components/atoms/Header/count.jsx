import React from 'react';
import PropTypes from 'prop-types';

const NotificationCount = ({ number }) => <div>{number}</div>;

NotificationCount.propTypes = {
  number: PropTypes.number,
};
NotificationCount.defaultProps = {
  number: 0,
};

export default NotificationCount;
