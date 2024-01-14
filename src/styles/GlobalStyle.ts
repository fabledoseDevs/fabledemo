import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.lato};
  }
  
  h1 {
    font-family: ${({ theme }) => theme.fonts.poltawskiNowy};
    font-weight: 500;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 18px;
  }
`;

export default GlobalStyle;
