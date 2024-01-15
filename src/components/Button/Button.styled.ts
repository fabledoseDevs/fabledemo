import { styled, css } from 'styled-components'
import { COLOR_VARIANTS, FONT_VARIANTS } from './Button.types';


export const ButtonWrapper = styled.div<{
  bgcolorvariant: COLOR_VARIANTS,
  fontcapvariant: FONT_VARIANTS
}>`
  button {
    text-transform: ${({fontcapvariant}) => fontcapvariant === FONT_VARIANTS.STANDARD ? 'none' : 'uppercase'};
    color: ${({bgcolorvariant, theme}) => 
      bgcolorvariant === COLOR_VARIANTS.GREEN ? theme.palette.secondary : theme.palette.primary
    };
    background: ${({bgcolorvariant, theme}) => 
      bgcolorvariant === COLOR_VARIANTS.GREEN ? theme.palette.green : theme.palette.secondary
    };
    &:active {
      background: ${({bgcolorvariant, theme}) => 
        bgcolorvariant === COLOR_VARIANTS.GREEN ? theme.palette.lightergreen : theme.palette.offwhite
      };
    }
  }
`;

export const ButtonBody = styled.button`
  border: none;
  width: auto;
  min-width: 200px;
  max-width: 240px;
  height: 56px;
  border-radius: 28px;
  text-align: center;
  cursor: pointer;
`;
