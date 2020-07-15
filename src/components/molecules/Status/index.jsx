import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/Cards';

import * as S from './styled';

const Status = ({ data }) => (
  <S.ContainerStatus>
    <S.Cards>
      {data.map(({ icon, title, description }) => (
        <Card key={title} icon={icon} title={title} description={description} className="card_status" />
      ))}
    </S.Cards>
  </S.ContainerStatus>
);

Status.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
Status.defaultProps = {
  data: [],
};

export default Status;
