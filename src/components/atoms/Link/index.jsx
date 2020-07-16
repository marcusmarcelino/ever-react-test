import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Link = ({ className, children, href, alt, active, type, onClick }) => (
  <S.Link href={href} alt={alt} onClick={onClick} className={`${className} ${active ? 'active' : ''}`} type={type}>
    {children}
  </S.Link>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
Link.defaultProps = {
  className: '',
  children: '',
  href: '',
  alt: '',
  active: false,
  type: '',
  onClick: () => {},
};

export default Link;
