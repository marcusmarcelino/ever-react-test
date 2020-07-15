import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@assets/images/LogoEVER.svg';
import { Link } from 'react-router-dom';
import * as S from './styled';

const ContainerForm = ({ children, className, id, title, subtitle, backTo }) => {
  return (
    <div className={className} id={id}>
      <S.ContainerHeader>
        <S.LogoStyle src={Logo} />
      </S.ContainerHeader>
      <S.ContainerBody>
        {backTo ? (
          <Link to={backTo}>
            <S.Close>fechar X</S.Close>
          </Link>
        ) : null}
        <div className="title">
          <S.ContainerTitle>{title}</S.ContainerTitle>
          <S.ContainerSubtitle>{subtitle}</S.ContainerSubtitle>
        </div>
        {children}
      </S.ContainerBody>
    </div>
  );
};

ContainerForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backTo: PropTypes.bool,
};

ContainerForm.defaultProps = {
  className: '',
  id: '',
  title: 'title,',
  subtitle: 'subtitle',
  backTo: false,
};

export default ContainerForm;
