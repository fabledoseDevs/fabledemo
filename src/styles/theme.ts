import type { Theme } from './types';

export const breakpoints = {
  maxWidth: 1600,
  highDef: 1920,
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobile: 380,
};

const theme: Theme = {
  palette: {
    primary: '#000',
    secondary: '#fff',
    gray: '#bebebe',
    darkgray: '#5b5b5b',
    offwhite: '#eee',
    green: '#6C7716',
    lightergreen: '#7E8B1A',
    palegreen: '#898d63',
    accent: '#cc2c28',
    accentActive: '#DC4E49',
    background: '#FAF3D3',
    linearBackground: 'linear-gradient(55deg, #FAF3D3 0%, #FFF 100%)',
    modalBackground: 'rgba(0, 0, 0, 0.7)',
    wideShadow: 'rgba(0, 0, 0, 0.45) 0 25px 20px -20px',
    closeShadow: 'rgba(0, 0, 0, 0.45) 0 15px 10px -10px;',
    innerShadow:
      'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;',
    storyPage: {
      textboxNone: 'none',
      textboxStandard: 'rgba(26,26,26,0.45)',
      textboxIntense: 'rgba(26,26,26,0.65)',
      fontWhite: '#efefef',
      fontBlack: '#111111',
      fontYellow: '#ffe54f',
    },
  },
  maxWidth: `${breakpoints.maxWidth}px`,
  media: {
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    laptop: `screen and (min-width: ${breakpoints.laptop}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    hdScreen: `screen and (min-width: ${breakpoints.highDef}px)`,
  },
  fonts: {
    poltawskiNowy: 'Poltawski',
    lato: 'Lato',
  },
  zIndex: {
    standard: '1',
    medium: '5',
    high: '10',
    veryTop: '15',
    guard: '20',
  },
};

export default theme;
