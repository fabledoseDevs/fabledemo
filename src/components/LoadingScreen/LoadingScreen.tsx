import AnimatedCircle from '@/img/loading_animation.gif';
import { LoadingScreenTranslations, useTranslation } from '@/translations';

import { Animation, Label, LoadingScreenBody } from './LoadingScreen.styled';
import type { LoadingScreen as LoadingScreenType } from './LoadingScreen.types';

export const LoadingScreen: LoadingScreenType = ({ fadeOutReady, bgColor }) => {
  const { label, alt } = useTranslation(LoadingScreenTranslations);

  return (
    <LoadingScreenBody fadeOutAnimation={fadeOutReady} bgColor={bgColor}>
      <Animation alt={alt} src={AnimatedCircle.src} width={130} height={130} />
      <Label>{label}</Label>
    </LoadingScreenBody>
  );
};
