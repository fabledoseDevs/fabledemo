import { styled } from 'styled-components';

import type { LAYOUT_VARIANTS } from '@/fables_library/library.types';

export const PageBody = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-color: #184e18;
  box-sizing: border-box;
  overflow: clip;
`;

export const TextContent = styled.div<{ layout: LAYOUT_VARIANTS }>``;

export const TextBox = styled.p``;

export const Toolbox = styled.div<{ isVisible: boolean }>``;
