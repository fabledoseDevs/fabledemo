import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import {
  BACKGROUND_VARIANTS,
  FONT_COLOR,
  FONT_SIZE,
} from '@/context/SettingsContext/SettingsContext.types';

import {
  SettingWrapper,
  ToolboxContainer,
  ToolboxModal,
} from './Toolbox.styled';
import type { Toolbox as ToolboxType } from './Toolbox.types';

export const Toolbox: ToolboxType = () => {
  const { settings, setSettings } = useSettingsContext();

  const handleBackgroundChange = (background: BACKGROUND_VARIANTS) => {
    setSettings(prevSettings => ({ ...prevSettings, background }));
  };

  const handleFontSizeChange = (fontSize: FONT_SIZE) => {
    setSettings(prevSettings => ({ ...prevSettings, fontSize }));
  };

  const handleFontColorChange = (fontColor: FONT_COLOR) => {
    setSettings(prevSettings => ({ ...prevSettings, fontColor }));
  };

  return (
    <ToolboxModal>
      <ToolboxContainer>
        <SettingWrapper>
          <h4>Tło Tekstu</h4>
          <label>
            <input
              type="radio"
              value="none"
              checked={settings.background === BACKGROUND_VARIANTS.NONE}
              onChange={() => handleBackgroundChange(BACKGROUND_VARIANTS.NONE)}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              value="light"
              checked={settings.background === BACKGROUND_VARIANTS.LIGHT}
              onChange={() => handleBackgroundChange(BACKGROUND_VARIANTS.LIGHT)}
            />
            Light
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={settings.background === BACKGROUND_VARIANTS.MEDIUM}
              onChange={() =>
                handleBackgroundChange(BACKGROUND_VARIANTS.MEDIUM)
              }
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="intense"
              checked={settings.background === BACKGROUND_VARIANTS.INTENSE}
              onChange={() =>
                handleBackgroundChange(BACKGROUND_VARIANTS.INTENSE)
              }
            />
            Intense
          </label>
        </SettingWrapper>
        <SettingWrapper>
          <h4>Wielkość czcionki</h4>
          <label>
            <input
              type="radio"
              value="small"
              checked={settings.fontSize === FONT_SIZE.SMALL}
              onChange={() => handleFontSizeChange(FONT_SIZE.SMALL)}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={settings.fontSize === FONT_SIZE.MEDIUM}
              onChange={() => handleFontSizeChange(FONT_SIZE.MEDIUM)}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={settings.fontSize === FONT_SIZE.LARGE}
              onChange={() => handleFontSizeChange(FONT_SIZE.LARGE)}
            />
            Large
          </label>
        </SettingWrapper>
        <SettingWrapper>
          <h4>Kolor czcionki</h4>
          <label>
            <input
              type="radio"
              value="white"
              checked={settings.fontColor === FONT_COLOR.WHITE}
              onChange={() => handleFontColorChange(FONT_COLOR.WHITE)}
            />
            White
          </label>
          <label>
            <input
              type="radio"
              value="black"
              checked={settings.fontColor === FONT_COLOR.WHITE_STROKED}
              onChange={() => handleFontColorChange(FONT_COLOR.WHITE_STROKED)}
            />
            White Stroked
          </label>
          <label>
            <input
              type="radio"
              value="white"
              checked={settings.fontColor === FONT_COLOR.BLACK}
              onChange={() => handleFontColorChange(FONT_COLOR.BLACK)}
            />
            Black
          </label>
          <label>
            <input
              type="radio"
              value="black"
              checked={settings.fontColor === FONT_COLOR.BLACK_STROKED}
              onChange={() => handleFontColorChange(FONT_COLOR.BLACK_STROKED)}
            />
            Black Stroked
          </label>
          <label>
            <input
              type="radio"
              value="white"
              checked={settings.fontColor === FONT_COLOR.YELLOW}
              onChange={() => handleFontColorChange(FONT_COLOR.YELLOW)}
            />
            Yellow
          </label>
          <label>
            <input
              type="radio"
              value="black"
              checked={settings.fontColor === FONT_COLOR.YELLOW_STROKED}
              onChange={() => handleFontColorChange(FONT_COLOR.YELLOW_STROKED)}
            />
            Yellow Stroked
          </label>
        </SettingWrapper>
      </ToolboxContainer>
    </ToolboxModal>
  );
};
