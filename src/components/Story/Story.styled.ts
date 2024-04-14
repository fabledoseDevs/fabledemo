import { css, styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperArrowButton = css`
  top: 10%;
  width: 5%;
  height: 80%;
  color: ${({ theme }) => theme.palette.background};
  opacity: 0.25;
  transition: all 300ms;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const Slider = styled(Swiper)`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;

  div.swiper-button-prev {
    ${swiperArrowButton};
    visibility: hidden;

    @media ${({ theme }) => theme.media.laptop} {
      visibility: visible;
    }
  }

  div.swiper-button-next {
    ${swiperArrowButton};
    visibility: hidden;

    @media ${({ theme }) => theme.media.laptop} {
      visibility: visible;
    }
  }

  div.swiper-button-disabled {
    display: none;
  }

  div.swiper-pagination {
    width: auto;
    right: 6px;
    left: unset;

    span.swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.palette.secondary};

      @media ${({ theme }) => theme.media.laptop} {
        width: 14px;
        height: 14px;
      }
    }

    span.swiper-pagination-bullet-active {
      width: 10px;
      background-color: ${({ theme }) => theme.palette.background};

      @media ${({ theme }) => theme.media.laptop} {
        width: 14px;
      }
    }
  }
`;

export const Slide = styled(SwiperSlide)`
  width: 100dvw;
  height: 100dvh;
  line-height: 100dvh;
  background-color: ${({ theme }) => theme.palette.lightergreen};
`;

const iconsCommon = css`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 25px;
  height: 25px;
  background: none;
  border: 0;
  opacity: 0.25;
  transition: opacity 0.5s;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  svg {
    color: #fff;
  }
`;

export const ReturnToMainPage = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 10px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 10px;
  }
`;

export const SettingsButton = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 40px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 65px;
  }
`;

export const FullscreenButton = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 70px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 125px;
  }
`;
