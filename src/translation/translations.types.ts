export type StoryCardTT = {
  title: string;
  url: string;
  summary: string;
  synopsis: string;
};

export type TemplateLandingPageTT = {
  jumbotron: {
    subtitle: string;
    before: string;
    after: string;
    redLineText: string;
  };
  storyCardButtonLabel: { read: string; comingSoon: string };
  projectSummary: { mainText: string[]; supplementaryText: string[] };
};
