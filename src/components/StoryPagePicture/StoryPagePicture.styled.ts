import styled from 'styled-components';

export const AnimatedPicture = styled.video`
  position: relative;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndex.standard};
`;
