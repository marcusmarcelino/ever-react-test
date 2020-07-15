import React, { useState } from 'react';
import Button from '@components/atoms/Button/styled';
import { withKnobs } from '@storybook/addon-knobs';

import { ContainerStorybook } from '@assets/styles/components';
import Modal from './index';
import ModalVideo from './modalComponentVideo';

export default {
  title: 'molecules/Modals',
  component: Modal,
  decorators: [withKnobs],
};

export const element = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ContainerStorybook>
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(!isModalVisible)} />
      <Button variant="primary" onClick={() => setIsModalVisible(!isModalVisible)}>
        show modal
      </Button>
    </ContainerStorybook>
  );
};

export const modalWithVideo = () => {
  const [isModalVideoVisible, setIsModalVideoVisible] = useState(false);
  const linkVideo = 'https://www.youtube.com/embed/LiiYMEWKVnY';

  return (
    <ContainerStorybook>
      <ModalVideo
        linkVideo={linkVideo}
        isModalVideoVisible={isModalVideoVisible}
        onClose={() => setIsModalVideoVisible(!isModalVideoVisible)}
      />
      <Button variant="primary" onClick={() => setIsModalVideoVisible(!isModalVideoVisible)}>
        show modal
      </Button>
    </ContainerStorybook>
  );
};

element.story = {
  name: 'Default',
};
