import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';

import * as S from './styled';

const Link = ({ children, href, alt, active, type, icon, iconPosition }) => (
  <S.LinkIcon href={href} alt={alt} className={active ? 'active' : null} type={type}>
    <Icon color={active ? '#fff' : '#aaa7a7'} icon={icon} position={iconPosition} />
    {children}
  </S.LinkIcon>
);

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
};
Link.defaultProps = {
  children: '',
  href: '',
  alt: '',
  active: false,
  type: 'menu',
  icon: 'home',
  iconPosition: 'left',
};

export default Link;
