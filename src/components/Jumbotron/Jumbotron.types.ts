import type { ReactElement } from 'react';

export interface JumbotronProps {
  header: {
    before: string;
    after: string;
  };
  subtitle?: string;
  redLineText: string;
}

export type Jumbotron = (props: JumbotronProps) => ReactElement;
