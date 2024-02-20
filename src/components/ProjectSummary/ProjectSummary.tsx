import Image from 'next/image';

import KickstarterImage from '@/../public/images/kickstarterLogo.svg';

import {
  EmailForm,
  EmailInput,
  EmailSubmitButton,
  LeftColumn,
  RightColumn,
  SummaryBody,
} from './ProjectSummary.styled';
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
      <EmailForm>
        <EmailInput type="email" />
        <EmailSubmitButton type="submit">Join Newsletter</EmailSubmitButton>
      </EmailForm>
      <Image src={KickstarterImage} alt="Kickstarter" />
    </RightColumn>
  </SummaryBody>
);
