import React from 'react';
import PropTypes from 'prop-types';
import ItenLink from '../../atoms/ItenLink';

import * as S from './styled';

const Menu = ({ data }) => {
  function isvisible(show, isPermission) {
    return show && isPermission;
  }

  return (
    <nav>
      <S.ListLinks>
        {data.map(({ text, icon, disabled, isPermission, selected, count, haveChildren, show, route }) =>
          isvisible(show, isPermission) ? (
            <ItenLink
              key={text}
              text={text}
              icon={icon}
              count={count}
              disabled={disabled}
              isPermission={isPermission}
              selected={selected}
              haveChildren={haveChildren}
              route={route}
            />
          ) : (
            ''
          )
        )}
      </S.ListLinks>
    </nav>
  );
};
Menu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
Menu.defaultProps = {
  data: [],
};

export default Menu;
