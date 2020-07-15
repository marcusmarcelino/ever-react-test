import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const SampleFilterComponent = ({ filterText, onFilter }) => (
  <S.ContentInput>
    <S.FilterInput name="search" type="text" placeholder="Pesquisar" value={filterText} onChange={onFilter} />
  </S.ContentInput>
);

SampleFilterComponent.propTypes = {
  filterText: PropTypes.string,
  onFilter: PropTypes.string,
};

SampleFilterComponent.defaultProps = {
  filterText: '',
  onFilter: '',
};

export default SampleFilterComponent;
