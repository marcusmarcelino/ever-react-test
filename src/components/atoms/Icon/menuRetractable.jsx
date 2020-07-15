import React from 'react';
import PropTypes from 'prop-types';

const MenuRetractable = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
    <defs>
      <filter id="Elipse_74" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse">
        <feOffset dy="2" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Menu_recolher" data-name="Menu recolher" transform="translate(-349 -27)">
      <g transform="matrix(1, 0, 0, 1, 349, 27)" filter="url(#Elipse_74)">
        <circle id="Elipse_74-2" data-name="Elipse 74" cx="13" cy="13" r="13" transform="translate(6 4)" fill="#fff" />
      </g>
      <rect
        id="Retângulo_1972"
        data-name="Retângulo 1972"
        width="2"
        height="2"
        rx="1"
        transform="translate(367 39)"
        fill={color}
      />
      <rect
        id="Retângulo_1973"
        data-name="Retângulo 1973"
        width="2"
        height="2"
        rx="1"
        transform="translate(367 43)"
        fill={color}
      />
      <rect
        id="Retângulo_1974"
        data-name="Retângulo 1974"
        width="2"
        height="2"
        rx="1"
        transform="translate(367 47)"
        fill={color}
      />
    </g>
  </svg>
);

MenuRetractable.propTypes = {
  color: PropTypes.string,
};
MenuRetractable.defaultProps = {
  color: '#5e5e5e',
};

export default MenuRetractable;
