import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { CookieBannerTranslations, useTranslation } from '@/translations';

import {
  BannerBody,
  ButtonPositioner,
  ContentContainer,
  CookieBannerButton,
  TextField,
} from './CookieBanner.styled';
import type { CookieBanner as CookieBannerType } from './CookieBanner.types';

export const CookieBanner: CookieBannerType = ({ policyModalHandler }) => {
  const { setSettings } = useSettingsContext();
  const { headline, firstPart, secondPart, consentBnt, moreInfoBtn } =
    useTranslation(CookieBannerTranslations);
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
          <CookieBannerButton
            variant={'green'}
            onClick={() => handleCookieConsent(true)}
          >
            {consentBnt}
          </CookieBannerButton>
          <CookieBannerButton
            variant={'white'}
            onClick={() => policyModalHandler(true)}
          >
            {moreInfoBtn}
          </CookieBannerButton>
        </ButtonPositioner>
      </ContentContainer>
    </BannerBody>
  );
};
