import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { SettingsProvider } from '@/context/SettingsContext/SettingsContext.provider';
import { GlobalStyle, ThemeProvider } from '@/styles';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <GlobalStyle theme={theme} />
    <SettingsProvider>
      <Component {...pageProps} />
    </SettingsProvider>
  </ThemeProvider>
);

export default App;
