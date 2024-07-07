import LogoBlack from '@/img/logo/Fabledose_Logo_BK.svg';
import LogoGreen from '@/img/logo/Fabledose_Logo_GR.svg';
import LogoRed from '@/img/logo/Fabledose_Logo_RD.svg';
import LogoWhite from '@/img/logo/Fabledose_Logo_WH.svg';

import { LogoElement } from './Logo.styled';
import type {
  Logo as LogoType,
  LogoVariantSelector as LogoVariantSelectorType,
} from './Logo.types';
import { COLOUR_VARIANT } from './Logo.types';

const LogoVariantSelector: LogoVariantSelectorType = variant => {
  let activeVariant: string;

  switch (variant) {
    case COLOUR_VARIANT.GREEN:
      activeVariant = LogoGreen.src;
      break;
    case COLOUR_VARIANT.WHITE:
      activeVariant = LogoWhite.src;
      break;
    case COLOUR_VARIANT.BLACK:
      activeVariant = LogoBlack.src;
      break;
    case COLOUR_VARIANT.RED:
      activeVariant = LogoRed.src;
      break;
    default:
      activeVariant = LogoGreen.src;
  }

  return activeVariant;
};

export const Logo: LogoType = ({ colourVariant, logoWidth }) => {
  const selectedVariant = LogoVariantSelector(colourVariant);

  return (
    <>
      <LogoElement
        alt={'Fabledose'}
        aria-label={'Fabledose'}
        src={selectedVariant}
        width={logoWidth ? logoWidth : 200}
        height={40}
      />
    </>
  );
};
