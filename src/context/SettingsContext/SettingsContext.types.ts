import type { Dispatch, SetStateAction } from 'react';

export enum BACKGROUND_VARIANTS {
  NONE = 'none',
  LIGHT = 'light',
  MEDIUM = 'medium',
  INTENSE = 'intense',
}

export enum FONT_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum FONT_COLOR {
  WHITE = 'white',
  WHITE_STROKED = 'white-stroked',
  BLACK = 'black',
  BLACK_STROKED = 'black-stroked',
  YELLOW = 'yellow',
  YELLOW_STROKED = 'yellow-stroked',
}

export interface SettingContextProps {
  cookieConsent: boolean;
  background: BACKGROUND_VARIANTS;
  fontSize: FONT_SIZE;
  fontColor: FONT_COLOR;
}

export type SettingsContext = {
  settings: SettingContextProps;
  setSettings: Dispatch<SetStateAction<SettingContextProps>>;
};

export type UseSettingsContext = () => SettingsContext;
