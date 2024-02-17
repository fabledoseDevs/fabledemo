import type { ReactElement } from 'react';

export interface ProjectSummaryProps {
  mainText: string[];
  supplementaryText: string[];
}

export type ProjectSummary = (props: ProjectSummaryProps) => ReactElement;
