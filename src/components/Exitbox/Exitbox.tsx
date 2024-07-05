import {
  COLOR_VARIANTS,
  FONT_VARIANTS,
  PURPOSE,
} from '@/components/Button/Button.types';
import ModalWindow from '@/components/ModalWindow';
import Button from '@/componentsButton';

import { quitStoryUiCleanup } from '../../helpers/storyUiCleanup';
import { ExitboxContainer } from './Exitbox.styled';
import type { Exitbox as ExitboxType } from './Exitbox.types';

export const Exitbox: ExitboxType = ({ exitFunction }) => (
  <ModalWindow exitFunction={exitFunction}>
    <ExitboxContainer>
      <h3>Czy chesz zakończyć czytanie i wrócić do strony głównej?</h3>
      <div>
        <Button
          label={'Tak, wracam do strony głównej'}
          colorVariant={COLOR_VARIANTS.GREEN}
          fontVariant={FONT_VARIANTS.STANDARD}
          purpose={PURPOSE.ANCHOR}
          anchorLink={'/'}
          onclickAction={quitStoryUiCleanup}
        />
        <Button
          label={'Nie, chcę czytać dalej'}
          colorVariant={COLOR_VARIANTS.WHITE}
          fontVariant={FONT_VARIANTS.STANDARD}
          purpose={PURPOSE.FUNCTION_TRIGGER}
          onclickAction={() => exitFunction(false)}
        />
      </div>
    </ExitboxContainer>
  </ModalWindow>
);
