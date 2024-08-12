import { track } from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';

import ModalWindow from '@/components/ModalWindow';
import { TextBox } from '@/components/StoryPage/StoryPage.styled';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { TEXTBOX_THEME } from '@/context/SettingsContext/SettingsContext.types';
import { breakpoints } from '@/styles/theme';
import { ToolboxTranslations, useTranslation } from '@/translations';

import {
  LabelWrapper,
  Preview,
  SettingButton,
  SettingElementWrapper,
  SettingName,
  SettingRangeWrapper,
  Settings,
  SettingsGroup,
  SettingWrapper,
} from './Toolbox.styled';
import type { Toolbox as ToolboxType } from './Toolbox.types';

export const Toolbox: ToolboxType = ({ exitFunction }) => {
  const { settings, setSettings } = useSettingsContext();
  const [fontRangeMinMax, setFontRangeMinMax] = useState<{
    min: number;
    max: number;
  }>({ min: 0.8, max: 1.4 });
  const {
    textTheme,
    default: textDefault,
    whiteText,
    yellowText,
    blackText,
    whiteTextLightShadow,
    whiteTextStrongShadow,
    yellowTextLightShadow,
    yellowTextStrongShadow,
    fontSize,
    small,
    medium,
    large,
    previewText,
  } = useTranslation(ToolboxTranslations);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let minFontSize = 0;
      let maxFontSize = 0;

      switch (true) {
        case screenWidth <= breakpoints.laptop:
          minFontSize = 0.8;
          maxFontSize = 1.4;
          break;
        case screenWidth <= breakpoints.desktop:
          minFontSize = 1;
          maxFontSize = 1.6;
          break;
        case screenWidth <= breakpoints.highDef:
          minFontSize = 1.2;
          maxFontSize = 2;
          break;
        default:
          minFontSize = 1.5;
          maxFontSize = 2.5;
      }

      setFontRangeMinMax({ min: minFontSize, max: maxFontSize });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleThemeChange = (theme: TEXTBOX_THEME) => {
    track(`Theme set to: ${theme}`);
    setSettings(prevSettings => ({ ...prevSettings, theme }));
  };

  const handleFontSizeChange = (fontSize: number) => {
    setSettings(prevSettings => ({ ...prevSettings, fontSize }));
  };

  const fontRange = useRef<HTMLInputElement>(null);

  return (
    <ModalWindow exitFunction={exitFunction}>
      <Settings>
        <SettingName>{textTheme}</SettingName>
        <SettingsGroup>
          <SettingWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.AUTO}
                onChange={() => handleThemeChange(TEXTBOX_THEME.AUTO)}
              />
              <SettingButton>{textDefault}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_WHITE}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_WHITE)}
              />
              <SettingButton>{whiteText}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_YELLOW}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_YELLOW)}
              />
              <SettingButton>{yellowText}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_BLACK}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_BLACK)}
              />
              <SettingButton>{blackText}</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
          <SettingWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={
                  settings.theme === TEXTBOX_THEME.TEXTBOX_WHITE_STANDARD
                }
                onChange={() =>
                  handleThemeChange(TEXTBOX_THEME.TEXTBOX_WHITE_STANDARD)
                }
              />
              <SettingButton>{whiteTextLightShadow}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXTBOX_WHITE_INTENSE}
                onChange={() =>
                  handleThemeChange(TEXTBOX_THEME.TEXTBOX_WHITE_INTENSE)
                }
              />
              <SettingButton>{whiteTextStrongShadow}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={
                  settings.theme === TEXTBOX_THEME.TEXTBOX_YELLOW_STANDARD
                }
                onChange={() =>
                  handleThemeChange(TEXTBOX_THEME.TEXTBOX_YELLOW_STANDARD)
                }
              />
              <SettingButton>{yellowTextLightShadow}</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={
                  settings.theme === TEXTBOX_THEME.TEXTBOX_YELLOW_INTENSE
                }
                onChange={() =>
                  handleThemeChange(TEXTBOX_THEME.TEXTBOX_YELLOW_INTENSE)
                }
              />
              <SettingButton>{yellowTextStrongShadow}</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
        </SettingsGroup>
        <SettingName>{fontSize}</SettingName>
        <SettingRangeWrapper>
          <input
            ref={fontRange}
            type="range"
            min={fontRangeMinMax.min}
            max={fontRangeMinMax.max}
            step="0.01"
            value={settings.fontSize}
            onChange={() =>
              fontRange.current &&
              handleFontSizeChange(Number(fontRange.current.value))
            }
          />
          <LabelWrapper>
            <span>{small}</span>
            <span>{medium}</span>
            <span>{large}</span>
          </LabelWrapper>
        </SettingRangeWrapper>
      </Settings>
      <Preview>
        <TextBox textboxTheme={settings.theme} fontSize={settings.fontSize}>
          <p>{previewText}</p>
        </TextBox>
      </Preview>
    </ModalWindow>
  );
};
