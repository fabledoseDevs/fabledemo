import Image from 'next/image';

import Button from '@/componentsButton';
import MainImage from '@/img/jumbotron.png';
import RedLine from '@/img/span.png';

import {
  ButtonPositioner,
  ContentWrapper,
  JumbotronImage,
  JumbotronWrapper,
  RedSpan,
} from './Jumbotron.styled';
import type { Jumbotron as JumbotronType } from './Jumbotron.types';

export const Jumbotron: JumbotronType = ({ button, header, redLineText }) => (
  <JumbotronWrapper>
    <ContentWrapper>
      <h1>Biblioteka Fabledose</h1>
      <h2>
        {header.before}
        <br />
        <RedSpan>
          <Image src={RedLine.src} alt="Red line" width={282} height={116} />
          {redLineText}
        </RedSpan>
        {header.after}
      </h2>
      <ButtonPositioner>
        <Button {...button} />
      </ButtonPositioner>
    </ContentWrapper>
    <JumbotronImage src={MainImage.src} alt="Jumbo" width={966} height={577} />
  </JumbotronWrapper>
);
