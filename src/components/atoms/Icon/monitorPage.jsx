import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const MonitorPage = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <path
        id="Caminho_5251"
        data-name="Caminho 5251"
        d="M22.849,3.781H21.388V1.721A1.723,1.723,0,0,0,19.667,0H5.333A1.723,1.723,0,0,0,3.612,1.721v2.06H2.151A2.153,2.153,0,0,0,0,5.932v13.03a2.153,2.153,0,0,0,2.151,2.151H9.919l-.913,2.422H8.048a.732.732,0,0,0,0,1.465h8.9a.732.732,0,0,0,0-1.465h-.958l-.913-2.422h7.768A2.153,2.153,0,0,0,25,18.962V5.932a2.153,2.153,0,0,0-2.151-2.151Zm0,1.465a.687.687,0,0,1,.686.686V15.3H21.388V5.246ZM5.077,4.025H19.923V15.3H5.077Zm14.846-2.3v.84H8.359v-1.1H19.667A.256.256,0,0,1,19.923,1.721ZM5.333,1.465H6.894v1.1H5.077v-.84a.256.256,0,0,1,.256-.256ZM2.151,5.246H3.612V15.3H1.465V5.932a.687.687,0,0,1,.686-.686ZM14.428,23.535H10.572l.913-2.422h2.03Zm8.421-3.887H2.151a.687.687,0,0,1-.686-.686V16.768h22.07v2.194A.687.687,0,0,1,22.849,19.648Z"
        fill={color}
      />
      <path
        id="Caminho_5252"
        data-name="Caminho 5252"
        d="M13.125,17.435H11.875a.732.732,0,0,0,0,1.465h1.249a.732.732,0,0,0,0-1.465Z"
        fill={color}
      />
      <path
        id="Caminho_5253"
        data-name="Caminho 5253"
        d="M6.763,8.908h5.269a.732.732,0,0,0,.732-.732V5.734A.732.732,0,0,0,12.032,5H6.763a.732.732,0,0,0-.732.732V8.176A.732.732,0,0,0,6.763,8.908ZM7.5,6.467h3.8v.977H7.5Z"
        fill={color}
      />
      <path
        id="Caminho_5254"
        data-name="Caminho 5254"
        d="M14.482,6.467h3.729a.732.732,0,1,0,0-1.465H14.482a.732.732,0,0,0,0,1.465Z"
        fill={color}
      />
      <path
        id="Caminho_5255"
        data-name="Caminho 5255"
        d="M14.482,8.908h3.729a.732.732,0,1,0,0-1.465H14.482a.732.732,0,0,0,0,1.465Z"
        fill={color}
      />
      <path
        id="Caminho_5256"
        data-name="Caminho 5256"
        d="M6.763,11.349H18.211a.732.732,0,1,0,0-1.465H6.763a.732.732,0,1,0,0,1.465Z"
        fill={color}
      />
      <path
        id="Caminho_5257"
        data-name="Caminho 5257"
        d="M18.224,12.326H6.776a.732.732,0,0,0,0,1.465H18.224a.732.732,0,0,0,0-1.465Z"
        fill={color}
      />
    </svg>
  </S.ContainerIcon>
);

MonitorPage.propTypes = {
  color: PropTypes.string,
};
MonitorPage.defaultProps = {
  color: '#5e5e5e',
};

export default MonitorPage;
