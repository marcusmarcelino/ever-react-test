import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11.828" height="11.829" viewBox="0 0 11.828 11.829">
    <g id="close" transform="translate(-310.909 -164.807)" opacity="0.6">
      <path
        id="Path_4949"
        data-name="Path 4949"
        d="M632.324,1329.221l9,9"
        transform="translate(-320 -1163)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        id="Path_4950"
        data-name="Path 4950"
        d="M641.323,1329.221l-9,9"
        transform="translate(-320 -1163)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

Close.propTypes = {
  color: PropTypes.string,
};
Close.defaultProps = {
  color: '#aaa7a7',
};

export default Close;
