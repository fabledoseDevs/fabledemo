import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import React from 'react';
import { createContext, useState } from 'react';

import type {
  ScreenContext as ScreenContextType,
  ScreenContextProps,
  UseScreenContext as UseScreenContextType,
} from './ScreenContext.types';
import { ORIENTATION } from './ScreenContext.types';

const orientationGetter = () =>
  window.innerWidth > window.innerHeight
    ? ORIENTATION.LANDSCAPE
    : ORIENTATION.PORTRAIT;

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [screenData, setScreenData] = useState<ScreenContextProps>(() => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    orientation: orientationGetter(),
  }));

  useEffect(() => {
    const handleResize = () => {
      setScreenData(prevState => ({
        ...prevState,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        orientation: orientationGetter(),
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ screenData, setScreenData }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext: UseScreenContextType = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};
