import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Select = ({ className, options, onChange, defaultValue }) => (
  <S.ContainerSelect className={className}>
    <S.Select onChange={onChange}>
      <S.Option hidden>{defaultValue}</S.Option>
      {options.map(({ label, value }) => (
        <S.Option value={value} key={label}>
          {label}
        </S.Option>
      ))}
    </S.Select>
  </S.ContainerSelect>
);

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};
Select.defaultProps = {
  className: '',
  defaultValue: 'Selecione uma opção',
  onChange: () => false,
  options: [],
};

export default Select;
