import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12.345" height="6.74" viewBox="0 0 12.345 6.74">
    <path
      id="Caminho_33"
      data-name="Caminho 33"
      d="M0,5,5.5,0,11,5"
      transform="translate(11.673 5.74) rotate(180)"
      fill="none"
      stroke={color}
    />
  </svg>
);

Dropdown.propTypes = {
  color: PropTypes.string,
};
Dropdown.defaultProps = {
  color: '#aaa7a7',
};

export default Dropdown;
