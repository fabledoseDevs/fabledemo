import NewsletterForm from '@/components/NewsletterForm';

import { LeftColumn, RightColumn, SummaryBody } from './ProjectSummary.styled';
import type { ProjectSummary as ProjectSummaryType } from './ProjectSummary.types';

export const ProjectSummary: ProjectSummaryType = ({
  mainText,
  supplementaryText,
}) => (
  <SummaryBody>
    <LeftColumn>
      {mainText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </LeftColumn>
    <RightColumn>
      {supplementaryText.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <NewsletterForm />
    </RightColumn>
  </SummaryBody>
);
