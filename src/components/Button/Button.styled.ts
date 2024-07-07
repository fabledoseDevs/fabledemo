import Link from 'next/link';
import { css, styled } from 'styled-components';

import { COLOR_VARIANTS, FONT_VARIANTS } from './Button.types';

export const ButtonWrapper = styled.div<{
  bgcolorvariant: COLOR_VARIANTS;
  fontcapvariant: FONT_VARIANTS;
}>`
  button,
  a {
    text-transform: ${({ fontcapvariant }) =>
      fontcapvariant === FONT_VARIANTS.STANDARD ? 'none' : 'uppercase'};
    color: ${({ bgcolorvariant, theme }) =>
      bgcolorvariant === COLOR_VARIANTS.GREEN
        ? theme.palette.secondary
        : theme.palette.primary};
    background: ${({ bgcolorvariant, theme }) =>
      bgcolorvariant === COLOR_VARIANTS.GREEN
        ? theme.palette.green
        : theme.palette.secondary};
    &:hover,
    &:active {
      background: ${({ bgcolorvariant, theme }) =>
        bgcolorvariant === COLOR_VARIANTS.GREEN
          ? theme.palette.lightergreen
          : theme.palette.offwhite};
    }

    &:disabled {
      filter: grayscale(1);
      opacity: 0.75;
    }
  }
`;

const buttonStyle = css`
  border: none;
  padding: 10px 40px;
  border-radius: 28px;
  text-align: center;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
    padding: 15px 50px;
  }
`;

export const ButtonBody = styled.button`
  ${buttonStyle};
`;

export const LinkButtonBody = styled(Link)`
  ${buttonStyle};
`;
