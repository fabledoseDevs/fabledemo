import type { ReactElement } from 'react';

import type { Story } from '@/types/fairytale.types';

export interface TemplateStoryPageProps {
  storyData: Story;
}

export type TemplateStoryPage = (props: TemplateStoryPageProps) => ReactElement;
