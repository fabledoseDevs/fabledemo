export interface QStory {
  sys: {
    id: string;
  };
  title: string;
  author: string[];
  adaptationAuthors: string[];
  translation: string[];
  picturesAuthors: string[];
  animation: string[];
  thumbnail: string;
  decorator: string;
  defaultColor: string;
  cover: {
    description: string;
    fhdAnimation?: Pick<Asset, 'url'>;
    hdAnimation: Pick<Asset, 'url'>;
    sdAnimation?: Pick<Asset, 'url'>;
    ldAnimation?: Pick<Asset, 'url'>;
    blurImage: Pick<Asset, 'url' | 'width' | 'height'>;
  };
  summary: string;
  extendedSummary: string;
  synopsis: string;
  mainTags: [string, string];
  extendedTags: string[];
  storyPagesCollection: {
    items: {
      name: string;
      id: number;
      layout: string;
      paragraphsCollection?: {
        items: {
          paragraphContent: string;
        }[];
      };
      animation: {
        description: string;
        fhdAnimation?: Pick<Asset, 'url'>;
        hdAnimation: Pick<Asset, 'url'>;
        sdAnimation?: Pick<Asset, 'url'>;
        ldAnimation?: Pick<Asset, 'url'>;
        backupImage: Pick<Asset, 'url' | 'width' | 'height'>;
      };
    }[];
  };
}

export interface QStoryCard {
  sys: {
    id: string;
  };
  title: string;
  summary: string;
  synopsis: string;
  mainTags: [string, string];
  extendedTags: string[];
}

interface Asset {
  width: number;
  height: number;
  description: string;
  title: string;
  url: string;
}
