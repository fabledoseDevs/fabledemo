import {
  DetailedMessage,
  GuardBody,
  MainMessage,
  RotationIcon,
} from '@/components/RotationGuard/RotationGuard.styled';

import type { RotationGuard as RotationGuardType } from './RotationGuard.types';

export const RotationGuard: RotationGuardType = () => (
  <GuardBody>
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
      Jeżeli używasz telefonu komórkowego, rozważ zmianę urządzenia do oglądania
      naszych propozycji.
    </DetailedMessage>
  </GuardBody>
);
