import type { Dispatch, SetStateAction } from 'react';

export enum TEXTBOX_THEME {
  AUTO = 'auto',
  TEXT_WHITE = 'text-white',
  TEXT_YELLOW = 'text-yellow',
  TEXT_BLACK = 'text-black',
  TEXTBOX_WHITE_STANDARD = 'textbox-white-standard',
  TEXTBOX_WHITE_INTENSE = 'textbox-white-intense',
  TEXTBOX_YELLOW_STANDARD = 'textbox-yellow-standard',
  TEXTBOX_YELLOW_INTENSE = 'textbox-yellow-intense',
}

export interface SettingContextProps {
  cookieConsent: boolean;
  fontSize: number;
  theme: TEXTBOX_THEME;
}

export type SettingsContext = {
  settings: SettingContextProps;
  setSettings: Dispatch<SetStateAction<SettingContextProps>>;
  removeSettingsCookie: () => void;
  cookiesOff: boolean;
  setCookiesOff: Dispatch<SetStateAction<boolean>>;
};

export type UseSettingsContext = () => SettingsContext;
