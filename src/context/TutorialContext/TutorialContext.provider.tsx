import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import type {
  TutorialContext as TutorialContextType,
  UseTutorialContext as UseTutorialContextType,
} from './TutorialContext.types';

const TutorialContext = createContext<TutorialContextType | undefined>(
  undefined,
);

export const TutorialProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['tutorial']);
  const [lockCookie, setLockCookie] = useState<boolean>(false);
  const currentTutorialState = cookies.tutorial;

  const [tutorialOff, setTutorialOff] = useState<boolean>(
    currentTutorialState || false,
  );

  useEffect(() => {
    !lockCookie && setCookie('tutorial', tutorialOff, { maxAge: 604800 });
  }, [tutorialOff]);

  const removeTutorialCookie = () => {
    setLockCookie(true);
    removeCookie('tutorial');
  };

  return (
    <TutorialContext.Provider
      value={{ tutorialOff, setTutorialOff, removeTutorialCookie }}
    >
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorialContext: UseTutorialContextType = () => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error(
      'useTutorialContext must be used within a SettingsProvider',
    );
  }
  return context;
};
