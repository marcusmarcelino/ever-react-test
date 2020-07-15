import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const MonitorLinks = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Retângulo_2252"
            data-name="Retângulo 2252"
            width="25"
            height="25"
            transform="translate(22 389)"
            fill={color}
            stroke="#707070"
          />
        </clipPath>
      </defs>
      <g id="Grupo_de_máscara_33" data-name="Grupo de máscara 33" transform="translate(-22 -389)">
        <g id="Links_Relacionados" data-name="Links Relacionados" transform="translate(22 389)">
          <path
            id="Caminho_6701"
            data-name="Caminho 6701"
            d="M22.135,23.958H2.865A2.867,2.867,0,0,1,0,21.094V3.906A2.867,2.867,0,0,1,2.865,1.042H22.135A2.867,2.867,0,0,1,25,3.906V21.094A2.867,2.867,0,0,1,22.135,23.958ZM2.865,2.6a1.3,1.3,0,0,0-1.3,1.3V21.094a1.3,1.3,0,0,0,1.3,1.3H22.135a1.3,1.3,0,0,0,1.3-1.3V3.906a1.3,1.3,0,0,0-1.3-1.3Z"
            fill={color}
          />
          <path
            id="Caminho_6702"
            data-name="Caminho 6702"
            d="M24.219,6.25H.781a.781.781,0,0,1,0-1.562H24.219a.781.781,0,0,1,0,1.563Z"
            fill={color}
          />
          <path
            id="Caminho_6703"
            data-name="Caminho 6703"
            d="M12.231,17.082a3.252,3.252,0,0,1-2.309-.964L6.685,12.862a3.26,3.26,0,0,1,0-4.618,3.34,3.34,0,0,1,4.606,0l.556.557a.781.781,0,1,1-1.106,1.1l-.556-.557A1.735,1.735,0,0,0,7.8,9.346a1.7,1.7,0,0,0-.007,2.413l3.239,3.259a1.687,1.687,0,0,0,2.275.115.782.782,0,1,1,.992,1.208,3.245,3.245,0,0,1-2.065.742Z"
            fill={color}
          />
          <path
            id="Caminho_6704"
            data-name="Caminho 6704"
            d="M16.008,20.833a3.214,3.214,0,0,1-2.307-.965l-.533-.535a.782.782,0,1,1,1.107-1.1l.536.539a1.721,1.721,0,0,0,2.394,0,1.7,1.7,0,0,0,0-2.41L13.971,13.1a1.691,1.691,0,0,0-1.2-.5,1.657,1.657,0,0,0-1.069.377.782.782,0,0,1-1-1.2A3.352,3.352,0,0,1,15.078,12l3.236,3.257a3.271,3.271,0,0,1-2.306,5.578Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  </S.ContainerIcon>
);

MonitorLinks.propTypes = {
  color: PropTypes.string,
};
MonitorLinks.defaultProps = {
  color: '#5e5e5e',
};

export default MonitorLinks;
