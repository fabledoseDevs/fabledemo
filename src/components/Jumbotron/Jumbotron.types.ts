import type { ReactElement } from 'react';

import type { ButtonProps } from '@/components/Button';

export interface JumbotronProps {
  header: {
    before: string;
    after: string;
  };
  subtitle: string;
  redLineText: string;
  button: ButtonProps;
}

export type Jumbotron = (props: JumbotronProps) => ReactElement;
