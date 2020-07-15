import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Growth = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.95" viewBox="0 0 24 27.95">
      <g id="growth" transform="translate(0 0)">
        <path
          id="Path_19"
          data-name="Path 19"
          d="M5.565,337.465H.819a.819.819,0,0,0-.819.819v7.89a.819.819,0,0,0,.819.819H5.565a.819.819,0,0,0,.819-.819v-7.89a.819.819,0,0,0-.819-.819Zm-.819,7.89H1.637V339.1H4.746v6.252Zm0,0"
          transform="translate(0 -319.042)"
          fill={color}
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M166.913,256.676h-4.747a.819.819,0,0,0-.819.819v12.3a.819.819,0,0,0,.819.819h4.747a.819.819,0,0,0,.819-.819v-12.3A.819.819,0,0,0,166.913,256.676Zm-.819,12.3h-3.109V258.314h3.109Zm0,0"
          transform="translate(-152.54 -242.664)"
          fill={color}
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M328.261,134.66h-4.746a.819.819,0,0,0-.819.819V154.44a.819.819,0,0,0,.819.819h4.746a.819.819,0,0,0,.819-.819V135.479A.819.819,0,0,0,328.261,134.66Zm-.819,18.961h-3.109V136.3h3.109Zm0,0"
          transform="translate(-305.08 -127.309)"
          fill={color}
        />
        <path
          id="Path_22"
          data-name="Path 22"
          d="M1.8,10.3a.816.816,0,0,0,.38-.094l8.552-4.5,3.4,1.765a.818.818,0,0,0,.776-.012l7.584-4.232-.292.77a.819.819,0,1,0,1.531.58l1.084-2.86a.849.849,0,0,0,.051-.354A.816.816,0,0,0,24.109.6L21.175.016a.819.819,0,0,0-.32,1.606l.846.168L14.5,5.812,11.1,4.053a.818.818,0,0,0-.758,0l-8.931,4.7A.819.819,0,0,0,1.8,10.3Zm0,0"
          transform="translate(-0.923 0)"
          fill={color}
        />
      </g>
    </svg>
  </S.ContainerIcon>
);

Growth.propTypes = {
  color: PropTypes.string,
};
Growth.defaultProps = {
  color: '#5e5e5e',
};

export default Growth;
