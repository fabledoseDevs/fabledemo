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
        background: rgb(255, 254, 244);
        background: linear-gradient(
                45deg,
                rgba(255, 254, 244, 1) 0%,
                rgba(253, 250, 227, 1) 100%
        );
        
    }

    main {
        min-height: 100vh;
        width: 100%;
        background: ${({ theme }) => theme.palette.background};
        background: ${({ theme }) => theme.palette.linearBackground};
        -webkit-box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.2);

        @media ${({ theme }) => theme.media.hdScreen} {
           width: 1920px;
        },
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
