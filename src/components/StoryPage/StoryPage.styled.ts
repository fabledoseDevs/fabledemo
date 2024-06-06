import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import { css, keyframes, styled } from 'styled-components';

import { TEXTBOX_THEME } from '@/context/SettingsContext/SettingsContext.types';
import { LAYOUT_VARIANTS } from '@/fablesLibrary/library.types';

const fullWidthTextContent = css`
  width: 100%;
  height: fit-content;
`;

const standardTextContent = css`
  width: 57%;
  height: fit-content;

  @media ${({ theme }) => theme.media.tablet} {
    width: 52%;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 47%;
  }
`;

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;

export const PageBody = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  box-sizing: border-box;
  overflow: clip;

  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    object-fit: cover;
  }
`;

export const StaticPicture = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
`;

export const AnimatedPicture = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndex.standard};

  video {
    object-fit: cover;
  }
`;

export const TextContent = styled.div<{ layout: LAYOUT_VARIANTS }>`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 10px 10px 30px;
  animation: 3s ${fadeIn} ease;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.media.tablet} {
    padding: 12px 12px 60px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 30px 30px 65px;
  }

  ${({ layout }) => {
    switch (layout) {
      case LAYOUT_VARIANTS.WIDE_TEXT_TOP:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: center;

          div.textBox {
            ${fullWidthTextContent};
          }
        `;
      case LAYOUT_VARIANTS.WIDE_TEXT_MIDDLE:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          text-align: center;

          div.textBox {
            ${fullWidthTextContent};
          }
        `;
      case LAYOUT_VARIANTS.WIDE_TEXT_BOTTOM:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
          text-align: center;

          div.textBox {
            ${fullWidthTextContent};
          }
        `;

      case LAYOUT_VARIANTS.NARROW_TEXT_TOP_LEFT:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.NARROW_TEXT_MIDDLE_LEFT:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          text-align: left;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_LEFT:
        return css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
          text-align: left;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.NARROW_TEXT_TOP_RIGHT:
        return css`
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-start;
          text-align: right;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.NARROW_TEXT_MIDDLE_RIGHT:
        return css`
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          text-align: right;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_RIGHT:
        return css`
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;

          div.textBox {
            ${standardTextContent};
          }
        `;
      case LAYOUT_VARIANTS.FINAL_SLIDE:
        return css`
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: center;

          div.textBox {
            ${standardTextContent};
          }
        `;
      default:
        return css``;
    }
  }};
`;

export const TextBox = styled.div<{
  textboxTheme: TEXTBOX_THEME;
  fontSize: number;
}>`
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

  p {
    width: 100%;
    line-height: 1.5;

    //FONT SIZE
    font-size: ${({ fontSize }) => 10 * fontSize + 'px'};
    padding: 0.8%;

    @media ${({ theme }) => theme.media.tablet} {
      font-size: ${({ fontSize }) => 12 * fontSize + 'px'};
      padding: 1%;
    }

    @media ${({ theme }) => theme.media.laptop} {
      font-size: ${({ fontSize }) => 14 * fontSize + 'px'};
      padding: 1.5%;
    }

    @media ${({ theme }) => theme.media.desktop} {
      font-size: ${({ fontSize }) => 16 * fontSize + 'px'};
      padding: 2%;
    }
  }
`;

export const FinalSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: -64px auto 0 auto;
  width: 70%;
  height: auto;
  padding: 24px;
  color: white;

  @media ${({ theme }) => theme.media.tablet} {
    width: 40%;
  }

  h2 {
    width: 100%;
    height: auto;
    line-height: 44px;
    margin: 24px auto;
    text-transform: uppercase;

    @media ${({ theme }) => theme.media.tablet} {
      line-height: 64px;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;

  a,
  button {
    color: white;
    height: 40px;
    line-height: 24px;
    opacity: 0.5;
    transition: opacity 0.5s;
    background: none;
    border: 0;
    cursor: pointer;

    &:hover,
    &:active {
      opacity: 1;
    }

    svg {
      width: 60px;
      height: 60px;
    }
  }

  span {
    display: block;
    font-size: 18px;
  }
`;
