import type { ReactElement } from 'react';

import type { Story } from '@/fables_library/library.types';

export interface TemplateStoryPageProps {
  storyData: Story;
}

export type TemplateStoryPage = (props: TemplateStoryPageProps) => ReactElement;
