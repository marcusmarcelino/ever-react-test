import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const SpaceShip = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <g id="space-ship" transform="translate(0 0)">
        <path
          id="Path_25"
          data-name="Path 25"
          d="M305.815,96.971a2.8,2.8,0,1,0,0,3.965A2.807,2.807,0,0,0,305.815,96.971Zm-1.036,2.93a1.338,1.338,0,1,1,0-1.894A1.34,1.34,0,0,1,304.779,99.9Z"
          transform="translate(-286.331 -91.456)"
          fill={color}
        />
        <path
          id="Path_26"
          data-name="Path 26"
          d="M24.855.766a.732.732,0,0,0-.622-.622A14.542,14.542,0,0,0,11.894,4.258L10.211,5.942A10.049,10.049,0,0,0,1.526,8.768L.214,10.079A.732.732,0,0,0,.4,11.248l3.766,1.939,1.682,1.682A6.122,6.122,0,0,0,4.461,15.9c-2.234,2.234-2.1,5.878-2.088,6.032a.732.732,0,0,0,.7.7c.02,0,.1,0,.218,0A8.648,8.648,0,0,0,9.1,20.539a6.123,6.123,0,0,0,1.029-1.385l1.682,1.682L13.752,24.6a.732.732,0,0,0,1.169.183l1.311-1.311a10.05,10.05,0,0,0,2.826-8.685l1.684-1.684a14.616,14.616,0,0,0,3.513-5.684,14.615,14.615,0,0,0,.6-6.655Zm-1.383.762a12.984,12.984,0,0,1,.018,2.331L21.14,1.51a12.993,12.993,0,0,1,2.331.018ZM2.561,9.8a8.587,8.587,0,0,1,6.3-2.517l-2.83,2.83L4.46,11.692,1.96,10.4Zm3.075,2.784.917-.917,6.776,6.776-.917.917ZM8.067,19.5a6.817,6.817,0,0,1-4.21,1.639A6.817,6.817,0,0,1,5.5,16.933a4.886,4.886,0,0,1,1.44-.974l2.1,2.1a4.887,4.887,0,0,1-.974,1.44Zm7.13,2.935-.6.6-1.287-2.5,1.575-1.575,2.83-2.83A8.586,8.586,0,0,1,15.2,22.438Zm4.51-10.369-5.341,5.341-3.388-3.388L7.589,10.635,12.93,5.294a13.117,13.117,0,0,1,6.412-3.511l3.875,3.875a13.118,13.118,0,0,1-3.511,6.412Z"
          transform="translate(0 0)"
          fill={color}
        />
      </g>
    </svg>
  </S.ContainerIcon>
);

SpaceShip.propTypes = {
  color: PropTypes.string,
};
SpaceShip.defaultProps = {
  color: '#5e5e5e',
};

export default SpaceShip;
