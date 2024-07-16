import type { ReactElement } from 'react';

export interface LoadingScreenProps {
  fadeOutReady: boolean;
  loadingLabel: string;
  bgColor: string;
}

export type LoadingScreen = (props: LoadingScreenProps) => ReactElement;
