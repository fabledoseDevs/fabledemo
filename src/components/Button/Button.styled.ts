import { styled, css } from 'styled-components'
import { COLOR_VARIANTS, FONT_VARIANTS } from './Button.types';

const fontBasic = css`
  font-family: Lato, sans-serif;
  font-size: 18px;
`

export const ButtonWrapper = styled.div<{
  bgcolorvariant: COLOR_VARIANTS,
  fontcapvariant: FONT_VARIANTS
}>`
  button {
    text-transform: ${({fontcapvariant}) => fontcapvariant === FONT_VARIANTS.STANDARD ? 'none' : 'uppercase'};
    color: ${({bgcolorvariant}) => bgcolorvariant === COLOR_VARIANTS.GREEN ? '#ffffff' : '#000000'};
    background: ${({bgcolorvariant}) => bgcolorvariant === COLOR_VARIANTS.GREEN ? '#6C7716' : '#fefefe'};
  
    &:active {
      background: ${({bgcolorvariant}) => bgcolorvariant === COLOR_VARIANTS.GREEN ? '#7E8B1A' : '#eeeeee'};
    }
  }
`;

export const Anchor = styled.a`
  ${fontBasic};
`;

export const ButtonBody = styled.button`
  ${fontBasic};
  border: none;
  width: auto;
  min-width: 200px;
  max-width: 240px;
  height: 56px;
  border-radius: 28px;
  text-align: center;
  cursor: pointer;
`;
