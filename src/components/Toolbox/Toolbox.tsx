import { useRef } from 'react';

import ModalWindow from '@/components/ModalWindow';
import { TextBox } from '@/components/StoryPage/StoryPage.styled';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import { TEXTBOX_THEME } from '@/context/SettingsContext/SettingsContext.types';

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

  const handleThemeChange = (theme: TEXTBOX_THEME) => {
    setSettings(prevSettings => ({ ...prevSettings, theme }));
  };

  const handleFontSizeChange = (fontSize: number) => {
    setSettings(prevSettings => ({ ...prevSettings, fontSize }));
  };

  const fontRange = useRef<HTMLInputElement>(null);

  return (
    <ModalWindow exitFunction={exitFunction}>
      <Settings>
        <SettingName>Wygląd tekstu</SettingName>
        <SettingsGroup>
          <SettingWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.AUTO}
                onChange={() => handleThemeChange(TEXTBOX_THEME.AUTO)}
              />
              <SettingButton>Domyślne</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_WHITE}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_WHITE)}
              />
              <SettingButton>Biały Tekst</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_YELLOW}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_YELLOW)}
              />
              <SettingButton>Żółty Tekst</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.theme === TEXTBOX_THEME.TEXT_BLACK}
                onChange={() => handleThemeChange(TEXTBOX_THEME.TEXT_BLACK)}
              />
              <SettingButton>Czarny Tekst</SettingButton>
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
              <SettingButton>Biały Tekst / Delikatny Cień</SettingButton>
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
              <SettingButton>Biały Tekst / Intensywny Cień</SettingButton>
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
              <SettingButton>Żółty Tekst / Delikatny Cień</SettingButton>
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
              <SettingButton>Żółty Tekst / Intensywny Cień</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
        </SettingsGroup>
        <SettingName>Wielkość czcionki </SettingName>
        <SettingRangeWrapper>
          <input
            ref={fontRange}
            type="range"
            min="0.8"
            max="2"
            step="0.1"
            value={settings.fontSize}
            onChange={() =>
              fontRange.current &&
              handleFontSizeChange(Number(fontRange.current.value))
            }
          />
          <LabelWrapper>
            <span>Mała</span>
            <span>Średnia</span>
            <span>Duża</span>
          </LabelWrapper>
        </SettingRangeWrapper>
      </Settings>
      <Preview>
        <TextBox textboxTheme={settings.theme} fontSize={settings.fontSize}>
          Dawno temu, w odległej krainie, otoczonej mrocznymi lasami i
          malowniczymi górami, żyła piękna królewna o imieniu Śnieżka. Jej skóra
          była biała jak śnieg, a włosy czarne jak atrament. Jednak szczęśliwe
          życie Śnieżki było zagrożone przez kaprys jej złej macochy, która
          ponad wszystko, pragnęła być uznawaną za najpięknijeszą...
        </TextBox>
      </Preview>
    </ModalWindow>
  );
};
