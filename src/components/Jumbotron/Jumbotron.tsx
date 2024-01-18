import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';

import Image from '../../../public/images/Jumbotron.png';
import RedLine from '../../../public/images/Span.png';
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
          <img src={RedLine.src} alt="Red line" />
          {redLineText}
        </RedSpan>
        {header.after}
      </h2>
      <Button {...button} />
    </ContentWrapper>
    <JumbotronImage src={Image.src} alt="Jumbo" />
  </JumbotronWrapper>
);
