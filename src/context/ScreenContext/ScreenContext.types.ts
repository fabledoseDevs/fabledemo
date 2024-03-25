import type { Dispatch, SetStateAction } from 'react';

export enum ORIENTATION {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

export interface ScreenContextProps {
  screenWidth: number;
  screenHeight: number;
  orientation: ORIENTATION;
}

export type ScreenContext = {
  screenData: ScreenContextProps;
  setScreenData: Dispatch<SetStateAction<ScreenContextProps>>;
};

export type UseScreenContext = () => ScreenContext;
