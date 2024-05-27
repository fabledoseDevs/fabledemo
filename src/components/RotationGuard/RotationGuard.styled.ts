import { DevicePhoneMobile } from '@styled-icons/heroicons-outline/DevicePhoneMobile';
import { css, keyframes, styled } from 'styled-components';

const blipIn = css`
  transform: scale(1);
`;

const blipOut = css`
  transform: scale(1.1);
`;

const rotated90 = css`
  transform: rotate(90deg);
`;

const flexCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconAnimation = keyframes`
  0% {
    ${blipIn}
  }
  5% {
    ${blipOut}
  }
  10% {
    ${blipIn}
  }
  15% {
    ${blipOut}
  }
  20% {
    ${blipIn}
  }
  25% {
    ${blipOut}
  }
  30% {
    ${blipIn}
  }
  40% {
    ${rotated90}
  }
  90% {
    ${rotated90};
    opacity: 1;
  }
  98% {
    ${rotated90};
    opacity: 0;
  }
  100% {
    ${rotated90};
    opacity: 0;
  }
`;

export const GuardBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.guard};
  width: 100dvw;
  height: 120dvh;
  ${flexCenter};
  background: ${({ theme }) => theme.palette.linearBackground};
`;

export const ContentWrapper = styled.div`
  margin-top: -20dvh;
  ${flexCenter};
`;

export const MainMessage = styled.h2`
  text-align: center;
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.lato};
  padding: 0 12px;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 30px;
  }
`;

export const RotationIcon = styled(DevicePhoneMobile)`
  display: block;
  width: 180px;
  height: 180px;
  animation: ${IconAnimation} 8s linear infinite;
  margin: 30px auto;
`;

export const DetailedMessage = styled.p`
  font-size: 15px;
  line-height: 1.4;
  width: 100%;
  text-align: center;
  padding: 12px;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 18px;
  }
`;
