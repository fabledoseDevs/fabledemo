import { AnimatedPicture } from './StoryPagePicture.styled';
import type { StoryPagePicture as StoryPagePictureType } from './StoryPagePicture.types';

export const StoryPagePicture: StoryPagePictureType = ({
  description,
  picSizes,
}) => (
  <AnimatedPicture
    autoPlay={true}
    muted={true}
    controls={false}
    loop={true}
    aria-label={description}
  >
    <source src={picSizes['1080']} media={'(min-width: 1920px)'} />
    <source src={picSizes['720']} />
  </AnimatedPicture>
);
