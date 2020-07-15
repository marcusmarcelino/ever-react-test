import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Collapse = ({ children, title, titlePosition }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);

  return (
    <S.Container>
      <S.ContainerTitle className={active ? 'active' : 'default'} active={active}>
        <S.Title position={titlePosition}>{title}</S.Title>
        <S.Close onClick={handleToggle} active={active} />
      </S.ContainerTitle>

      <S.ContainerContent active={active}>{children}</S.ContainerContent>
    </S.Container>
  );
};

Collapse.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  titlePosition: PropTypes.string,
};
Collapse.defaultProps = {
  children: '',
  title: 'Title',
  titlePosition: 'center',
};

export default Collapse;
