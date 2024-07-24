import { ArrowCircleDown } from '@styled-icons/fluentui-system-regular/ArrowCircleDown';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';
import type { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

import Logo from '@/components/Logo';
import { COLOUR_VARIANT } from '@/components/Logo/Logo.types';
import { useActiveTranslation } from '@/helpers/activeTranslation.hook';
import LayerMountains from '@/img/jumbo/fable_jumbo_1a.png';
import LayerForest from '@/img/jumbo/fable_jumbo_2a.png';
import RedLine from '@/img/span.png';

import { ContentWrapper, JumbotronWrapper, RedSpan } from './Jumbotron.styled';
import type { Jumbotron as JumbotronType } from './Jumbotron.types';

export const Jumbotron: JumbotronType = ({ header, redLineText }) => {
  const activeTranslation = useActiveTranslation();

  const headline: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 60],
    children: (
      <ContentWrapper>
        <h1>
          {activeTranslation === 'pl' && (
            <>
              Biblioteka
              <br />
            </>
          )}
          <Logo colourVariant={COLOUR_VARIANT.GREEN} />
          {activeTranslation === 'en' && (
            <>
              <br />
              Library
            </>
          )}
        </h1>
        <h2>
          {header.before}
          <br />
          <RedSpan>
            <Image src={RedLine.src} alt="Red line" width={282} height={116} />
            {redLineText}
          </RedSpan>
          {header.after}
        </h2>
      </ContentWrapper>
    ),
    className: 'headline-layer',
  };

  const mountains: BannerLayer = {
    image: LayerMountains.src,
    speed: -10,
    scale: [1.1, 1],
    shouldAlwaysCompleteAnimation: true,
    className: 'mountains-layer',
  };

  const forest: BannerLayer = {
    image: LayerForest.src,
    speed: 0,
    scale: [1, 1.1],
    shouldAlwaysCompleteAnimation: true,
    className: 'forest-layer',
  };

  return (
    <JumbotronWrapper>
      <ParallaxBanner layers={[mountains, headline, forest]} />
      <Link href="#content-start" aria-label="Scroll Down">
        <ArrowCircleDown />
      </Link>
    </JumbotronWrapper>
  );
};
