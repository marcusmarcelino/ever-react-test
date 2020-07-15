import React from 'react';
import PropTypes from 'prop-types';

import Button from '@components/atoms/Button';

import Video from '@assets/images/video.svg';

import * as S from './styled';

const BannerEcommerce = ({ link, image, title, imageMobile, openModalVideo, openModalToShare, activeToast }) => (
  <S.BannerContainer image={image} imageMobile={imageMobile}>
    <S.BannerContent>
      <S.BannerTitle>{title}</S.BannerTitle>
      <div>
        <S.BannerLinkText>{link}</S.BannerLinkText>
        <S.BannerButtonGroup>
          <Button onClick={() => activeToast(true)} type="button" variant="dark" icon="copy" showIcon>
            Copy
          </Button>
          <Button onClick={() => openModalToShare(true)} type="button" variant="dark" icon="share" showIcon>
            Compatilhar
          </Button>
        </S.BannerButtonGroup>
      </div>
    </S.BannerContent>
    <S.BannerContentVideo>
      <a href="#!" onClick={() => openModalVideo(true)}>
        <img src={Video} alt="Assitir" />
      </a>
    </S.BannerContentVideo>
  </S.BannerContainer>
);

BannerEcommerce.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  imageMobile: PropTypes.bool,
  openModalVideo: PropTypes.func,
  openModalToShare: PropTypes.func,
  activeToast: PropTypes.func,
};
BannerEcommerce.defaultProps = {
  link: '',
  image: '',
  title: '',
  imageMobile: true,
  openModalVideo: () => {},
  openModalToShare: () => {},
  activeToast: () => {},
};

export default BannerEcommerce;
