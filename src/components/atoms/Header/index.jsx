import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Notification from '../../../assets/images/notification.svg';
import Language from '../../../assets/images/language.svg';
import Profile from '../../../assets/images/profile.jpg';
import Icon from '../../atoms/Icon';

import { Actions as MenuActions } from '../../../redux/ducks/menu';

import Count from './count';

import * as S from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const retractable = useSelector((state) => state.menu.retractable);

  return (
    <S.HeaderContainer>
      <S.HeaderRetractable onClick={() => dispatch(MenuActions.retractableMenu())}>
        <Icon icon={retractable ? 'menu' : 'menuRetractable'} color="#000" />
      </S.HeaderRetractable>
      <S.HeaderRetractableMobile onClick={() => dispatch(MenuActions.retractableMobileMenu())}>
        <Icon icon="menu" color="#000" />
      </S.HeaderRetractableMobile>
      <S.HeaderRight>
        <S.HeaderNotification>
          <img src={Notification} alt="Notificação" />
          <S.HeaderNotificationCount>
            <Count number={0} />
          </S.HeaderNotificationCount>
        </S.HeaderNotification>

        <S.HeaderLanguage>
          <img src={Language} alt="Linguagem" />
        </S.HeaderLanguage>

        <S.HeaderProfile>
          <img src={Profile} alt="Profile" />
        </S.HeaderProfile>
      </S.HeaderRight>
    </S.HeaderContainer>
  );
};

export default Header;
