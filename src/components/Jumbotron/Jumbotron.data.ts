import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';

import type { JumbotronProps } from './Jumbotron.types';

export const jumbotronData: JumbotronProps = {
  redLineText: 'book',
  button: {
    colorVariant: COLOR_VARIANTS.WHITE,
    anchorLink: '/',
    fontVariant: FONT_VARIANTS.UPPERCASE,
    label: 'read more',
    purpose: PURPOSE.ANCHOR,
  },
  header: {
    before: "children's",
    after: 'corner',
  },
  subtitle: 'welcome to',
};
