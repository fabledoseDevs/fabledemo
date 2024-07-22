import type { ReactElement } from 'react';

export interface RotationGuardTT {
  mainMessage: string;
  detailedMessage: string[];
}

export interface Translation {
  en: RotationGuardTT;
  pl: RotationGuardTT;
}

export type UseTranslation = () => RotationGuardTT;
export type RotationGuard = () => ReactElement;
