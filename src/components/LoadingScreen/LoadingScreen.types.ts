import type { ReactElement } from 'react';

export interface LoadingScreenProps {
  fadeOutReady: boolean;
  bgColor: string;
}

export type LoadingScreen = (props: LoadingScreenProps) => ReactElement;
