/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Icon from '../../atoms/Icon';
import PropTypes from 'prop-types';

import { Actions as MenuActions } from '../../../redux/ducks/menu';

import * as S from './styled';

export const ItenLink = ({ text, icon, selected, disabled, isPermission, count, haveChildren, route }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  const [drop, setDrop] = useState('dropdown');

  function changeDrop() {
    if (drop === 'dropdown') {
      dispatch(MenuActions.showLink(text));
      setDrop('dropup');
    } else {
      dispatch(MenuActions.hideLink(text));
      setDrop('dropdown');
    }
  }

  const history = useHistory();
  return (
    <S.ItenLink
      onClick={route !== null ? () => history.push(route) : null}
      selected={selected}
      disabled={disabled}
      isPermission={isPermission}
      retractable={menu.retractable}
    >
      <S.IconLink selected={selected}>
        <Icon icon={icon} position="left" color={selected ? '#fff' : disabled ? 'rgba(94,94,94, 0.3)' : '#707070'} />
      </S.IconLink>
      {!menu.retractable ? (
        <S.ContainerText count={count} haveChildren={haveChildren}>
          <S.Text selected={selected} disabled={disabled} count={count}>
            {text}
          </S.Text>
          {count > 0 ? (
            <S.Count selected={selected} disabled={disabled}>
              {count}
            </S.Count>
          ) : (
            ''
          )}
          {haveChildren ? (
            <S.Drop selected={selected} disabled={disabled} onClick={changeDrop}>
              <Icon icon={drop} position="right" color="#707070" />
            </S.Drop>
          ) : (
            ''
          )}
        </S.ContainerText>
      ) : (
        ''
      )}
    </S.ItenLink>
  );
};

ItenLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  isPermission: PropTypes.bool,
  count: PropTypes.number,
  haveChildren: PropTypes.bool,
  route: PropTypes.string,
};
ItenLink.defaultProps = {
  text: 'Home',
  icon: 'home',
  selected: false,
  disabled: false,
  isPermission: true,
  count: 0,
  haveChildren: false,
  route: '',
};

export default ItenLink;
