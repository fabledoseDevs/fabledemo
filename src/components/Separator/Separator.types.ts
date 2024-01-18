import type { ReactElement } from 'react';

export type SeparatorType = 'SMALL' | 'MEDIUM';

interface SeparatorProps {
  type: SeparatorType;
}

export type Separator = (props: SeparatorProps) => ReactElement;
