import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        box-sizing: border-box;;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.lato};
        scroll-behavior: smooth;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        background-color: #251e1e;
    }

    main {
        min-height: 100vh;
        max-width: 1440px;
        background: ${({ theme }) => theme.palette.background};
        background: ${({ theme }) => theme.palette.linearBackground};
    }

    h1, h2 {
        font-family: ${({ theme }) => theme.fonts.poltawskiNowy};
        font-weight: 500;
    }


    button {
        font-family: ${({ theme }) => theme.fonts.lato};
        font-size: 14px;
    }

    a {
        color: ${({ theme }) => theme.palette.primary};
        text-decoration: none;
    }
`;

export default GlobalStyle;
