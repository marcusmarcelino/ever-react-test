import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const MainContainer = ({ children, className }) => <S.Container className={className}>{children}</S.Container>;

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};
MainContainer.defaultProps = {
  className: '',
};

export default MainContainer;
