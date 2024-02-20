import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}

export type ViewportName = 'desktop' | 'laptop' | 'tablet' | 'mobile';

export type StoryPageOptions =
  | 'textbox0'
  | 'textbox40'
  | 'textbox60'
  | 'textbox85'
  | 'fontSmall'
  | 'fontMedium'
  | 'fontLarge'
  | 'fontWhite'
  | 'fontBlack'
  | 'fontYellow';

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
  storyPage: {
    [key in StoryPageOptions]: string;
  };
}

export interface Layers {
  standard: string;
  medium: string;
  high: string;
  veryTop: string;
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
