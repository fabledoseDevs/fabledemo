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

  div.swiper-button-prev {
    ${swiperArrowButton};
  }

  div.swiper-button-next {
    ${swiperArrowButton};
  }

  div.swiper-button-disabled {
    display: none;
  }

  div.swiper-pagination {
    width: auto;
    right: 6px;
    left: unset;

    span.swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      background-color: ${({ theme }) => theme.palette.secondary};
    }

    span.swiper-pagination-bullet-active {
      width: 14px;
      background-color: ${({ theme }) => theme.palette.background};
    }
  }
`;

export const Slide = styled(SwiperSlide)`
  width: 100dvw;
  height: 100dvh;
  line-height: 100dvh;
  //TODO: DELETE BELOW
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  color: antiquewhite;
  //TODO: DELETE ABOVE
  background-color: ${({ theme }) => theme.palette.lightergreen};
`;
