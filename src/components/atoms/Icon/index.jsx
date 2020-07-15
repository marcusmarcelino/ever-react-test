import React from 'react';
import PropTypes from 'prop-types';

import BuyOnline from './buyOnline';
import MonitorPurchases from './monitorPurchases';
import MonitorPage from './monitorPage';
import Coupon from './coupon';
import Calendar from './calendar';
import Close from './close';
import Growth from './growth';
import Home from './home';
import Partners from './partners';
import Payment from './payment';
import Promotion from './promotion';
import Question from './question';
import Rate from './rate';
import Success from './success';
import ShoppingBag from './shoppingBag';
import ShoppingCart from './shoppingCart';
import SpaceShip from './spaceShip';
import Support from './support';
import MonitorLinks from './monitorLinks';
import GroupUser from './groupUser';
import Dropdown from './dropdown';
import Dropup from './dropup';
import Menu from './menu';
import MenuRetractable from './menuRetractable';

import * as S from './styled';

const Icon = ({ color, icon, position }) => {
  const icons = {
    buyOnline: <BuyOnline color={color} />,
    monitorPurchases: <MonitorPurchases color={color} />,
    monitorPage: <MonitorPage color={color} />,
    coupon: <Coupon color={color} />,
    calendar: <Calendar color={color} />,
    close: <Close color={color} />,
    growth: <Growth color={color} />,
    home: <Home color={color} />,
    partners: <Partners color={color} />,
    payment: <Payment color={color} />,
    promotion: <Promotion color={color} />,
    question: <Question color={color} />,
    rate: <Rate color={color} />,
    success: <Success color={color} />,
    shoppingBag: <ShoppingBag color={color} />,
    shoppingCart: <ShoppingCart color={color} />,
    spaceShip: <SpaceShip color={color} />,
    support: <Support color={color} />,
    monitorLinks: <MonitorLinks color={color} />,
    groupUser: <GroupUser color={color} />,
    dropdown: <Dropdown color={color} />,
    dropup: <Dropup color={color} />,
    menu: <Menu color={color} />,
    menuRetractable: <MenuRetractable color={color} />,
  };

  return <S.Icon position={position}>{icons[icon]}</S.Icon>;
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  position: PropTypes.string,
};
Icon.defaultProps = {
  icon: 'home',
  position: 'left',
};

export default Icon;
