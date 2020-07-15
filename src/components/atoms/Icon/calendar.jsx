import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Calendar = ({ color }) => (
  <S.ContainerIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
      <g id="Mask_Group_7" data-name="Mask Group 7" transform="translate(-27 -633)">
        <g id="calendar" transform="translate(27 633)">
          <g id="Group_51" data-name="Group 51">
            <g id="Group_50" data-name="Group 50">
              <path
                id="Path_238"
                data-name="Path 238"
                d="M21.188,1.875H20.063V0H18.188V1.875H5.813V0H3.938V1.875H2.813A2.816,2.816,0,0,0,0,4.688v16.5A2.816,2.816,0,0,0,2.813,24H21.188A2.816,2.816,0,0,0,24,21.188V4.688A2.816,2.816,0,0,0,21.188,1.875Zm.938,19.313a.939.939,0,0,1-.937.938H2.813a.939.939,0,0,1-.937-.937V8.813h20.25Zm0-14.25H1.875V4.688a.939.939,0,0,1,.938-.937H3.938V5.625H5.813V3.75H18.188V5.625h1.875V3.75h1.125a.939.939,0,0,1,.938.938Z"
                fill={color}
              />
            </g>
          </g>
          <g id="Group_53" data-name="Group 53" transform="translate(3.563 10.781)">
            <g id="Group_52" data-name="Group 52">
              <rect id="Rectangle_42" data-name="Rectangle 42" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_55" data-name="Group 55" transform="translate(7.313 10.781)">
            <g id="Group_54" data-name="Group 54">
              <rect id="Rectangle_43" data-name="Rectangle 43" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_57" data-name="Group 57" transform="translate(11.063 10.781)">
            <g id="Group_56" data-name="Group 56">
              <rect id="Rectangle_44" data-name="Rectangle 44" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_59" data-name="Group 59" transform="translate(14.813 10.781)">
            <g id="Group_58" data-name="Group 58">
              <rect id="Rectangle_45" data-name="Rectangle 45" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_61" data-name="Group 61" transform="translate(18.563 10.781)">
            <g id="Group_60" data-name="Group 60">
              <rect id="Rectangle_46" data-name="Rectangle 46" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_63" data-name="Group 63" transform="translate(3.563 14.531)">
            <g id="Group_62" data-name="Group 62">
              <rect id="Rectangle_47" data-name="Rectangle 47" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_65" data-name="Group 65" transform="translate(7.313 14.531)">
            <g id="Group_64" data-name="Group 64">
              <rect id="Rectangle_48" data-name="Rectangle 48" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_67" data-name="Group 67" transform="translate(11.063 14.531)">
            <g id="Group_66" data-name="Group 66">
              <rect id="Rectangle_49" data-name="Rectangle 49" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_69" data-name="Group 69" transform="translate(14.813 14.531)">
            <g id="Group_68" data-name="Group 68">
              <rect id="Rectangle_50" data-name="Rectangle 50" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_71" data-name="Group 71" transform="translate(3.563 18.281)">
            <g id="Group_70" data-name="Group 70">
              <rect id="Rectangle_51" data-name="Rectangle 51" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_73" data-name="Group 73" transform="translate(7.313 18.281)">
            <g id="Group_72" data-name="Group 72">
              <rect id="Rectangle_52" data-name="Rectangle 52" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_75" data-name="Group 75" transform="translate(11.063 18.281)">
            <g id="Group_74" data-name="Group 74">
              <rect id="Rectangle_53" data-name="Rectangle 53" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_77" data-name="Group 77" transform="translate(14.813 18.281)">
            <g id="Group_76" data-name="Group 76">
              <rect id="Rectangle_54" data-name="Rectangle 54" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
          <g id="Group_79" data-name="Group 79" transform="translate(18.563 14.531)">
            <g id="Group_78" data-name="Group 78">
              <rect id="Rectangle_55" data-name="Rectangle 55" width="1.875" height="1.875" fill={color} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </S.ContainerIcon>
);

Calendar.propTypes = {
  color: PropTypes.string,
};
Calendar.defaultProps = {
  color: '#5e5e5e',
};

export default Calendar;
