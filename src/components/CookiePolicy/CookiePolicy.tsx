import { Warning } from '@styled-icons/entypo/Warning';
import { Cookies as CookieIcon } from '@styled-icons/fluentui-system-regular/Cookies';
import { Trash } from '@styled-icons/ionicons-outline/Trash';
import parse from 'html-react-parser';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { useTutorialContext } from '@/context/TutorialContext/TutorialContext.provider';
import { CookiePolicyTranslations, useTranslation } from '@/translations';

import {
  Cookie,
  CookiePolicyBody,
  CookiesDelete,
  CookiesList,
  CookieText,
  Explanation,
  Headline,
} from './CookiePolicy.styled';
import type { CookiePolicy as CookiePolicyType } from './CookiePolicy.types';

export const CookiePolicy: CookiePolicyType = () => {
  const { cookiesOff, setCookiesOff, removeSettingsCookie } =
    useSettingsContext();
  const { removeLanguageCookie } = useLanguageContext();
  const { removeTutorialCookie } = useTutorialContext();

  const {
    policyTitle,
    intro,
    cookieOneTitle,
    cookieOneExplanation,
    cookieTwoTitle,
    cookieTwoExplanation,
    cookieThreeTitle,
    cookieThreeExplanation,
    outro,
    deleteParagraph,
    deleteButtonAfter,
    deleteButtonBefore,
  } = useTranslation(CookiePolicyTranslations);

  const deleteCookies = () => {
    removeLanguageCookie();
    removeSettingsCookie();
    removeTutorialCookie();
    setCookiesOff(true);
  };

  return (
    <CookiePolicyBody>
      <Headline>{policyTitle}</Headline>
      <Explanation>{parse(intro)}</Explanation>
      <CookiesList>
        <Cookie>
          <CookieIcon />
          <CookieText>
            <h3>{cookieOneTitle}</h3>
            {cookieOneExplanation.map(paragraphContent => (
              <p key={paragraphContent.substring(0, 10)}>{paragraphContent}</p>
            ))}
          </CookieText>
        </Cookie>
        <Cookie>
          <CookieIcon />
          <CookieText>
            <h3>{cookieTwoTitle}</h3>
            {cookieTwoExplanation.map(paragraphContent => (
              <p key={paragraphContent.substring(0, 10)}>{paragraphContent}</p>
            ))}
          </CookieText>
        </Cookie>
        <Cookie>
          <CookieIcon />
          <CookieText>
            <h3>{cookieThreeTitle}</h3>
            {cookieThreeExplanation.map(paragraphContent => (
              <p key={paragraphContent.substring(0, 10)}>{paragraphContent}</p>
            ))}
          </CookieText>
        </Cookie>
      </CookiesList>
      <Explanation>{outro}</Explanation>
      <CookiesDelete>
        <p>{parse(deleteParagraph)}</p>
        {cookiesOff ? (
          <button onClick={deleteCookies} disabled={true}>
            <Warning />
            <span>{deleteButtonAfter}</span>
          </button>
        ) : (
          <button onClick={deleteCookies}>
            <Trash />
            <span>{deleteButtonBefore}</span>
          </button>
        )}
      </CookiesDelete>
    </CookiePolicyBody>
  );
};
