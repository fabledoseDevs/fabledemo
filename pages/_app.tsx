import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { ScreenProvider } from '@/context/ScreenContext/ScreenContext.provider';
import { SettingsProvider } from '@/context/SettingsContext/SettingsContext.provider';
import { TutorialProvider } from '@/context/TutorialContext/TutorialContext.provider';
import { GlobalStyle, ThemeProvider } from '@/styles';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <ScreenProvider>
      <SettingsProvider>
        <TutorialProvider>
          <GlobalStyle theme={theme} />
          <Component {...pageProps} />
        </TutorialProvider>
      </SettingsProvider>
    </ScreenProvider>
  </ThemeProvider>
);

export default App;
