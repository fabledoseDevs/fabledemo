import { AnimatedPicture } from './SlidePicture.styled';
import type { SlidePicture as SlidePictureType } from './SlidePicture.types';

export const SlidePicture: SlidePictureType = ({
  picDescription,
  picSizes,
}) => (
  <AnimatedPicture
    autoPlay={true}
    muted={true}
    controls={false}
    loop={true}
    aria-label={picDescription}
  >
    <source src={picSizes['1080']} media={'(min-width: 1920px)'} />
    <source src={picSizes['720']} media={'(min-width: 1280px)'} />
    <source src={picSizes['480']} media={'(min-width: 720px)'} />
    <source src={picSizes['360']} />
  </AnimatedPicture>
);
