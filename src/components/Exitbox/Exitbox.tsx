import Button from '@/components/Button';
import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import ModalWindow from '@/components/ModalWindow';
import { quitStoryUiCleanup } from '@/helpers/storyUiCleanup';

import { ExitboxContainer } from './Exitbox.styled';
import { useTranslation } from './Exitbox.translations';
import type { Exitbox as ExitboxType } from './Exitbox.types';

export const Exitbox: ExitboxType = ({ exitFunction }) => {
  const { headline, acceptButton, declineButton } = useTranslation();

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
            onclickAction={quitStoryUiCleanup}
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
