import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Success = ({ className }) => (
  <S.ContainerIcon className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <g transform="translate(-860 -358)">
        <circle className="a" cx="100" cy="100" r="100" transform="translate(860 358)" fill="#2fdf46" opacity="0.15" />
        <circle
          className="b"
          cx="81.5"
          cy="81.5"
          r="81.5"
          transform="translate(879 377)"
          fill="#2fdf46"
          opacity="0.4"
        />
        <path
          className="c"
          d="M60.436,0A60.436,60.436,0,1,1,0,60.436,60.436,60.436,0,0,1,60.436,0Z"
          transform="translate(899.598 397.598)"
          fill="#2fdf46"
        />
        <path
          className="d"
          d="M8117.91,17652.947l-.053.053-5.95-5.945.055-.057L8099,17634.037l5.945-5.949,12.962,12.965,32.055-32.055,5.946,5.945L8123.855,17647l.053.055-5.945,5.945Z"
          transform="translate(-7167.909 -17172)"
          fill="#fff"
        />
      </g>
    </svg>
  </S.ContainerIcon>
);

Success.propTypes = {
  className: PropTypes.string,
};
Success.defaultProps = {
  className: '',
};

export default Success;
