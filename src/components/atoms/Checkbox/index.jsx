import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import * as S from './styled';

const Checkbox = ({ className, id, name, value, disabled, isChecked, text, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggleClick = () => {
    if (disabled) return;

    setChecked(!checked);
  };

  useEffect(() => {
    if (disabled) return;

    setChecked(isChecked);
  }, [isChecked, disabled]);

  return (
    <S.ContainerCheckbox htmlFor={id} active={checked} onClick={handleToggleClick} onChange={onChange}>
      <S.Checkbox
        type="checkbox"
        checked={checked}
        name={name}
        value={value}
        id={id}
        className={className}
        disabled={disabled}
        hidden
        readOnly
        onChange={onChange}
      />
      {text && <Text>{text}</Text>}
    </S.ContainerCheckbox>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  id: '',
  className: '',
  name: '',
  value: '',
  disabled: false,
  isChecked: false,
  text: 'Checkbox Default',
  onChange: () => false,
};

export default Checkbox;
