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
  const [cookies, setCookie, removeCookie] = useCookies(['settings']);
  const storedSettings = cookies.settings;
  const [lockCookie, setLockCookie] = useState<boolean>(false);
  const [cookiesOff, setCookiesOff] = useState<boolean>(false);

  const [settings, setSettings] = useState<SettingContextProps>(
    () =>
      storedSettings || {
        cookieConsent: false,
        theme: TEXTBOX_THEME.TEXTBOX_WHITE_STANDARD,
        fontSize: 1.4,
      },
  );

  useEffect(() => {
    !lockCookie && setCookie('settings', settings, { maxAge: 604800 });
  }, [settings]);

  useEffect(() => {
    const handleFontSizeGuard = () => {
      const screenWidth = window.innerWidth;
      let newFontSize = settings.fontSize;

      switch (true) {
        case screenWidth <= breakpoints.laptop && settings.fontSize > 1.4:
          newFontSize = 1.4;
          break;
        case screenWidth <= breakpoints.desktop && settings.fontSize > 1.6:
          newFontSize = 1.6;
          break;
        case screenWidth <= breakpoints.highDef && settings.fontSize > 2:
          newFontSize = 2;
          break;
        default:
          break;
      }

      if (newFontSize !== settings.fontSize) {
        setSettings(prevSettings => ({
          ...prevSettings,
          fontSize: newFontSize,
        }));
      }
    };

    handleFontSizeGuard();

    window.addEventListener('resize', handleFontSizeGuard);
    return () => window.removeEventListener('resize', handleFontSizeGuard);
  }, [settings]);

  const removeSettingsCookie = () => {
    setLockCookie(true);
    removeCookie('settings');
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        removeSettingsCookie,
        cookiesOff,
        setCookiesOff,
      }}
    >
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
