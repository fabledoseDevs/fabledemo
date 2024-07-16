import AnimatedCircle from '@/img/loading_animation.gif';

import { Animation, Label, LoadingScreenBody } from './LoadingScreen.styled';
import type { LoadingScreen as LoadingScreenType } from './LoadingScreen.types';

export const LoadingScreen: LoadingScreenType = ({
  loadingLabel,
  fadeOutReady,
  bgColor,
}) => (
  <LoadingScreenBody fadeOutAnimation={fadeOutReady} bgColor={bgColor}>
    <Animation
      alt={'Loading...'}
      src={AnimatedCircle.src}
      width={130}
      height={130}
    />
    <Label>{loadingLabel}</Label>
  </LoadingScreenBody>
);
