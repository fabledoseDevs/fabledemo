import styled from 'styled-components';

import type { SeparatorType } from './Separator.types';

export const StyledSeparator = styled.div<{ type: SeparatorType }>`
  width: 100%;
  max-width: 630px;
  display: block;
  margin: ${({ type }) => (type === 'SMALL' ? '20px auto' : '40px auto')};

  img {
    width: 100%;
  }
`;
