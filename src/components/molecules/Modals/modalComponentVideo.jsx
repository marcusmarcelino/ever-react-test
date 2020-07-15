import React from 'react';
import PropTypes from 'prop-types';

import Button from '@components/atoms/Button';

import Modal from './index';

import * as S from './styled';

const ModalComponentVideo = ({ isModalVideoVisible, setIsModalVideoVisible, linkVideo }) => {
  return (
    <S.ModalContainerVideo>
      <Modal title="" isVisible={isModalVideoVisible} onClose={() => setIsModalVideoVisible(!isModalVideoVisible)}>
        <S.ModalVideoButtonCloser>
          <Button className="btnMdCloser" type="button" onClick={() => setIsModalVideoVisible(!isModalVideoVisible)}>
            Fechar X
          </Button>
        </S.ModalVideoButtonCloser>
        <S.ModalContentVideo>
          <iframe title="tutorial" className="embed-responsive-item" src={linkVideo} allowFullScreen />
        </S.ModalContentVideo>
      </Modal>
    </S.ModalContainerVideo>
  );
};

ModalComponentVideo.propTypes = {
  linkVideo: PropTypes.string,
  isModalVideoVisible: PropTypes.bool,
  setIsModalVideoVisible: PropTypes.bool,
};
ModalComponentVideo.defaultProps = {
  linkVideo: '',
  isModalVideoVisible: false,
  setIsModalVideoVisible: '',
};

export default ModalComponentVideo;
