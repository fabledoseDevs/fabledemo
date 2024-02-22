import Image from 'next/image';
import type { ReactElement } from 'react';

//import separatorImg from '@/public/images/separator-line.svg';
import separatorImg from '../../../public/images/separator-line.svg';
import { StyledSeparator } from './Separator.styled';
import type { Separator as SeparatorType } from './Separator.types';

export const Separator: SeparatorType = ({ type }): ReactElement => (
  <StyledSeparator type={type}>
    <Image src={separatorImg.src} alt="separator" width={632} height={23} />
  </StyledSeparator>
);
