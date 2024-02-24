import type { ReactNode } from 'react';
import { useContext } from 'react';
import React from 'react';
import { createContext, useState } from 'react';

import type {
  SettingContextProps,
  SettingsContext as SettingsContextType,
  UseSettingsContext as UseSettingsContextType,
} from './SettingsContext.types';
import {
  BACKGROUND_VARIANTS,
  FONT_COLOR,
  FONT_SIZE,
} from './SettingsContext.types';

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<SettingContextProps>({
    background: BACKGROUND_VARIANTS.LIGHT,
    fontSize: FONT_SIZE.LARGE,
    fontColor: FONT_COLOR.YELLOW_STROKED,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext: UseSettingsContextType = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      'useSettingsContext must be used within a SettingsProvider',
    );
  }
  return context;
};
