import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Coupon = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Retângulo_1583"
            data-name="Retângulo 1583"
            width="25"
            height="25"
            transform="translate(22 339)"
            fill={color}
          />
        </clipPath>
      </defs>
      <g id="Grupo_de_máscara_9" data-name="Grupo de máscara 9" transform="translate(-22 -339)">
        <g id="Cupom_de_desconto" data-name="Cupom de desconto" transform="translate(12.782 338.999)">
          <g id="Grupo_390" data-name="Grupo 390" transform="translate(9.71 0.001)">
            <g id="Grupo_389" data-name="Grupo 389">
              <path
                id="Caminho_5241"
                data-name="Caminho 5241"
                d="M32.416,12.913a.762.762,0,0,1,0-.83l.913-1.4a2.392,2.392,0,0,0-1.152-3.539l-1.563-.6a.762.762,0,0,1-.488-.672L30.039,4.2a2.392,2.392,0,0,0-3.008-2.183l-1.616.435a.762.762,0,0,1-.789-.256L23.573.889a2.392,2.392,0,0,0-3.721,0L18.8,2.191a.762.762,0,0,1-.789.256L16.4,2.017A2.392,2.392,0,0,0,13.385,4.2L13.3,5.876a.762.762,0,0,1-.488.672l-1.563.6a2.392,2.392,0,0,0-1.152,3.539l.913,1.4a.762.762,0,0,1,0,.83l-.912,1.4a2.392,2.392,0,0,0,1.152,3.539l1.563.6a.762.762,0,0,1,.488.672l.086,1.672A2.392,2.392,0,0,0,16.4,22.989l1.616-.435a.762.762,0,0,1,.789.256l1.056,1.3a2.392,2.392,0,0,0,3.721,0l1.056-1.3a.762.762,0,0,1,.789-.256l1.616.435A2.392,2.392,0,0,0,30.051,20.8l.086-1.672a.762.762,0,0,1,.488-.672l1.563-.6a2.392,2.392,0,0,0,1.152-3.539Zm-.82,3.419-1.563.6A2.394,2.394,0,0,0,28.5,19.043l-.086,1.672a.761.761,0,0,1-.96.7l-1.616-.435a2.394,2.394,0,0,0-2.481.807l-1.056,1.3a.761.761,0,0,1-1.183,0l-1.042-1.3a2.393,2.393,0,0,0-2.481-.807l-1.616.435a.761.761,0,0,1-.96-.7l-.086-1.672a2.394,2.394,0,0,0-1.536-2.113l-1.563-.6A.761.761,0,0,1,11.46,15.2l.913-1.4a2.394,2.394,0,0,0,0-2.609l-.908-1.4a.761.761,0,0,1,.366-1.125l1.563-.6a2.394,2.394,0,0,0,1.536-2.113l.086-1.672a.761.761,0,0,1,.96-.7l1.616.435a2.394,2.394,0,0,0,2.481-.807l1.056-1.3a.761.761,0,0,1,1.183,0l1.056,1.3a2.394,2.394,0,0,0,2.481.807l1.616-.435a.761.761,0,0,1,.96.7l.086,1.672a2.394,2.394,0,0,0,1.536,2.113l1.563.6a.761.761,0,0,1,.366,1.125l-.912,1.4a2.394,2.394,0,0,0,0,2.609l.913,1.4a.761.761,0,0,1-.388,1.125Z"
                transform="translate(-9.71 -0.001)"
                fill={color}
              />
            </g>
          </g>
          <g id="Grupo_392" data-name="Grupo 392" transform="translate(16.782 8.102)">
            <g id="Grupo_391" data-name="Grupo 391">
              <path
                id="Caminho_5242"
                data-name="Caminho 5242"
                d="M157.845,159.6a.816.816,0,0,0-1.152,0l-7.614,7.614a.816.816,0,0,0,1.152,1.152l7.614-7.614a.815.815,0,0,0,0-1.152Z"
                transform="translate(-148.838 -159.361)"
                fill={color}
              />
            </g>
          </g>
          <g id="Grupo_393" data-name="Grupo 393" transform="translate(16.782 8.102)">
            <path
              id="Caminho_5243"
              data-name="Caminho 5243"
              d="M150.47,159.36a1.632,1.632,0,1,0,1.632,1.632A1.632,1.632,0,0,0,150.47,159.36Z"
              transform="translate(-148.838 -159.36)"
              fill={color}
            />
          </g>
          <g id="Grupo_394" data-name="Grupo 394" transform="translate(22.765 14.084)">
            <path
              id="Caminho_5244"
              data-name="Caminho 5244"
              d="M268.149,277.039a1.633,1.633,0,1,0,1.633,1.633A1.633,1.633,0,0,0,268.149,277.039Z"
              transform="translate(-266.517 -277.039)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  </S.ContainerIcon>
);

Coupon.propTypes = {
  color: PropTypes.string,
};
Coupon.defaultProps = {
  color: '#5e5e5e',
};

export default Coupon;
