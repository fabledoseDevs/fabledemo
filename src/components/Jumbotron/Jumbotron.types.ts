import type { ReactElement } from 'react';

import type { ButtonProps } from '@/componentsButton';

export interface JumbotronProps {
  header: {
    before: string;
    after: string;
  };
  subtitle?: string;
  redLineText: string;
  button: ButtonProps;
}

export type Jumbotron = (props: JumbotronProps) => ReactElement;
