import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../atoms/Cards/space';

import * as S from './styled';

const Space = ({ data, title }) => (
  <S.ContainerSpace>
    <S.Title>{title}</S.Title>

    <S.Cards>
      {data.map(({ icon, description, variant, isComing }) => (
        <Card
          key={description}
          className="card_space"
          variant={variant}
          icon={icon}
          title={description}
          isComing={isComing}
        />
      ))}
    </S.Cards>
  </S.ContainerSpace>
);

Space.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
Space.defaultProps = {
  data: [],
  title: '',
};

export default Space;
