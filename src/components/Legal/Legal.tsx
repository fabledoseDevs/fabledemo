import parse from 'html-react-parser';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { LegalTranslations, useTranslation } from '@/translations';

import {
  ButtonPositioner,
  Headline,
  LegalBody,
  List,
  Paragraph,
} from './Legal.styled';
import type { Legal as LegalType } from './Legal.types';

export const Legal: LegalType = () => {
  const {
    adminTitle,
    adminText,
    purposeTitle,
    purposeText,
    purposeList,
    distributionTitle,
    distributionText,
    removalTitle,
    removalText,
    contactTitle,
    contactText,
    btnContact,
  } = useTranslation(LegalTranslations);

  return (
    <LegalBody>
      <Headline>{adminTitle}</Headline>
      <Paragraph>{parse(adminText)}</Paragraph>
      <Headline>{purposeTitle}</Headline>
      <Paragraph>{purposeText}</Paragraph>
      <List>
        <li>{purposeList[0]}</li>
        <li>{purposeList[1]}</li>
      </List>
      <Headline>{distributionTitle}</Headline>
      <Paragraph>{distributionText}</Paragraph>
      <Headline>{removalTitle}</Headline>
      <Paragraph>{parse(removalText)}</Paragraph>
      <Headline>{contactTitle}</Headline>
      <Paragraph>{parse(contactText)}</Paragraph>
      <ButtonPositioner>
        <Button
          label={btnContact}
          colorVariant={COLOR_VARIANTS.GREEN}
          fontVariant={FONT_VARIANTS.UPPERCASE}
          purpose={PURPOSE.ANCHOR}
          anchorLink={'mailto:hello@fabledose.com'}
        />
      </ButtonPositioner>
    </LegalBody>
  );
};
