import type { ReactElement } from 'react';

import type { Story } from '@/fablesLibrary/library.types';

export interface TemplateStoryPageProps {
  storyData: Story;
}

export type TemplateStoryPage = (props: TemplateStoryPageProps) => ReactElement;
