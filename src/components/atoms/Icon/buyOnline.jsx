import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const BuyOnline = ({ color }) => (
  <S.ContainerIcon>
    <svg id="buy-online" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <path
        id="Path_10"
        data-name="Path 10"
        d="M125.029,71.086h-8.838v-.732a.732.732,0,0,0-.732-.732h-1.464a.732.732,0,0,0,0,1.465h.732v4.759a2.557,2.557,0,0,0,.83,1.887,2.3,2.3,0,1,0,3.876.676h1.989a2.3,2.3,0,1,0,3.932-.61,3.106,3.106,0,0,0,1.2-1.721l.576-2.306a2.094,2.094,0,0,0-2.1-2.686Zm-6.9,8.159a.837.837,0,1,1-.837-.837A.838.838,0,0,1,118.126,79.245Zm6.276,0a.837.837,0,1,1-.837-.837A.838.838,0,0,1,124.4,79.245Zm1.3-5.828-.576,2.306a1.745,1.745,0,0,1-1.564,1.221h-6.276a1.1,1.1,0,0,1-1.1-1.1V72.55h8.838a.638.638,0,0,1,.676.866Zm0,0"
        transform="translate(-107.731 -66.222)"
        fill={color}
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M125.029,71.086h-8.838v-.732a.732.732,0,0,0-.732-.732h-1.464a.732.732,0,0,0,0,1.465h.732v4.759a2.557,2.557,0,0,0,.83,1.887,2.3,2.3,0,1,0,3.876.676h1.989a2.3,2.3,0,1,0,3.932-.61,3.106,3.106,0,0,0,1.2-1.721l.576-2.306a2.094,2.094,0,0,0-2.1-2.686Zm-6.9,8.159a.837.837,0,1,1-.837-.837A.838.838,0,0,1,118.126,79.245Zm6.276,0a.837.837,0,1,1-.837-.837A.838.838,0,0,1,124.4,79.245Zm1.3-5.828-.576,2.306a1.745,1.745,0,0,1-1.564,1.221h-6.276a1.1,1.1,0,0,1-1.1-1.1V72.55h8.838a.638.638,0,0,1,.676.866Zm0,0"
        transform="translate(-107.731 -66.222)"
        fill={color}
      />
    </svg>
  </S.ContainerIcon>
);

BuyOnline.propTypes = {
  color: PropTypes.string,
};
BuyOnline.defaultProps = {
  color: '#5e5e5e',
};

export default BuyOnline;
