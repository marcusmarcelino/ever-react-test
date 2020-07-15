import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../components/atoms/Header';
import Menu from '../../../components/molecules/Menu';
import Logo from '../../../components/atoms/Logo';
import Spacer from '../../../components/atoms/spacer';

import { Actions as MenuActions } from '../../../redux/ducks/menu';

import * as S from './styled';

const Template = ({ children, title }) => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  dispatch(MenuActions.getAccess());

  return (
    <S.Container retractable={menu.retractable} className="app">
      <S.Sidebar>
        <Logo size={menu.retractable ? 'sm' : 'md'} />
        <Spacer size={menu.retractable ? 'sm' : 'md'} />
        <Menu data={menu.links} />
      </S.Sidebar>

      <S.SidebarMobile retractableMobile={menu.retractableMobile}>
        <Logo size="md" />
        <Spacer size="md" />
        <Menu data={menu.links} />
      </S.SidebarMobile>

      <S.MainContainer>
        <Header />

        <S.Title onClick={() => dispatch(MenuActions.retractableMobileMenuFalse())}>
          <h3>{title}</h3>
        </S.Title>
        <S.Children onClick={() => dispatch(MenuActions.retractableMobileMenuFalse())}>{children}</S.Children>
      </S.MainContainer>
    </S.Container>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Template;
