import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/atoms/Text';

import * as S from './styled';

const Welcome = ({ name, msg, person, author }) => (
  <S.Welcome image="welcome">
    <div className="welcome__container">
      <Text size="lg" variant="medium" className="welcome__title">
        {`Ola, ${person} ${name}`}
      </Text>

      <Text size="md" variant="light" className="welcome__description">
        {msg}
      </Text>

      <Text size="md" variant="light" className="welcome__author">
        {author}
      </Text>
    </div>
  </S.Welcome>
);

Welcome.propTypes = {
  name: PropTypes.string,
  msg: PropTypes.string,
  person: PropTypes.string,
  author: PropTypes.string,
};
Welcome.defaultProps = {
  name: 'Carla',
  msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  person: 'Mr. ',
  author: 'Lorem Ipsum',
};

export default Welcome;
