import Image from 'next/image';
import styled from 'styled-components';

export const LogoElement = styled(Image)<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: auto;
`;
