import separatorImg from '@/public/separator-line.svg';
import { StyledSeparator } from './Separator.styled';
import type { SeparatorProps } from './Separator.types';

export const Separator = ({ type }: SeparatorProps) => (
  <StyledSeparator type={type}>
    <img src={separatorImg.src} alt="separator" />
  </StyledSeparator>
);
