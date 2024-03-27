import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { ScreenProvider } from '@/context/ScreenContext/ScreenContext.provider';
import { SettingsProvider } from '@/context/SettingsContext/SettingsContext.provider';
import { GlobalStyle, ThemeProvider } from '@/styles';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <ScreenProvider>
      <SettingsProvider>
        <GlobalStyle theme={theme} />
        <Component {...pageProps} />
      </SettingsProvider>
    </ScreenProvider>
  </ThemeProvider>
);

export default App;
