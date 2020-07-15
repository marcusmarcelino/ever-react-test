import React from 'react';
import PropTypes from 'prop-types';

const Dropup = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12.345" height="6.74" viewBox="0 0 12.345 6.74">
    <path
      id="Caminho_32"
      data-name="Caminho 32"
      d="M0,0,5.5,5,11,0"
      transform="translate(11.673 6) rotate(180)"
      fill="none"
      stroke={color}
    />
  </svg>
);

Dropup.propTypes = {
  color: PropTypes.string,
};
Dropup.defaultProps = {
  color: '#5e5e5e',
};

export default Dropup;
