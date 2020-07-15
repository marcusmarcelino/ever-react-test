import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ModalConfirm = ({ children, title, onClose, id, isVisible }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <>
      {isVisible ? (
        <S.Modal id={id} onClick={handleOutSideClick}>
          <S.ModalContent>
            <S.ModalHeader>
              <h3>{title}</h3>
            </S.ModalHeader>
            <S.ModalBody>{children}</S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      ) : null}
    </>
  );
};

ModalConfirm.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
};

ModalConfirm.defaultProps = {
  children: 'content',
  title: 'title',
  onClose: () => false,
  id: 'modal',
  isVisible: true,
};

export default ModalConfirm;
