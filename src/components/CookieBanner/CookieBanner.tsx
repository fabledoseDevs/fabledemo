import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import {
  BannerBody,
  ButtonPositioner,
  ContentContainer,
  TextField,
} from './CookieBanner.styled';
import { useTranslation } from './CookieBanner.translations';
import type { CookieBanner as CookieBannerType } from './CookieBanner.types';

export const CookieBanner: CookieBannerType = () => {
  const { setSettings } = useSettingsContext();
  const { headline, firstPart, secondPart } = useTranslation();
  const handleCookieConsent = (cookieConsent: boolean) => {
    setSettings(prevSettings => ({ ...prevSettings, cookieConsent }));
  };

  return (
    <BannerBody>
      <ContentContainer>
        <TextField>
          <h5>{headline}</h5>
          <p>
            {firstPart}
            <br />
            {secondPart}
          </p>
        </TextField>
        <ButtonPositioner>
          <Button
            label={'OK'}
            colorVariant={COLOR_VARIANTS.WHITE}
            fontVariant={FONT_VARIANTS.UPPERCASE}
            purpose={PURPOSE.FUNCTION_TRIGGER}
            onclickAction={() => handleCookieConsent(true)}
          />
        </ButtonPositioner>
      </ContentContainer>
    </BannerBody>
  );
};
