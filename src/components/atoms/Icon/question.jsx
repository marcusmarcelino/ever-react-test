import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Question = ({ color }) => (
  <S.ContainerIcon>
    <svg id="question" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <g id="Group_30" data-name="Group 30">
        <g id="Group_29" data-name="Group 29">
          <path
            id="Path_27"
            data-name="Path 27"
            d="M12.5,0A12.527,12.527,0,0,0,0,12.5a12.4,12.4,0,0,0,1.751,6.349L.037,24.038a.732.732,0,0,0,.933.923L6.106,23.2A12.486,12.486,0,1,0,12.5,0Zm0,23.535a11.058,11.058,0,0,1-5.912-1.756.732.732,0,0,0-.629-.074L1.891,23.1l1.358-4.112a.732.732,0,0,0-.077-.622A11.022,11.022,0,1,1,12.5,23.535Z"
            fill={color}
          />
        </g>
      </g>
      <g id="Group_32" data-name="Group 32" transform="translate(7.373 2.979)">
        <g id="Group_31" data-name="Group 31">
          <path
            id="Path_28"
            data-name="Path 28"
            d="M156.06,61A5.065,5.065,0,0,0,151,66.06a2.2,2.2,0,0,0,4.395,0,.666.666,0,0,1,.665-.665.8.8,0,0,1,.8.8v.156a.8.8,0,0,1-.234.566L155,68.539a3.638,3.638,0,0,0-1.073,2.589v.858a2.2,2.2,0,0,0,4.395,0v-.555l1.408-1.408A5.305,5.305,0,0,0,156.06,61Zm2.637,7.987-1.623,1.623a.732.732,0,0,0-.215.518v.858a.732.732,0,0,1-1.465,0v-.858a2.183,2.183,0,0,1,.644-1.553l1.624-1.624a2.252,2.252,0,0,0,.662-1.6v-.156a2.267,2.267,0,0,0-2.264-2.264,2.132,2.132,0,0,0-2.13,2.13.732.732,0,0,1-1.465,0,3.6,3.6,0,0,1,3.595-3.595,3.841,3.841,0,0,1,2.637,6.522Z"
            transform="translate(-151 -61)"
            fill={color}
          />
        </g>
      </g>
      <g id="Group_34" data-name="Group 34" transform="translate(10.303 17.627)">
        <g id="Group_33" data-name="Group 33">
          <path
            id="Path_29"
            data-name="Path 29"
            d="M213.2,361a2.2,2.2,0,1,0,2.2,2.2A2.2,2.2,0,0,0,213.2,361Zm0,2.93a.732.732,0,1,1,.732-.732A.733.733,0,0,1,213.2,363.93Z"
            transform="translate(-211 -361)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  </S.ContainerIcon>
);

Question.propTypes = {
  color: PropTypes.string,
};
Question.defaultProps = {
  color: '#5e5e5e',
};

export default Question;
