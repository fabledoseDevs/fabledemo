import Image from 'next/image';
import styled from 'styled-components';

export const LoadingScreenBody = styled.div<{
  fadeOutAnimation: boolean;
  bgColor: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 96px;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  transition: opacity 0.5s;
  opacity: ${({ fadeOutAnimation }) => (fadeOutAnimation ? '0' : '1')};
`;

export const Animation = styled(Image)`
  margin-top: -124px;
  display: block;
`;

export const Label = styled.h4`
  font-weight: 200;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
