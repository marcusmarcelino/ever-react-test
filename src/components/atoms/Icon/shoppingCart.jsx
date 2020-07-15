import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ShoppingCart = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <path
        id="shopping-cart_2_"
        data-name="shopping-cart"
        d="M24.7,4.9a1.835,1.835,0,0,0-1.409-.83L4.278,2.653,3.858.586A.732.732,0,0,0,3.14,0H.732a.732.732,0,0,0,0,1.465h1.81L5.058,13.828l-.572,1.233a1.85,1.85,0,0,0,.623,2.3,2.084,2.084,0,1,0,3.524.33h7.079a2.084,2.084,0,1,0,3.729,0h.293a.732.732,0,0,0,0-1.465H6.163a.384.384,0,0,1-.348-.546l.477-1.027H20.744a1.851,1.851,0,0,0,1.745-1.239l2.405-6.885A1.836,1.836,0,0,0,24.7,4.9ZM6.767,19.237a.62.62,0,1,1,.62-.62A.62.62,0,0,1,6.767,19.237Zm10.808,0a.62.62,0,1,1,.62-.62A.62.62,0,0,1,17.576,19.237ZM23.512,6.043l-2.405,6.885a.384.384,0,0,1-.362.257H6.422L4.582,4.145l18.6,1.389a.384.384,0,0,1,.334.509Zm0,0"
        transform="translate(0)"
        fill={color}
      />
    </svg>
  </S.ContainerIcon>
);

ShoppingCart.propTypes = {
  color: PropTypes.string,
};
ShoppingCart.defaultProps = {
  color: '#5e5e5e',
};

export default ShoppingCart;
