import { TextBox } from '@/components/StoryPage/StoryPage.styled';
import { useSettingsContext } from '@/context/SettingsContext/SettingsContext.provider';
import {
  BACKGROUND_VARIANTS,
  FONT_COLOR,
  FONT_SIZE,
} from '@/context/SettingsContext/SettingsContext.types';

import {
  Preview,
  SettingButton,
  SettingElementWrapper,
  SettingName,
  Settings,
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
        <Settings>
          <SettingWrapper>
            <SettingName>Tło dla tekstu</SettingName>
            <SettingElementWrapper>
              <input
                type="radio"
                value="none"
                checked={settings.background === BACKGROUND_VARIANTS.NONE}
                onChange={() =>
                  handleBackgroundChange(BACKGROUND_VARIANTS.NONE)
                }
              />
              <SettingButton>None</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="light"
                checked={settings.background === BACKGROUND_VARIANTS.LIGHT}
                onChange={() =>
                  handleBackgroundChange(BACKGROUND_VARIANTS.LIGHT)
                }
              />
              <SettingButton>Light</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="medium"
                checked={settings.background === BACKGROUND_VARIANTS.MEDIUM}
                onChange={() =>
                  handleBackgroundChange(BACKGROUND_VARIANTS.MEDIUM)
                }
              />
              <SettingButton>Medium</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="intense"
                checked={settings.background === BACKGROUND_VARIANTS.INTENSE}
                onChange={() =>
                  handleBackgroundChange(BACKGROUND_VARIANTS.INTENSE)
                }
              />
              <SettingButton>Intense</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
          <SettingWrapper>
            <SettingName>Wielkość czcionki</SettingName>
            <SettingElementWrapper>
              <input
                type="radio"
                value="small"
                checked={settings.fontSize === FONT_SIZE.SMALL}
                onChange={() => handleFontSizeChange(FONT_SIZE.SMALL)}
              />
              <SettingButton>Small</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="medium"
                checked={settings.fontSize === FONT_SIZE.MEDIUM}
                onChange={() => handleFontSizeChange(FONT_SIZE.MEDIUM)}
              />
              <SettingButton>Medium</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="medium"
                checked={settings.fontSize === FONT_SIZE.LARGE}
                onChange={() => handleFontSizeChange(FONT_SIZE.LARGE)}
              />
              <SettingButton>Large</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
          <SettingWrapper>
            <SettingName>Kolor czcionki</SettingName>
            <SettingElementWrapper>
              <input
                type="radio"
                value="white"
                checked={settings.fontColor === FONT_COLOR.WHITE}
                onChange={() => handleFontColorChange(FONT_COLOR.WHITE)}
              />
              <SettingButton>White</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="black"
                checked={settings.fontColor === FONT_COLOR.WHITE_STROKED}
                onChange={() => handleFontColorChange(FONT_COLOR.WHITE_STROKED)}
              />
              <SettingButton>White Stroked</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="white"
                checked={settings.fontColor === FONT_COLOR.BLACK}
                onChange={() => handleFontColorChange(FONT_COLOR.BLACK)}
              />
              <SettingButton>Black</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="black"
                checked={settings.fontColor === FONT_COLOR.BLACK_STROKED}
                onChange={() => handleFontColorChange(FONT_COLOR.BLACK_STROKED)}
              />
              <SettingButton>Black Stroked</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="white"
                checked={settings.fontColor === FONT_COLOR.YELLOW}
                onChange={() => handleFontColorChange(FONT_COLOR.YELLOW)}
              />
              <SettingButton>Yellow</SettingButton>
            </SettingElementWrapper>
            <SettingElementWrapper>
              <input
                type="radio"
                value="black"
                checked={settings.fontColor === FONT_COLOR.YELLOW_STROKED}
                onChange={() =>
                  handleFontColorChange(FONT_COLOR.YELLOW_STROKED)
                }
              />
              <SettingButton>Yellow Stroked</SettingButton>
            </SettingElementWrapper>
          </SettingWrapper>
        </Settings>
        <Preview>
          <TextBox
            background={settings.background}
            fontSize={settings.fontSize}
            fontColor={settings.fontColor}
          >
            Dawno temu, w odległej krainie, otoczonej mrocznymi lasami i
            malowniczymi górami, żyła piękna królewna o imieniu Śnieżka. Jej
            skóra była biała jak śnieg, a włosy czarne jak atrament. Jednak
            szczęśliwe życie Śnieżki było zagrożone przez kaprys jej złej
            macochy, która ponad wszystko, pragnęła być uznawaną za
            najpięknijeszą...
          </TextBox>
        </Preview>
      </ToolboxContainer>
    </ToolboxModal>
  );
};
