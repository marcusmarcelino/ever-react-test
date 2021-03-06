import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const MonitorPurchases = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <path
        id="Caminho_5258"
        data-name="Caminho 5258"
        d="M22.306,0H2.694A2.7,2.7,0,0,0,0,2.694V16.03a2.7,2.7,0,0,0,2.694,2.694h6.72V20.4H7.793a2.3,2.3,0,1,0,0,4.6h9.414a2.3,2.3,0,0,0,0-4.6H15.586V18.724h6.721A2.7,2.7,0,0,0,25,16.03V2.694A2.7,2.7,0,0,0,22.306,0ZM18.044,22.7a.838.838,0,0,1-.837.837H7.793a.837.837,0,0,1,0-1.673h9.414a.838.838,0,0,1,.837.836Zm-3.923-2.3H10.879V18.724h3.242Zm9.414-4.367a1.23,1.23,0,0,1-1.229,1.229H2.694A1.23,1.23,0,0,1,1.465,16.03V2.694A1.23,1.23,0,0,1,2.694,1.465H22.306a1.23,1.23,0,0,1,1.229,1.229Zm0,0"
        fill={color}
      />
      <path
        id="Caminho_5259"
        data-name="Caminho 5259"
        d="M125.029,71.086h-8.838v-.732a.732.732,0,0,0-.732-.732H114a.732.732,0,0,0,0,1.465h.732v4.759a2.557,2.557,0,0,0,.83,1.887,2.3,2.3,0,1,0,3.876.676h1.989a2.3,2.3,0,1,0,3.932-.61,3.106,3.106,0,0,0,1.2-1.721l.576-2.306a2.094,2.094,0,0,0-2.1-2.686Zm-6.9,8.159a.837.837,0,1,1-.837-.837.837.837,0,0,1,.837.837Zm6.276,0a.837.837,0,1,1-.837-.837.837.837,0,0,1,.837.837Zm1.3-5.828-.576,2.306a1.745,1.745,0,0,1-1.564,1.221h-6.276a1.1,1.1,0,0,1-1.1-1.1V72.55h8.838a.638.638,0,0,1,.676.866Zm0,0"
        transform="translate(-107.731 -66.222)"
        fill={color}
      />
    </svg>
  </S.ContainerIcon>
);

MonitorPurchases.propTypes = {
  color: PropTypes.string,
};
MonitorPurchases.defaultProps = {
  color: '#5e5e5e',
};

export default MonitorPurchases;
