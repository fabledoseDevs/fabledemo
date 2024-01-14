import type { ReactElement } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';

import type { Children } from '@/types/general';

import theme from './theme';

interface ThemeProviderProps {
  children: Children;
}

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => (
  <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
);
export default ThemeProvider;
