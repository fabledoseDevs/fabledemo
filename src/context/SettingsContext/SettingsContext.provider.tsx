import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { breakpoints } from '@/styles/theme';

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
        theme: TEXTBOX_THEME.AUTO,
        fontSize: 1,
      },
  );

  useEffect(() => {
    setCookie('settings', settings, { maxAge: 2592000 });
  }, [settings]);

  useEffect(() => {
    const handleFontSizeGuard = () => {
      const screenWidth = window.innerWidth;
      if (settings.fontSize > 1) {
        if (screenWidth <= breakpoints.laptop && settings.fontSize > 1.4) {
          setSettings(prevSettings => ({ ...prevSettings, fontSize: 1.4 }));
        } else if (
          screenWidth <= breakpoints.desktop &&
          settings.fontSize > 1.6
        ) {
          setSettings(prevSettings => ({ ...prevSettings, fontSize: 1.6 }));
        } else if (
          screenWidth <= breakpoints.highDef &&
          settings.fontSize > 2
        ) {
          setSettings(prevSettings => ({ ...prevSettings, fontSize: 2 }));
        }
      }
    };

    handleFontSizeGuard();

    window.addEventListener('resize', handleFontSizeGuard);
    return () => window.removeEventListener('resize', handleFontSizeGuard);
  }, [settings]);

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
