import React from 'react';
import PropTypes from 'prop-types';

import Card from '@components/atoms/Cards/sale';

import * as S from './styled';

const Tool = ({ data, title }) => (
  <S.ContainerTool>
    <S.Title>{title}</S.Title>

    <S.Cards>
      {data.map(({ icon, description, variant, isComing }) => (
        <Card
          key={description}
          className="card_tool"
          variant={variant}
          icon={icon}
          text={description}
          isComing={isComing}
        />
      ))}
    </S.Cards>
  </S.ContainerTool>
);

Tool.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
Tool.defaultProps = {
  data: [],
  title: '',
};

export default Tool;
