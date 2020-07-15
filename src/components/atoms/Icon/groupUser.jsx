import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const GroupUser = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <g id="Grupo_de_máscara_10" data-name="Grupo de máscara 10" transform="translate(-22 -539)">
        <g id="Empreendedores" transform="translate(22 497.27)">
          <g id="Grupo_396" data-name="Grupo 396" transform="translate(0 53.079)">
            <g id="Grupo_395" data-name="Grupo 395">
              <path
                id="Caminho_5245"
                data-name="Caminho 5245"
                d="M21.338,231.559H18.891a3.653,3.653,0,0,0-.962.129,3.665,3.665,0,0,0-3.265-2.008H10.337a3.665,3.665,0,0,0-3.265,2.008,3.653,3.653,0,0,0-.962-.129H3.662A3.666,3.666,0,0,0,0,235.221v3.912a2.2,2.2,0,0,0,2.2,2.2H22.8a2.2,2.2,0,0,0,2.2-2.2v-3.912A3.666,3.666,0,0,0,21.338,231.559ZM6.675,233.342v6.523H2.2a.733.733,0,0,1-.732-.732v-3.912a2.2,2.2,0,0,1,2.2-2.2H6.109a2.19,2.19,0,0,1,.575.077C6.679,233.18,6.675,233.261,6.675,233.342Zm10.185,6.523H8.14v-6.523a2.2,2.2,0,0,1,2.2-2.2h4.326a2.2,2.2,0,0,1,2.2,2.2Zm6.675-.732a.733.733,0,0,1-.732.732H18.325v-6.523a2.166,2.166,0,0,0-.009-.242,2.192,2.192,0,0,1,.575-.077h2.447a2.2,2.2,0,0,1,2.2,2.2Z"
                transform="translate(0 -229.68)"
                fill={color}
              />
            </g>
          </g>
          <g id="Grupo_397" data-name="Grupo 397" transform="translate(1.632 47.848)">
            <path
              id="Caminho_5246"
              data-name="Caminho 5246"
              d="M36.668,126.5a3.254,3.254,0,1,0,3.254,3.254A3.254,3.254,0,0,0,36.668,126.5Zm0,5.044a1.789,1.789,0,1,1,1.789-1.789,1.789,1.789,0,0,1-1.789,1.789Z"
              transform="translate(-33.414 -126.504)"
              fill={color}
            />
          </g>
          <g id="Grupo_399" data-name="Grupo 399" transform="translate(8.152 43.729)">
            <g id="Grupo_398" data-name="Grupo 398">
              <path
                id="Caminho_5247"
                data-name="Caminho 5247"
                d="M171.31,43.729a4.348,4.348,0,1,0,4.348,4.348,4.348,4.348,0,0,0-4.348-4.348Zm0,7.23a2.883,2.883,0,1,1,2.883-2.883,2.883,2.883,0,0,1-2.883,2.883Z"
                transform="translate(-166.962 -43.729)"
                fill={color}
              />
            </g>
          </g>
          <g id="Grupo_400" data-name="Grupo 400" transform="translate(16.86 47.848)">
            <path
              id="Caminho_5248"
              data-name="Caminho 5248"
              d="M348.548,126.5a3.254,3.254,0,1,0,3.254,3.254A3.254,3.254,0,0,0,348.548,126.5Zm0,5.044a1.789,1.789,0,1,1,1.789-1.789,1.789,1.789,0,0,1-1.789,1.789Z"
              transform="translate(-345.294 -126.504)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  </S.ContainerIcon>
);

GroupUser.propTypes = {
  color: PropTypes.string,
};
GroupUser.defaultProps = {
  color: '#5e5e5e',
};

export default GroupUser;
