import type { Theme } from './types';

export const breakpoints = {
  maxWidth: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const theme: Theme = {
  palette: {
    primary: '#000',
    secondary: '#fff',
    green: '#6C7716',
    accent: '#DF4F4A',
    linearBackground: 'linear-gradient(32deg, #FAF3D3 0%, #FFF 68%)',
  },
  maxWidth: `${breakpoints.maxWidth}px`,
  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  fonts: {
    poltawskiNowy: 'Poltawski Nowy',
    lato: 'Lato',
  },
};

export default theme;
