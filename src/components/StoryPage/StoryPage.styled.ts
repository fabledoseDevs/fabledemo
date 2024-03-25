import { css, styled } from 'styled-components';

import { TEXTBOX_THEME } from '@/context/SettingsContext/SettingsContext.types';
import type { WildcardData } from '@/fablesLibrary/library.types';
import { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

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
  textboxTheme: TEXTBOX_THEME;
  fontSize: number;
  wildcard?: WildcardData;
}>`
  padding: 20px;
  line-height: 1.6;

  //FONT SIZE
  font-size: ${({ fontSize }) => fontSize + 'px'};

  //THEME SELECTOR
  ${({ textboxTheme }) => {
    switch (textboxTheme) {
      case TEXTBOX_THEME.AUTO:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxNone};
        `;
      case TEXTBOX_THEME.TEXT_WHITE:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxNone};
        `;
      case TEXTBOX_THEME.TEXT_YELLOW:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontYellow};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxNone};
        `;
      case TEXTBOX_THEME.TEXT_BLACK:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontBlack};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxNone};
        `;

      case TEXTBOX_THEME.TEXTBOX_WHITE_STANDARD:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxStandard};
        `;
      case TEXTBOX_THEME.TEXTBOX_WHITE_INTENSE:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxIntense};
        `;
      case TEXTBOX_THEME.TEXTBOX_YELLOW_STANDARD:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontYellow};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxStandard};
        `;
      case TEXTBOX_THEME.TEXTBOX_YELLOW_INTENSE:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontYellow};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxIntense};
        `;

      default:
        return css`
          color: ${({ theme }) => theme.palette.storyPage.fontWhite};
          background-color: ${({ theme }) =>
            theme.palette.storyPage.textboxNone};
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
