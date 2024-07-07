import type { ReactElement } from 'react';

export enum COLOUR_VARIANT {
  GREEN = 'green',
  WHITE = 'white',
  BLACK = 'black',
  RED = 'red',
}

export interface LogoProps {
  colourVariant: COLOUR_VARIANT;
  logoWidth?: number;
}

export type Logo = (props: LogoProps) => ReactElement;
export type LogoVariantSelector = (variant: COLOUR_VARIANT) => string;
