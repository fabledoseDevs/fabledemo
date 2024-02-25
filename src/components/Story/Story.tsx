import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useRef } from 'react';
import {
  A11y,
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';

import { Slide, Slider } from '@/components/Story/Story.styled';
import StoryPage from '@/components/StoryPage';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent }) => {
  const swiperRef = useRef(null);

  return (
    <Slider
      ref={swiperRef}
      modules={[EffectFade, Navigation, Pagination, A11y, Keyboard, Mousewheel]}
      effect={'fade'}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      keyboard={{
        enabled: true,
        pageUpDown: true,
      }}
      mousewheel={{
        sensitivity: 2,
        invert: false,
      }}
    >
      {storyContent.map(singlePage => (
        <Slide key={singlePage.slideId} className="TUTAJ">
          <StoryPage
            layout={singlePage.layout}
            wildcardsData={singlePage.wildcardData}
            backgroundPicture={singlePage.picture}
            text={singlePage.paragraphs}
          />
        </Slide>
      ))}
    </Slider>
  );
};
