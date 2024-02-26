import { css, styled } from 'styled-components';

import { FONT_COLOR } from '@/context/SettingsContext/SettingsContext.types';
import { FONT_SIZE } from '@/context/SettingsContext/SettingsContext.types';
import { BACKGROUND_VARIANTS } from '@/context/SettingsContext/SettingsContext.types';
import type { WildcardData } from '@/fables_library/library.types';
import { LAYOUT_VARIANTS } from '@/fables_library/library.types';

const flexCenterAlignment = css`
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
  z-index: ${({ theme }) => theme.zIndex.medium};

  p {
    width: auto;
    display: block;
  }

  ${({ layout }) => {
    switch (layout) {
      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_BOTTOM:
        return css`
          flex-direction: column;
          ${flexCenterAlignment};
          justify-content: flex-end;
        `;

      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_MIDDLE:
        return css`
          flex-direction: column;
          ${flexCenterAlignment};
          justify-content: center;
        `;

      case LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_TOP:
        return css`
          flex-direction: column;
          ${flexCenterAlignment};
          justify-content: flex-start;
        `;

      case LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT:
        return css`
          flex-direction: row;
          ${flexCenterAlignment};
          justify-content: flex-start;

          p {
            width: 50%;
          }
        `;

      case LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_RIGHT:
        return css`
          flex-direction: row;
          ${flexCenterAlignment};
          justify-content: flex-end;

          p {
            width: 50%;
          }
        `;

      case LAYOUT_VARIANTS.DIAGONAL_TLBR:
        return css`
          flex-direction: row;
          ${flexCenterAlignment};

          p:first-child {
            width: 45%;
            align-self: flex-start;
          }

          p:last-child {
            width: 45%;
            margin-left: 10%;
            align-self: flex-end;
          }
        `;

      case LAYOUT_VARIANTS.DIAGONAL_TRBL:
        return css`
          flex-direction: row;
          ${flexCenterAlignment};

          p:first-child {
            width: 45%;
            align-self: flex-end;
          }

          p:last-child {
            width: 45%;
            margin-left: 10%;
            align-self: flex-start;
          }
        `;

      case LAYOUT_VARIANTS.WILDCARD:
        return css`
          display: block;
        `;

      default:
        return css`
          flex-direction: row;
          ${flexCenterAlignment};
          justify-content: flex-end;
        `;
    }
  }};
`;

export const TextBox = styled.p<{
  background: BACKGROUND_VARIANTS;
  fontSize: FONT_SIZE;
  fontColor: FONT_COLOR;
  wildcard?: WildcardData;
}>`
  padding: 20px;
  line-height: 1.6;

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

  ${({ wildcard }) => {
    if (wildcard) {
      return css`
        position: absolute;
        overflow: clip;
        width: ${wildcard.width}% !important;
        ${wildcard.height && `height: ${wildcard.height}% !important;`}
        top: ${wildcard.top}% !important;
        left: ${wildcard.left}% !important;
      `;
    }
  }}
`;

export const FullscreenButton = styled.button`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 50px;
  height: 50px;
  bottom: 10px;
  left: 70px;
  background: none;
  border: 0;
  opacity: 0.25;
  transition: opacity 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  svg {
    color: #fff;
  }
`;
