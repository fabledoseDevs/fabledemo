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
    offwhite: '#eee',
    green: '#6C7716',
    lightergreen: '#7E8B1A',
    accent: '#DF4F4A',
    background: '#FAF3D3FF',
    linearBackground: 'linear-gradient(55deg, #FAF3D3 0%, #FFF 100%)',
  },
  maxWidth: `${breakpoints.maxWidth}px`,
  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  fonts: {
    poltawskiNowy: "Poltawski Nowy, serif",
    lato: "Lato, sans-serif",
  },
};

export default theme;
