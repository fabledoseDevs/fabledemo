import { RotationGuardTranslations, useTranslation } from '@/translations';

import {
  ContentWrapper,
  DetailedMessage,
  GuardBody,
  MainMessage,
  RotationIcon,
} from './RotationGuard.styled';
import type { RotationGuard as RotationGuardType } from './RotationGuard.types';

export const RotationGuard: RotationGuardType = () => {
  const { mainMessage, detailedMessage } = useTranslation(
    RotationGuardTranslations,
  );
  return (
    <GuardBody>
      <ContentWrapper>
        <MainMessage>{mainMessage}</MainMessage>
        <RotationIcon />
        <DetailedMessage>
          {detailedMessage[0]}
          <br />
          {detailedMessage[1]}
          <br />
          {detailedMessage[2]}
          <br />
          {detailedMessage[3]}
        </DetailedMessage>
      </ContentWrapper>
    </GuardBody>
  );
};
