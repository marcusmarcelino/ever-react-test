import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Profile = ({ image, name, work, email, telephony, phone }) => (
  <S.ProfileContainer>
    <S.ProfileImage>
      <img src={image} alt={name} />
    </S.ProfileImage>

    <S.ProfileInfo>
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileWork>{work}</S.ProfileWork>

      <S.ProfileText>{email}</S.ProfileText>
      <S.ProfileText>{telephony}</S.ProfileText>
      <S.ProfileText>{phone}</S.ProfileText>

      <S.ButtonGroup className={document.body.clientWidth < 1024 ? 'center' : 'start'}>
        <S.Button variant="secondary" showIcon icon="email">
          enviar e-mail
        </S.Button>
        <S.Button variant="success" showIcon icon="whats">
          enviar mensagem
        </S.Button>
      </S.ButtonGroup>
    </S.ProfileInfo>
  </S.ProfileContainer>
);

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  work: PropTypes.string,
  email: PropTypes.string,
  telephony: PropTypes.string,
  phone: PropTypes.string,
};
Profile.defaultProps = {
  image: '',
  name: '',
  work: '',
  email: '',
  telephony: '',
  phone: '',
};

export default Profile;
