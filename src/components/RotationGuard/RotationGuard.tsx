import {
  ContentWrapper,
  DetailedMessage,
  GuardBody,
  MainMessage,
  RotationIcon,
} from './RotationGuard.styled';
import type { RotationGuard as RotationGuardType } from './RotationGuard.types';

export const RotationGuard: RotationGuardType = () => (
  <GuardBody>
    <ContentWrapper>
      <MainMessage>Obróć urządzenie aby zobaczyć bajkę.</MainMessage>
      <RotationIcon />
      <DetailedMessage>
        Nasze bajki zostały zoptymalizowane pod urządzenia w ułożeniu
        horyzontalnym.
        <br />
        Obróć swoje urządzenie jeżeli widzisz ten komunikat.
        <br />
        Tablety, laptopy i większe monitory zapewnią ci najlepsze doświadczenie
        podczas czytania.
        <br />
        Jeżeli używasz telefonu komórkowego, rozważ zmianę urządzenia do
        oglądania naszych propozycji.
      </DetailedMessage>
    </ContentWrapper>
  </GuardBody>
);
