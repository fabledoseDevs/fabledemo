import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import type {
  SettingContextProps,
  SettingsContext as SettingsContextType,
  UseSettingsContext as UseSettingsContextType,
} from './SettingsContext.types';
import { TEXTBOX_THEME } from './SettingsContext.types';

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(['settings']);
  const storedSettings = cookies.settings;

  const [settings, setSettings] = useState<SettingContextProps>(
    () =>
      storedSettings || {
        cookieConsent: false,
        theme: TEXTBOX_THEME.TEXTBOX_YELLOW_INTENSE,
        fontSize: 22,
      },
  );

  useEffect(() => {
    setCookie('settings', settings, { maxAge: 2592000 });
  }, [settings, setCookie]);

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
