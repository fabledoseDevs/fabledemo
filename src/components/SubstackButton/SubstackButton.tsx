import Image from 'next/image';

import arrow from '../../../public/images/arrow-right-green.png';
import socialMediaAvatar from '../../../public/images/social-media-square.jpg';
import substackLogo from '../../../public/images/Substack_logo.png';
import {
  ArrowImage,
  ContentWrapper,
  SideImage,
  SideImageWrapper,
  SubstackButtonBody,
  Title,
} from './SubstackButton.styled';
import type { SubstackButton as SubstackButtonType } from './SubstackButton.types';

export const SubstackButton: SubstackButtonType = () => (
  <SubstackButtonBody
    href={'https://fabledose.substack.com'}
    target={'_blank'}
    aria-label={'Zapisz się do Newslettera'}
  >
    <SideImageWrapper>
      <SideImage src={socialMediaAvatar} alt={'Substack Blog'} />
    </SideImageWrapper>
    <ContentWrapper>
      <Title>Nasz Newsletter i Blog</Title>
      <Image src={substackLogo} alt={'Substack'} />
    </ContentWrapper>
    <ArrowImage src={arrow} alt={'Przejdź do Substack'} />
  </SubstackButtonBody>
);
