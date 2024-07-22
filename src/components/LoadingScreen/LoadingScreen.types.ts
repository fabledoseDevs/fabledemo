import type { ReactElement } from 'react';

export interface LoadingScreenTT {
  label: string;
  alt: string;
}

export interface Translation {
  en: LoadingScreenTT;
  pl: LoadingScreenTT;
}

export interface LoadingScreenProps {
  fadeOutReady: boolean;
  bgColor: string;
}

export type UseTranslation = () => LoadingScreenTT;
export type LoadingScreen = (props: LoadingScreenProps) => ReactElement;
