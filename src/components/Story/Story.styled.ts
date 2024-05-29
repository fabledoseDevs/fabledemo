import { css, styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Stage = styled(Swiper)<{ defaultColor: string }>`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  left: 0;
  line-height: 100dvh;
  background-color: ${({ defaultColor }) => defaultColor};

  div.swiper-slide-next {
    visibility: hidden !important;
  }

  div.swiper-pagination {
    position: absolute;
    bottom: 20px !important;
    right: 22px !important;
    left: unset;
    width: 90px;
    height: auto;
    line-height: 16px;
    padding: 0 6px;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary};
    opacity: 0.5;
    cursor: default;

    span {
      line-height: 16px;
    }

    @media ${({ theme }) => theme.media.laptop} {
      line-height: 24px;
      font-size: 24px;
      bottom: 23px !important;
      right: 50px !important;

      span {
        line-height: 24px;
      }
    }
  }
`;

export const Slide = styled(SwiperSlide)<{ defaultColor: string }>`
  width: 100dvw;
  height: 100dvh;
  line-height: 100dvh;
  background-color: ${({ defaultColor }) => defaultColor};
`;

export const NavElements = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: auto;
  height: auto;
  display: flex;
  gap: 54px;
  flex-direction: row;
  z-index: ${({ theme }) => theme.zIndex.veryTop};

  @media ${({ theme }) => theme.media.laptop} {
    gap: 70px;
    bottom: 10px;
    right: 10px;
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.25;
  transition: all 300ms;
  width: 25px;
  height: 25px;
  border-radius: 20px;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50px;
    height: 50px;
  }

  svg {
    color: ${({ theme }) => theme.palette.secondary};
  }

  &:hover {
    opacity: 1;
  }
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
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ReturnToMainPage = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 20px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 10px;
  }
`;

export const SettingsButton = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 50px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 65px;
  }
`;

export const FullscreenButton = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 80px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 125px;
  }
`;
