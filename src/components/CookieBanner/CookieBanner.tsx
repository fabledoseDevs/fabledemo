import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import {
  BannerBody,
  TextField,
} from '@/components/CookieBanner/CookieBanner.styled';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';

import type { CookieBanner as CookieBannerType } from './CookieBanner.types';

export const CookieBanner: CookieBannerType = () => {
  const { setSettings } = useSettingsContext();

  const handleCookieConsent = (cookieConsent: boolean) => {
    setSettings(prevSettings => ({ ...prevSettings, cookieConsent }));
  };

  return (
    <BannerBody>
      <TextField>
        <h5>
          Czy przyniosłeś ciasteczka, aby umilić sobie spotkanie z bajkami?
        </h5>
        <p>
          My przynieśliśmy swoje, ale te nie nadają się do jedzenia. Nasze
          ciasteczka to niewielkie pliki, które zapisujemy na Twoim urządzeniu,
          aby móc dostarczyć Ci usługę w najlepszej jakości.
          <br />
          Zapisujemy w nich informacje o ustawieniach aplikacji, jakie zostały
          przez ciebie wybrane. Jeżeli nie wyrażasz na to zgody, opuść tę
          stronę. Jesli chciałbyś dowiedzeć się więcej, skontaktuj się z nami.
        </p>
      </TextField>
      <Button
        label={'OK'}
        colorVariant={COLOR_VARIANTS.WHITE}
        fontVariant={FONT_VARIANTS.UPPERCASE}
        purpose={PURPOSE.FUNCTION_TRIGGER}
        onclickAction={() => handleCookieConsent(true)}
      />
    </BannerBody>
  );
};
