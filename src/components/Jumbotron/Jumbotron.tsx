import Image from 'next/image';

import Button from '@/componentsButton';

import MainImage from '../../../public/images/jumbotron.png';
import RedLine from '../../../public/images/span.png';
import {
  ContentWrapper,
  JumbotronImage,
  JumbotronWrapper,
  RedSpan,
} from './Jumbotron.styled';
import type { Jumbotron as JumbotronType } from './Jumbotron.types';

export const Jumbotron: JumbotronType = ({
  button,
  header,
  subtitle,
  redLineText,
}) => (
  <JumbotronWrapper>
    <ContentWrapper>
      <p>{subtitle}</p>
      <h2>
        {header.before}
        <br />
        <RedSpan>
          <Image src={RedLine.src} alt="Red line" width={282} height={116} />
          {redLineText}
        </RedSpan>
        {header.after}
      </h2>
      <Button {...button} />
    </ContentWrapper>
    <JumbotronImage src={MainImage.src} alt="Jumbo" width={966} height={577} />
  </JumbotronWrapper>
);
