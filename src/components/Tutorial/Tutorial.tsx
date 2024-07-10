import { ArrowCircleLeft } from '@styled-icons/fluentui-system-regular/ArrowCircleLeft';
import { ArrowCircleRight } from '@styled-icons/fluentui-system-regular/ArrowCircleRight';
import { FullScreenMaximize } from '@styled-icons/fluentui-system-regular/FullScreenMaximize';
import { Home as HomeIcon } from '@styled-icons/fluentui-system-regular/Home';
import { TextBoxSettings } from '@styled-icons/fluentui-system-regular/TextBoxSettings';
import { Close } from '@styled-icons/ionicons-outline/Close';

import Button from '@/componentsButton';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/componentsButton/Button.types';
import { useTutorial } from '@/componentsTutorial/Tutorial.hook';

import {
  BackgroundPicture,
  ButtonsPositioner,
  ExitButton,
  GreeterBody,
  GreeterWrapper,
  MainTutorial,
  OptionsActiveFrame,
  SlideSwitchActiveFrame,
  TextBox,
  TextBoxActiveFrame,
  TipsSwitch,
  TipsWindow,
  TutorialBody,
} from './Tutorial.styled';
import type { Tutorial as TutorialType } from './Tutorial.types';
import { TUTORIAL_STEPS } from './Tutorial.types';

export const Tutorial: TutorialType = ({ closeTutorial }) => {
  const { currentStep, setCurrentStep, nextTip, prevTip, killTutorial } =
    useTutorial(closeTutorial);

  return (
    <TutorialBody>
      {currentStep === TUTORIAL_STEPS.INTRO && (
        <GreeterWrapper>
          <GreeterBody>
            <p>
              Czy chcesz skożystać z samouczka, który podpowie ci jak czytać
              nasze bajki?
            </p>
            <ButtonsPositioner>
              <Button
                label={'Tak'}
                colorVariant={COLOR_VARIANTS.GREEN}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={() => setCurrentStep(TUTORIAL_STEPS.SLIDE)}
              />
              <Button
                label={'Nie'}
                colorVariant={COLOR_VARIANTS.WHITE}
                fontVariant={FONT_VARIANTS.UPPERCASE}
                purpose={PURPOSE.FUNCTION_TRIGGER}
                onclickAction={killTutorial}
              />
            </ButtonsPositioner>
          </GreeterBody>
        </GreeterWrapper>
      )}
      {currentStep !== TUTORIAL_STEPS.INTRO && (
        <MainTutorial>
          <BackgroundPicture isActive={currentStep === TUTORIAL_STEPS.SLIDE}>
            <TextBoxActiveFrame
              isActive={
                currentStep === TUTORIAL_STEPS.TEXT_BOX_BASIC ||
                currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED
              }
            >
              <TextBox
                extraBackground={
                  currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED
                }
              >
                <p>
                  Jego brat Gucio zawędrował nad rzekę, gdzie postanowił
                  zbudować własny domek. &quot;Nie mam ochoty spędzać za dużo
                  czasu na budowaniu. Nie znam się na tym, a poza tym chcę
                  połowić ryby w tej rzece. Tamto żeremie bobrowe wygląda
                  przepięknie. Zrobię swój domek w podobnym tonie!&quot; I
                  zabrał się do pracy. Nazbierał gałęzi, patyków i zwalonych pni
                  drzewa. Potem zbudował solidny szałas. Drzwi wykonał ze
                  znalezionych desek. Wstawił nawet okno z okiennicami.
                  Budowanie zajęło mu trzy dni. Zadowolony z siebie otrzepał
                  rączki i usiadł do łowienia ryb.
                </p>
              </TextBox>
            </TextBoxActiveFrame>
            <OptionsActiveFrame
              isActive={currentStep === TUTORIAL_STEPS.OPTIONS}
            >
              <HomeIcon />
              <TextBoxSettings />
              <FullScreenMaximize />
            </OptionsActiveFrame>
            <SlideSwitchActiveFrame
              isActive={currentStep === TUTORIAL_STEPS.SLIDE_SWITCH}
            >
              <ArrowCircleLeft />
              <p>3/12</p>
              <ArrowCircleRight />
            </SlideSwitchActiveFrame>
          </BackgroundPicture>

          <TipsWindow>
            <TipsSwitch
              disabled={currentStep === TUTORIAL_STEPS.SLIDE}
              onClick={prevTip}
            >
              <ArrowCircleLeft />
            </TipsSwitch>
            {currentStep === TUTORIAL_STEPS.SLIDE && (
              <p>
                Biblioteka Fabledose służy wyświetlaniu animowanych bajek do
                czytania. Po otworzeniu bajki, Twoim oczom ukaże się animowana
                strona naszej wirtualnej książki dla dzieci.
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.TEXT_BOX_BASIC && (
              <p>
                Animowane tło zawsze jest opatrzone tekstem. Jego treść pokrywa
                się z obrazem tworząc spójną całość.
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.TEXT_BOX_ADVANCED && (
              <p>
                Jeżeli literki są zbyt małe lub zlewają się z animacją w tle,
                możesz je łatwo dostosować do swoich potrzeb, zwiekszając
                rozmiar czcionki, zmieniając jej kolor lub dodając szare tło pod
                tekstem.
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.OPTIONS && (
              <p>
                W lewym dolnym rogu znajdują się ikony ustawień. Ikona domu (
                <HomeIcon />) zabierze Cię z powrotem do strony głównej. Ikona
                listy ustawień (<TextBoxSettings />) otworzy okno z
                ustawieniami, gdzie będziesz mógł zdefiniować wielkość czcionki
                oraz jej tło. Ikona ramki (<FullScreenMaximize />) przełączy
                bajkę w tryb pełnego ekranu.
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.SLIDE_SWITCH && (
              <p>
                W prawym dolnym rogu znajduje się informacja na temat długości
                bajki oraz bieżącej strony. Strzałkami z lewej i prawej strony
                numeracji możesz przełączać strony. Ponadto strony możesz
                przeączać gestem przesunięcia (tablet i smartfon), klawiszami
                strzałek na klawiaturze oraz kółkiem myszki.
              </p>
            )}
            {currentStep === TUTORIAL_STEPS.OUTRO && (
              <p>
                To tyle! Prawda, że to banalnie proste? Jesteś gotów, aby
                rozpocząć przygodę z baśniami Fabledose. Naciskając strzałkę w
                prawo, opuścisz tutorial.
              </p>
            )}
            <TipsSwitch onClick={nextTip}>
              <ArrowCircleRight />
            </TipsSwitch>
          </TipsWindow>
          <ExitButton onClick={killTutorial}>
            <span>Wyłącz Tutorial</span>
            <Close />
          </ExitButton>
        </MainTutorial>
      )}
    </TutorialBody>
  );
};
