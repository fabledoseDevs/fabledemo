import { track } from '@vercel/analytics';

import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import ModalWindow from '@/components/ModalWindow';
import { quitStoryUiCleanup } from '@/helpers/storyUiCleanup';
import { ExitboxTranslations, useTranslation } from '@/translations';

import { ExitboxContainer } from './Exitbox.styled';
import type { Exitbox as ExitboxType } from './Exitbox.types';

export const Exitbox: ExitboxType = ({ exitFunction }) => {
  const { headline, acceptButton, declineButton } =
    useTranslation(ExitboxTranslations);

  const quitStory = () => {
    track('Story was abandoned!');
    quitStoryUiCleanup();
  };

  return (
    <ModalWindow exitFunction={exitFunction}>
      <ExitboxContainer>
        <h3>{headline}</h3>
        <div>
          <Button
            label={acceptButton}
            colorVariant={COLOR_VARIANTS.GREEN}
            fontVariant={FONT_VARIANTS.STANDARD}
            purpose={PURPOSE.ANCHOR}
            anchorLink={'/'}
            onclickAction={quitStory}
          />
          <Button
            label={declineButton}
            colorVariant={COLOR_VARIANTS.WHITE}
            fontVariant={FONT_VARIANTS.STANDARD}
            purpose={PURPOSE.FUNCTION_TRIGGER}
            onclickAction={() => exitFunction(false)}
          />
        </div>
      </ExitboxContainer>
    </ModalWindow>
  );
};
