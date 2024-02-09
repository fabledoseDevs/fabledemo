import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}

export type ViewportName = 'desktop' | 'laptop' | 'tablet' | 'mobile';

export interface Palette {
  primary: string;
  secondary: string;
  offwhite: string;
  green: string;
  lightergreen: string;
  accent: string;
  background: string;
  linearBackground: string;
  wideShadow: string;
  closeShadow: string;
}

export interface Theme {
  palette: Palette;
  maxWidth: string;
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    poltawskiNowy: string;
    lato: string;
  };
}
