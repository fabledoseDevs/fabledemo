import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}

export type ViewportName =
  | 'hdScreen'
  | 'desktop'
  | 'laptop'
  | 'tablet'
  | 'mobile';

export type StoryPageOptions =
  | 'textboxNone'
  | 'textboxStandard'
  | 'textboxIntense'
  | 'fontWhite'
  | 'fontBlack'
  | 'fontYellow';

export interface Palette {
  primary: string;
  secondary: string;
  gray: string;
  darkgray: string;
  offwhite: string;
  green: string;
  lightergreen: string;
  palegreen: string;
  accent: string;
  accentActive: string;
  background: string;
  modalBackground: string;
  linearBackground: string;
  wideShadow: string;
  closeShadow: string;
  innerShadow: string;
  storyPage: {
    [key in StoryPageOptions]: string;
  };
}

export interface Layers {
  standard: string;
  medium: string;
  high: string;
  veryTop: string;
  guard: string;
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
  zIndex: Layers;
}
