import styled from 'styled-components';
import type { SeparatorType } from './Separator.types';

export const StyledSeparator = styled('div')<{ type: SeparatorType }>(
  ({ type }) => ({
    width: 'fit-content',
    margin: type == 'SMALL' ? '80px auto' : '120px auto',
  }),
);
