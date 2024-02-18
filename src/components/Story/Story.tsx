import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Swiper } from 'swiper';
import { A11y, EffectFade, Navigation, Pagination } from 'swiper/modules';

import { Slide, Slider } from '@/components/Story/Story.styled';

import type { Story as StoryType } from './Story.types';

export const Story: StoryType = ({ storyContent }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      const keyDownHandler = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight' || event.key === '.') {
          swiperInstance.slideNext();
        } else if (event.key === 'ArrowLeft' || event.key === ',') {
          swiperInstance.slidePrev();
        }
      };

      const wheelHandler = (event: WheelEvent) => {
        if (event.deltaY > 0) {
          swiperInstance.slideNext();
        } else {
          swiperInstance.slidePrev();
        }
      };

      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('wheel', wheelHandler);

      return () => {
        document.removeEventListener('keydown', keyDownHandler);
        document.removeEventListener('wheel', wheelHandler);
      };
    }
  }, []);

  return (
    <Slider
      ref={swiperRef}
      modules={[EffectFade, Navigation, Pagination, A11y]}
      effect={'fade'}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
      <Slide>Slide 5</Slide>
      <Slide>Slide 6</Slide>
      <Slide>Slide 7</Slide>
      <Slide>Slide 8</Slide>
      <Slide>Slide 9</Slide>
      <Slide>Slide 10</Slide>
      <Slide>Slide 11</Slide>
      <Slide>Slide 12</Slide>
    </Slider>
  );
};
