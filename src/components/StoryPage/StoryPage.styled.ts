import { css, styled } from 'styled-components';

import { LAYOUT_VARIANTS } from '@/fables_library/library.types';

import { FONT_COLOR } from './StoryPage.types';
import { FONT_SIZE } from './StoryPage.types';
import { BACKGROUND_VARIANTS } from './StoryPage.types';

const FlexCenterAlignment = css`
  align-items: center;
  align-content: center;
`;

export const PageBody = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-color: #184e18;
  box-sizing: border-box;
  overflow: clip;
`;

export const TextContent = styled.div<{ layout: LAYOUT_VARIANTS }>`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  padding: 30px;
  z-index: 2;

  p:first-child {
    width: auto;
    display: block;
  }

  ${({ layout }) => {
    switch (layout) {
      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_BOTTOM:
        return css`
          flex-direction: column;
          ${FlexCenterAlignment};
          justify-content: flex-end;
        `;

      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_MIDDLE:
        return css`
          flex-direction: column;
          ${FlexCenterAlignment};
          justify-content: center;
        `;

      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_TOP:
        return css`
          flex-direction: column;
          ${FlexCenterAlignment};
          justify-content: flex-start;
        `;

      case LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT:
        return css`
          flex-direction: row;
          ${FlexCenterAlignment};
          justify-content: flex-start;

          p:last-child {
            width: 45%;
          }
        `;

      case LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_RIGHT:
        return css`
          flex-direction: row;
          ${FlexCenterAlignment};
          justify-content: flex-end;

          p:last-child {
            width: 45%;
          }
        `;

      default:
        return css`
          flex-direction: row;
          ${FlexCenterAlignment};
          justify-content: flex-end;
        `;
    }
  }};
`;

export const TextBox = styled.p<{
  background: BACKGROUND_VARIANTS;
  fontSize: FONT_SIZE;
  fontColor: FONT_COLOR;
}>`
  padding: 20px;

  //BACKGROUND SELECTOR
  ${({ background }) => {
    switch (background) {
      case BACKGROUND_VARIANTS.NONE:
        return css`
          background-color: ${({ theme }) => theme.palette.storyPage.textbox0};
        `;
      case BACKGROUND_VARIANTS.LIGHT:
        return css`
          background-color: ${({ theme }) => theme.palette.storyPage.textbox40};
        `;
      case BACKGROUND_VARIANTS.MEDIUM:
        return css`
          background-color: ${({ theme }) => theme.palette.storyPage.textbox60};
        `;
      case BACKGROUND_VARIANTS.INTENSE:
        return css`
          background-color: ${({ theme }) => theme.palette.storyPage.textbox85};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.palette.storyPage.textbox0};
        `;
    }
  }};

  //FONT SIZE SELECTOR
  ${({ fontSize }) => {
    switch (fontSize) {
      case FONT_SIZE.SMALL:
        return css`
          font-size: ${({ theme }) => theme.palette.storyPage.fontSmall};
        `;
      case FONT_SIZE.MEDIUM:
        return css`
          font-size: ${({ theme }) => theme.palette.storyPage.fontMedium};
        `;
      case FONT_SIZE.LARGE:
        return css`
          font-size: ${({ theme }) => theme.palette.storyPage.fontLarge};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.palette.storyPage.fontMedium};
        `;
    }
  }};

  //FONT COLOR SELECTOR
  ${({ fontColor }) => {
    switch (fontColor) {
      case FONT_COLOR.WHITE:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
        `;
      case FONT_COLOR.WHITE_STROKED:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          font-weight: bold;
          -webkit-text-stroke: ${({ theme }) =>
              theme.palette.storyPage.fontBlack}
            1px;
        `;
      case FONT_COLOR.YELLOW:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontYellow};
        `;
      case FONT_COLOR.YELLOW_STROKED:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontYellow};
          font-weight: bold;
          -webkit-text-stroke: ${({ theme }) =>
              theme.palette.storyPage.fontBlack}
            1px;
        `;
      case FONT_COLOR.BLACK:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontBlack};
        `;
      case FONT_COLOR.BLACK_STROKED:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontBlack};
          font-weight: bold;
          -webkit-text-stroke: ${({ theme }) =>
              theme.palette.storyPage.fontWhite}
            1px;
        `;
      default:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          font-weight: bold;
          -webkit-text-stroke: ${({ theme }) =>
              theme.palette.storyPage.fontBlack}
            1px;
        `;
    }
  }};
`;

export const Toolbox = styled.div<{ isVisible: boolean }>``;
